/** @typedef {typeof __propDef.props}  NeverProps */
/** @typedef {typeof __propDef.events}  NeverEvents */
/** @typedef {typeof __propDef.slots}  NeverSlots */
export default class Never extends SvelteComponent<{
    [x: string]: never;
}, {
    [evt: string]: CustomEvent<any>;
}, {}> {
}
export type NeverProps = typeof __propDef.props;
export type NeverEvents = typeof __propDef.events;
export type NeverSlots = typeof __propDef.slots;
import { SvelteComponent } from "svelte";
declare const __propDef: {
    props: {
        [x: string]: never;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export {};
