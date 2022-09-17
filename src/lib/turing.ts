import type { ComponentConstructorOptions } from 'svelte/internal';
import { type Readable, writable } from 'svelte/store';

import { browser } from '$app/environment';

import { NEVER_BLOCK } from './block';
import type { Block, BlockComponent } from './type';
import { is_array, is_block_component, is_block_function, is_function, is_promise } from './utils';

const gen_id = (() => {
  let i = 0;
  return () => `component-${++i}` as const;
})();

export type TuringCurrentComponent = {
  key: ReturnType<typeof gen_id>;
  component: BlockComponent['component'];
};

export function turing_render_loop(block: Block): Readable<TuringCurrentComponent> {
  const store = writable<TuringCurrentComponent>({ ...NEVER_BLOCK, key: gen_id() });
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
      const { props, events, component: BaseComponent } = o;
      await new Promise<void>(resolve => {
        store.set({
          key: gen_id(),
          component: class extends BaseComponent {
            constructor(args: ComponentConstructorOptions<typeof props>) {
              super({
                ...args,
                intro: true,
                props: {
                  ...props,
                  ...args.props,
                },
              } as typeof args);
              this.$on('complete', () => resolve());
              for (const [event_name, handle] of Object.entries(events)) {
                this.$on(event_name, handle);
              }
              if (is_function(events?.mount)) {
                this.$$.on_mount.push(() => events.mount(this));
              }
              if (is_function(events?.destroy)) {
                this.$$.on_destroy.push(() => events.destroy());
              }
            }
          },
        });
      });
    } else {
      console.error(o);
      throw new Error(`block type not match any guard for ${o}`);
    }
  }
  if (browser) {
    run(block);
  }
  return {
    subscribe: store.subscribe,
  };
}
