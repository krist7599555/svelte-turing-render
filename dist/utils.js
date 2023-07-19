/** @pure */
export function is_block_component(o) {
    return (is_object(o) &&
        o.type == 'component' &&
        is_svelte_component(o.component) &&
        is_object(o.props) &&
        is_object(o.events));
}
/** @pure */
export function is_block_function(o) {
    return is_object(o) && o.type == 'function' && is_function(o.function);
}
/** @pure */
export function is_svelte_component(o) {
    return is_function(o) || (is_object(o) && ('render' in o || '$$render' in o));
}
/** @pure */
export function is_promise(o) {
    return is_function(o?.then);
}
/** @pure */
export function is_object(o) {
    return o != null && o instanceof Object && typeof o == 'object';
}
/** @pure */
export function is_array(o) {
    return o instanceof Array;
}
/** @pure */
export function is_function(o) {
    return o instanceof Function;
}
