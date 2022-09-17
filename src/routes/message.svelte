<script lang="ts">
import { createEventDispatcher, onMount } from 'svelte';
import { onDestroy } from 'svelte';

import { browser } from '$app/environment';

const dispatch = createEventDispatcher<{
  complete: void;
  message_custom_event: { fib: number | string };
}>();

export let text = 'default';

onMount(() => {
  dispatch('message_custom_event', { fib: 1234 });
  document.body.style.cursor = 'pointer';
});
onDestroy(() => {
  if (browser) {
    document.body.style.cursor = '';
  }
});
</script>

<svelte:window on:click={() => dispatch('complete')} />

Message click any where to continue<br />
{@html text}

<div on:dblclick />
