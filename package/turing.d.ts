import { type Readable } from 'svelte/store';
import type { Simplify } from 'type-fest';
import type { Block, BlockComponent } from './type';
declare const gen_id: () => `component-${number}`;
export declare type BlockComponentWithKey = Simplify<BlockComponent & {
    key: ReturnType<typeof gen_id>;
}>;
export declare function turing_render_loop(block: Block): Readable<BlockComponentWithKey>;
export {};
