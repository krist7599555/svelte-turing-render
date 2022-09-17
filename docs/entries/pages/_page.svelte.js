import { c as create_ssr_component, d as createEventDispatcher, v as validate_component, m as missing_component, f as globals, b as subscribe, n as noop } from "../../chunks/index.js";
import { w as writable } from "../../chunks/index2.js";
const Empty = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  createEventDispatcher();
  return `


`;
});
const Never = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `
`;
});
function component(opt) {
  return {
    type: "component",
    component: opt.component,
    props: opt.props ?? {},
    events: opt.events ?? {}
  };
}
const NEVER_BLOCK = component({ component: Never });
component({ component: Empty });
function is_block_component(o) {
  return is_object(o) && o.type == "component" && is_svelte_component(o.component) && is_object(o.props) && is_object(o.events);
}
function is_block_function(o) {
  return is_object(o) && o.type == "function" && is_function(o.function);
}
function is_svelte_component(o) {
  return is_function(o) || is_object(o) && ("render" in o || "$$render" in o);
}
function is_promise(o) {
  return is_function(o == null ? void 0 : o.then);
}
function is_object(o) {
  return o != null && o instanceof Object && typeof o == "object";
}
function is_array(o) {
  return o instanceof Array;
}
function is_function(o) {
  return o instanceof Function;
}
const gen_id = (() => {
  let i = 0;
  return () => `component-${++i}`;
})();
function turing_render_loop(block) {
  const store = writable({ ...NEVER_BLOCK, key: gen_id() });
  async function run(o) {
    console.log(o);
    if (!o)
      return;
    else if (is_promise(o))
      return run(await o);
    else if (is_function(o))
      return run(o());
    else if (is_array(o)) {
      for (const item of o) {
        await run(item);
      }
    } else if (is_block_function(o)) {
      await o.function();
    } else if (is_block_component(o)) {
      await new Promise((resolve) => {
        store.set({
          ...o,
          events: {
            ...o.events,
            complete() {
              var _a;
              if (is_function((_a = o == null ? void 0 : o.events) == null ? void 0 : _a.complete)) {
                o.events.complete();
              }
              resolve();
            }
          },
          key: gen_id()
        });
      });
    } else {
      console.error(o);
      throw new Error(`block type not match any guard for ${o}`);
    }
  }
  run(block);
  return {
    subscribe: store.subscribe
  };
}
const { Object: Object_1 } = globals;
const Lib = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let curr;
  let $curr, $$unsubscribe_curr = noop, $$subscribe_curr = () => ($$unsubscribe_curr(), $$unsubscribe_curr = subscribe(curr, ($$value) => $curr = $$value), curr);
  let { block = [] } = $$props;
  let el;
  if ($$props.block === void 0 && $$bindings.block && block !== void 0)
    $$bindings.block(block);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    $$subscribe_curr(curr = turing_render_loop(block));
    {
      if (el && curr && $curr) {
        for (const [event_name, event_handler] of Object.entries($curr.events)) {
          el.$on(event_name, event_handler);
        }
      }
    }
    $$rendered = `



${curr ? `${validate_component($curr.component || missing_component, "svelte:component").$$render(
      $$result,
      Object_1.assign($curr.props, { this: el }),
      {
        this: ($$value) => {
          el = $$value;
          $$settled = false;
        }
      },
      {}
    )}` : ``}`;
  } while (!$$settled);
  $$unsubscribe_curr();
  return $$rendered;
});
const Message = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  createEventDispatcher();
  let { text = "default" } = $$props;
  if ($$props.text === void 0 && $$bindings.text && text !== void 0)
    $$bindings.text(text);
  return `

<!-- HTML_TAG_START -->${text}<!-- HTML_TAG_END -->

<div></div>`;
});
const Note = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  createEventDispatcher();
  let { text } = $$props;
  if ($$props.text === void 0 && $$bindings.text && text !== void 0)
    $$bindings.text(text);
  return `

<!-- HTML_TAG_START -->${text}<!-- HTML_TAG_END -->

<button>next</button>`;
});
const Timeout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  createEventDispatcher();
  let { text } = $$props;
  let { duration } = $$props;
  if ($$props.text === void 0 && $$bindings.text && text !== void 0)
    $$bindings.text(text);
  if ($$props.duration === void 0 && $$bindings.duration && duration !== void 0)
    $$bindings.duration(duration);
  return `<!-- HTML_TAG_START -->${text}<!-- HTML_TAG_END -->`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const block = [
    component({
      component: Message,
      props: {},
      events: {
        message_custom_event(e) {
          console.log(e.detail.fib);
          console.log(e.detail.man === void 0);
        },
        dblclick() {
        },
        xxx() {
        }
      }
    }),
    component({ component: Note, props: { text: "note" } }),
    component({
      component: Timeout,
      props: { text: "timeout", duration: 500 }
    }),
    () => block
  ];
  return `${validate_component(Lib, "Touring").$$render($$result, { block }, {}, {})}`;
});
export {
  Page as default
};
