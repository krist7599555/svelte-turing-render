<!-- component always complete -->
<script>import { createEventDispatcher, onMount, tick } from 'svelte';
let emit = createEventDispatcher();
onMount(async () => {
    await tick();
    emit('complete');
});
</script>

<!-- EMPTY -->
