import type { ComponentType, SvelteComponent } from 'svelte';

import Empty from './component/empty.svelte';
import Never from './component/never.svelte';
import type { BlockComponent, BlockFunction } from './type';

/** @pure */
export function component<T extends SvelteComponent>(opt: {
  component: ComponentType<T>;
  props?: T['$$prop_def'];
  events?: {
    [key in keyof T['$$events_def']]: (event: T['$$events_def'][key]) => void;
  } & {
    mount?: (instance: T) => void;
    destroy?: () => void;
  };
}): BlockComponent {
  return {
    type: 'component',
    component: opt.component,
    props: opt.props ?? {},
    events: opt.events ?? {},
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
