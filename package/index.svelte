<svelte:options accessors immutable />

<script>import { turing_render_loop } from './turing';
export let block = [];
$: curr = turing_render_loop(block);
let el;
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
