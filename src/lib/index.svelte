<svelte:options accessors immutable />

<script lang="ts">
import { turing_render_loop } from './turing';
import type { Block } from './type';

export let block: Block = [];
$: curr = turing_render_loop(block);
</script>

{#if curr}
  {#key $curr.key}
    <svelte:component this={$curr.component} />
  {/key}
{/if}
