<script lang="ts">
    import {createEventDispatcher} from 'svelte';

    const dispatch = createEventDispatcher();

    let username: string;
    let password: string;

    function handleSubmit() {
        dispatch('message', {
            text: 'Login!'
        });
    }
</script>


<input
        bind:value={username}
        type="text"
        name="username"
        placeholder="Username"
/>
<br/>
<input
        bind:value={password}
        type="password"
        name="password"
        placeholder="Password"
/>
<br/>
<button on:click={handleSubmit}>Login</button>
<p>Don't have an account <a href="javascript:void(0)" on:click={handleSubmit}>Sign Up</a></p>

<style>

</style>