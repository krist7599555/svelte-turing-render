<script lang="ts">
import { createEventDispatcher, onMount } from 'svelte';

import type { BlockCompleteEvent } from '$lib';
const dispatch = createEventDispatcher<BlockCompleteEvent>();

export let text: string;
export let duration: number;

let curr = 0;
onMount(() => {
  let start: null | number = null;
  function s(t: number) {
    start ??= t;
    curr = t - start;
    requestAnimationFrame(s);
  }
  requestAnimationFrame(s);
  setTimeout(() => {
    dispatch('complete');
  }, duration);
});
</script>

Timeout wait {curr.toFixed(0)}/{duration}ms to continue<br />
{@html text}
