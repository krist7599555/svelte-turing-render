import type { BlockComponent, BlockFunction } from './type';
export declare function is_block_component(o: any): o is BlockComponent;
export declare function is_block_function(o: any): o is BlockFunction;
export declare function is_svelte_component(o: any): o is unknown;
export declare function is_promise(o: any): o is Promise<unknown>;
export declare function is_object(o: unknown): o is Record<string, unknown>;
export declare function is_array(o: unknown): o is Array<unknown>;
export declare function is_function(o: unknown): o is (...agrs: unknown[]) => unknown;
