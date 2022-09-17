import { SvelteComponentTyped } from "svelte";
import type { Block } from './type';
declare const __propDef: {
    props: {
        block?: Block;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export declare type IndexProps = typeof __propDef.props;
export declare type IndexEvents = typeof __propDef.events;
export declare type IndexSlots = typeof __propDef.slots;
export default class Index extends SvelteComponentTyped<IndexProps, IndexEvents, IndexSlots> {
    get block(): Block;
    /**accessor*/
    set block(_: Block);
}
export {};
