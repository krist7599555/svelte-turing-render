<svelte:options accessors immutable />

<script>import { turing_render_loop } from './turing';
export let block = [];
$: curr = turing_render_loop(block);
</script>

{#if curr}
  {#key $curr.key}
    <svelte:component this={$curr.component} />
  {/key}
{/if}
