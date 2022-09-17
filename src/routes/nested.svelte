<script lang="ts">
import { createEventDispatcher, onMount } from 'svelte';

import type { BlockCompleteEvent } from '$lib';
const dispatch = createEventDispatcher<BlockCompleteEvent>();

export let o: { a: { b: { c: number } } };
console.log(o.a.b.c);
$: console.log(o.a.b.c);

onMount(() => {
  setTimeout(() => {
    dispatch('complete');
  }, 1000);
});
</script>

nested access o.a.b.c = {o.a.b.c} OK
