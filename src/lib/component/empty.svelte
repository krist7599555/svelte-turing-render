<!-- component always complete -->
<script lang="ts">
import { createEventDispatcher, onMount, tick } from 'svelte';

import type { BlockCompleteEvent } from '../type';

let emit = createEventDispatcher<BlockCompleteEvent>();
onMount(async () => {
  await tick();
  emit('complete');
});
</script>

<!-- EMPTY -->
