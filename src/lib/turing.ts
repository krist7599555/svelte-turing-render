import { type Readable, writable } from 'svelte/store';
import type { Simplify } from 'type-fest';

import { NEVER_BLOCK } from './block';
import type { Block, BlockComponent } from './type';
import { is_array, is_block_component, is_block_function, is_function, is_promise } from './utils';

const gen_id = (() => {
  let i = 0;
  return () => `component-${++i}` as const;
})();

export type BlockComponentWithKey = Simplify<BlockComponent & { key: ReturnType<typeof gen_id> }>;

export function turing_render_loop(block: Block): Readable<BlockComponentWithKey> {
  const store = writable<BlockComponentWithKey>({ ...NEVER_BLOCK, key: gen_id() });
  async function run(o: Block): Promise<void> {
    if (!o) return;
    // @ts-ignore
    else if (is_promise(o)) return run(await o);
    else if (is_function(o)) return run(o());
    else if (is_array(o)) {
      for (const item of o) {
        await run(item);
      }
    } else if (is_block_function(o)) {
      await o.function();
    } else if (is_block_component(o)) {
      await new Promise<void>(resolve => {
        store.set({
          ...o,
          events: {
            ...o.events,
            complete() {
              if (is_function(o?.events?.complete)) {
                o.events.complete();
              }
              resolve();
            },
          },
          key: gen_id(),
        });
      });
    } else {
      console.error(o);
      throw new Error(`block type not match any guard for ${o}`);
    }
  }
  run(block);
  return {
    subscribe: store.subscribe,
  };
}
