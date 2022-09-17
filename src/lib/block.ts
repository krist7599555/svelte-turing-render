import type { ComponentEvents, ComponentProps, SvelteComponent } from 'svelte';
import type { Class, Simplify } from 'type-fest';

import Empty from './component/empty.svelte';
import Never from './component/never.svelte';
import type { BlockComponent, BlockFunction } from './type';

type ComponentEventsStrictHandlers<T extends SvelteComponent> = Simplify<
  {
    [key in keyof ComponentEvents<T> as string extends key ? never : key]?: (
      e: ComponentEvents<T>[key]
    ) => void;
  } & {
    mount?: (instance: T) => void | Promise<void> | (() => any);
    destroy?: () => void;
  }
>;

/** @pure */
export function component<T extends SvelteComponent>(opt: {
  component: Class<T>;
  props?: ComponentProps<T>;
  events?: ComponentEventsStrictHandlers<T>;
}): BlockComponent {
  return {
    type: 'component',
    component: opt.component,
    props: opt.props ?? {},
    events: opt.events ?? ({} as any),
  };
}

/** @pure */
export function fun(f: () => unknown): BlockFunction {
  return {
    type: 'function',
    function: f,
  };
}

/* ------------------------------ DERIVE BLOCK ------------------------------ */

export const NEVER_BLOCK = component({ component: Never });
export const EMPTY_BLOCK = component({ component: Empty });
