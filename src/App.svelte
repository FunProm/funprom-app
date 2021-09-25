<script lang="ts">
    import Login from "./Login.svelte";
    import Logout from "./Logout.svelte";
    import Tutorial from "./Tutorial.svelte";

    let user = {loggedIn: false};

    function handleLogin(event) {
        console.log(event.detail.text);
        user.loggedIn = true;
    }

    function handleLogout(event) {
        console.log(event.detail.text);
        user.loggedIn = false;
    }

</script>

{#if !user.loggedIn}
    <Login on:message={handleLogin}/>
{:else}
    <Logout on:message={handleLogout}/>
    <Tutorial/>
{/if}
