/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import type { BlockComponent, BlockFunction } from './type';

/** @pure */
export function is_block_component(o: any): o is BlockComponent {
  return (
    is_object(o) &&
    o.type == 'component' &&
    is_svelte_component(o.component) &&
    is_object(o.props) &&
    is_object(o.events)
  );
}

/** @pure */
export function is_block_function(o: any): o is BlockFunction {
  return is_object(o) && o.type == 'function' && is_function(o.function);
}

/** @pure */
export function is_svelte_component(o: any): o is unknown {
  return is_function(o) || (is_object(o) && ('render' in o || '$$render' in o));
}

/** @pure */
export function is_promise(o: any): o is Promise<unknown> {
  return is_function(o?.then);
}

/** @pure */
export function is_object(o: unknown): o is Record<string, unknown> {
  return o != null && o instanceof Object && typeof o == 'object';
}

/** @pure */
export function is_array(o: unknown): o is Array<unknown> {
  return o instanceof Array;
}

/** @pure */
export function is_function(o: unknown): o is (...agrs: unknown[]) => unknown {
  return o instanceof Function;
}
