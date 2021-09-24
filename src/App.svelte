<script lang="ts">
	import Login from "./Login.svelte";
	import Logout from "./Logout.svelte";

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

<main>
    {#if !user.loggedIn}
        <Login on:message={handleLogin}/>
    {:else}
        <p>LoggedIn</p>
		<Logout on:message={handleLogout}/>
	{/if}
</main>

<style>
    main {
        text-align: center;
        padding: 1em;
        max-width: 240px;
        margin: 0 auto;
    }

    h1 {
        color: #ff3e00;
        text-transform: uppercase;
        font-size: 4em;
        font-weight: 100;
    }

    @media (min-width: 640px) {
        main {
            max-width: none;
        }
    }
</style>