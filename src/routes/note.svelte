<script lang="ts">
import { createEventDispatcher } from 'svelte';

import type { BlockCompleteEvent } from '$lib';
const dispatch = createEventDispatcher<BlockCompleteEvent>();

export let text: string;
</script>

Note
{@html text}

<button on:click on:click={() => dispatch('complete')}>click button to continue</button>
