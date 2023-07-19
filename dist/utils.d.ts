import type { BlockComponent, BlockFunction } from './type';
/** @pure */
export declare function is_block_component(o: any): o is BlockComponent;
/** @pure */
export declare function is_block_function(o: any): o is BlockFunction;
/** @pure */
export declare function is_svelte_component(o: any): o is unknown;
/** @pure */
export declare function is_promise(o: any): o is Promise<unknown>;
/** @pure */
export declare function is_object(o: unknown): o is Record<string, unknown>;
/** @pure */
export declare function is_array(o: unknown): o is Array<unknown>;
/** @pure */
export declare function is_function(o: unknown): o is (...agrs: unknown[]) => unknown;
