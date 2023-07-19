import { type Readable } from 'svelte/store';
import type { Block, BlockComponent } from './type';
declare const gen_id: () => `component-${number}`;
export type TuringCurrentComponent = {
    key: ReturnType<typeof gen_id>;
    component: BlockComponent['component'];
};
export declare function turing_render_loop(block: Block): Readable<TuringCurrentComponent>;
export {};
