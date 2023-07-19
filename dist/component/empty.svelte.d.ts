import { SvelteComponent } from "svelte";
declare const __propDef: {
    props: Record<string, never>;
    events: {
        complete: CustomEvent<void>;
    } & {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export type EmptyProps = typeof __propDef.props;
export type EmptyEvents = typeof __propDef.events;
export type EmptySlots = typeof __propDef.slots;
export default class Empty extends SvelteComponent<EmptyProps, EmptyEvents, EmptySlots> {
}
export {};
