<script lang="ts">
    import {createEventDispatcher} from 'svelte';
    const dispatch = createEventDispatcher();

    function handleSubmit() {
        dispatch('message', {
            text: 'Logout!'
        });
    }
</script>

<button on:click={handleSubmit}>Logout</button>

<style>

</style>