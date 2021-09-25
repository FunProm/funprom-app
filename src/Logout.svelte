<script lang="ts">
    import {createEventDispatcher} from 'svelte';
    const dispatch = createEventDispatcher();

    function handleSubmit() {
        dispatch('message', {
            text: 'Logout!'
        });
    }
</script>

<ion-button expand="block" on:click="{handleSubmit}" class="ion-no-margin">
    Logout
</ion-button>