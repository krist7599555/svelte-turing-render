<script lang="ts" context="module">
declare var hljs: any;
</script>

<script lang="ts">
import { onMount } from 'svelte';

import { type Block, component, Touring } from '$lib';
import source_code_type from '$lib/type?raw';

import source_code_page from './+page.svelte?raw';
import Message from './message.svelte';
import Note from './note.svelte';
import Timeout from './timeout.svelte';

onMount(() => {
  hljs.highlightAll();
});

// test
const block: Block = [
  component({
    component: Message,
    props: {},
    events: {
      message_custom_event(e) {
        console.log(e.detail.fib);
        // @ts-expect-error
        console.log(e.detail.man === undefined);
      },
      dblclick() {},
      // @ts-expect-error
      xxx() {
        // method no exists
      },
      mount(ins) {
        console.log('MOUNT', ins);
        return async () => {
          console.log('DESTRYO CALLBACK');
        };
      },
      destroy() {
        console.log('DESTROY');
      },
    },
  }),
  component({
    component: Note,
    props: {
      text: 'note',
    },
    events: {
      async mount() {
        console.log('1');
      },
    },
  }),
  component({
    component: Timeout,
    props: {
      text: 'timeout',
      duration: 3000,
    },
  }),
  () => block,
];
</script>

<svelte:head>
  <!-- https://github.com/highlightjs/highlight.js -->
  <link
    rel="stylesheet"
    href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.6.0/styles/atom-one-dark.min.css"
  />
  <script
    src="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.6.0/highlight.min.js"></script>
</svelte:head>

<main>
  <h1>@krist7599555/svelte-turing-render DEMO</h1>
  <a href="https://github.com/krist7599555/svelte-turing-render">
    github https://github.com/krist7599555/svelte-turing-render
  </a>
  <div id="touring">
    <Touring block={block} />
  </div>
  <pre><code class="language-html">{source_code_page}</code></pre>
  <pre><code class="language-typescript">{source_code_type}</code></pre>
</main>

<style>
main {
  padding-top: 2rem;
  padding-bottom: 2rem;
  font-family: monospace;
  width: min(800px, 100% - 2rem);
  margin: auto;
  min-height: 90vh;
}
h1 {
  font-size: 1.5rem;
}
a {
  color: #f55432;
  margin-bottom: 1rem;
  display: block;
}
#touring {
  background: #363636;
  border-radius: 1rem;
  padding: 2rem;
  color: #ffffff;
}
pre {
  border-radius: 1rem;
  color: #ffffff;
  margin-top: 2rem;
  font-size: 0.7rem;
  width: 100%;
  overflow: scroll;
}
pre code {
  padding: 1.5rem;
}
</style>
