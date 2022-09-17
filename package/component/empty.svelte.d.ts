import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {};
    events: {
        complete: CustomEvent<any>;
    } & {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export declare type EmptyProps = typeof __propDef.props;
export declare type EmptyEvents = typeof __propDef.events;
export declare type EmptySlots = typeof __propDef.slots;
export default class Empty extends SvelteComponentTyped<EmptyProps, EmptyEvents, EmptySlots> {
}
export {};
