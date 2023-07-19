import type { ComponentType, SvelteComponent } from 'svelte';
import type { BlockComponent, BlockFunction } from './type';
/** @pure */
export declare function component<T extends SvelteComponent>(opt: {
    component: ComponentType<T>;
    props?: T['$$prop_def'];
    events?: {
        [key in keyof T['$$events_def']]: (event: T['$$events_def'][key]) => void;
    } & {
        mount?: (instance: T) => void;
        destroy?: () => void;
    };
}): BlockComponent;
/** @pure */
export declare function fun(f: () => unknown): BlockFunction;
export declare const NEVER_BLOCK: BlockComponent;
export declare const EMPTY_BLOCK: BlockComponent;
