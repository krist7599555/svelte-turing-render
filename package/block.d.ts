import type { ComponentEvents, ComponentProps, SvelteComponent } from 'svelte';
import type { Class, Simplify } from 'type-fest';
import type { BlockComponent, BlockFunction } from './type';
declare type ComponentEventsStrictHandlers<T extends SvelteComponent> = Simplify<{
    [key in keyof ComponentEvents<T> as string extends key ? never : key]?: (e: ComponentEvents<T>[key]) => void;
}>;
/** @pure */
export declare function component<T extends SvelteComponent>(opt: {
    component: Class<T>;
    props?: ComponentProps<T>;
    events?: ComponentEventsStrictHandlers<T>;
}): BlockComponent;
/** @pure */
export declare function fun(f: () => unknown): BlockFunction;
export declare const NEVER_BLOCK: BlockComponent;
export declare const EMPTY_BLOCK: BlockComponent;
export {};
