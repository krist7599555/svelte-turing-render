/** @typedef {typeof __propDef.props}  NeverProps */
/** @typedef {typeof __propDef.events}  NeverEvents */
/** @typedef {typeof __propDef.slots}  NeverSlots */
export default class Never extends SvelteComponentTyped<{}, {
    [evt: string]: CustomEvent<any>;
}, {}> {
}
export type NeverProps = typeof __propDef.props;
export type NeverEvents = typeof __propDef.events;
export type NeverSlots = typeof __propDef.slots;
import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {};
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export {};
