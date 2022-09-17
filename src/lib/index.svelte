<svelte:options accessors immutable />

<script lang="ts">
import type { SvelteComponent } from 'svelte';

import { turing_render_loop } from './turing';
import type { Block } from './type';

export let block: Block = [];
$: curr = turing_render_loop(block);

let el: SvelteComponent;
$: if (el && curr && $curr) {
  for (const [event_name, event_handler] of Object.entries($curr.events)) {
    el.$on(event_name, event_handler);
  }
}
</script>

{#if curr}
  {#key $curr.key}
    <svelte:component this={$curr.component} bind:this={el} {...$curr.props} />
  {/key}
{/if}
