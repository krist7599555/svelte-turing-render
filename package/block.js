import Empty from './component/empty.svelte';
import Never from './component/never.svelte';
/** @pure */
export function component(opt) {
    return {
        type: 'component',
        component: opt.component,
        props: opt.props ?? {},
        events: opt.events ?? {},
    };
}
/** @pure */
export function fun(f) {
    return {
        type: 'function',
        function: f,
    };
}
/* ------------------------------ DERIVE BLOCK ------------------------------ */
export const NEVER_BLOCK = component({ component: Never });
export const EMPTY_BLOCK = component({ component: Empty });
