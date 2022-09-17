# @krist7599555/svelte-turing-render

[![NPM Version](https://img.shields.io/npm/v/@krist7599555/svelte-turing-render.svg)](https://www.npmjs.com/package/@krist7599555/svelte-turing-render)
[![NPM Downloads](https://img.shields.io/npm/dt/@krist7599555/svelte-turing-render.svg)](https://www.npmjs.com/package/@krist7599555/svelte-turing-render)
[![Github Repo Size](https://img.shields.io/github/repo-size/krist7599555/svelte-turing-render.svg)](https://github.com/krist7599555/svelte-turing-render)

Touring Machine Like Svelte Component for programmatic component

## [DEMO https://krist7599555.github.io/svelte-turing-render](https://krist7599555.github.io/svelte-turing-render)

```svelte
<!-- TEST: src/routes/+page.svelte -->
<script lang="ts">
import { type Block, component, Touring } from '@krist7599555/svelte-turing-render';

import Message from './message.svelte';
import Note from './note.svelte';
import Timeout from './timeout.svelte';

// test
const block: Block = [
  component({
    component: Message,
    props: {},
    events: {
      message_custom_event(e) {
        console.log(e.detail.fib);
        // @ts-expect-error
        console.log(e.detail.man === undefined); // type infer for event emit
      },
      dblclick() {},
      // @ts-expect-error
      xxx() {
        // method no exists
        // type infer for event type
      },
    },
  }),
  component({
    component: Note,
    props: {
      text: 'note',
    },
  }),
  component({
    component: Timeout,
    props: {
      text: 'timeout',
      duration: 500,
    },
  }),
  () => block, // lazy loopback
];
</script>

<!-- running here in sequence -->
<Touring block={block} />
```

```ts
// TYPE: lib/type.ts
export type BlockFunction = { type: 'function'; function: any };
export type BlockComponent = {
  type: 'component';
  component: any;
  props: Record<string, any>;
  events: Record<string, (args: any) => void>;
};
export type Block =
  | BlockComponent
  | BlockFunction
  | (() => Block)
  | Promise<Block>
  | Block[]
  | null
  | undefined
  | false;

export type BlockCompleteEvent = { complete: void };
```
