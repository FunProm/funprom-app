<script lang="ts">
    import {Router, Link, Route} from "svelte-routing";
    import Login from "./Login.svelte";
    import Logout from "./Logout.svelte";
    import Tutorial from "./Tutorial.svelte";
    import {navigate} from "svelte-routing";

    export let url = "";
    import CardStack from './CardStack.svelte';

    let user = {loggedIn: false};

    function handleLogin(event) {
        console.log(event.detail.text);
        user.loggedIn = true;
        navigate("/tutorial", {replace: true});
    }

    function handleLogout(event) {
        console.log(event.detail.text);
        user.loggedIn = false;
        navigate("/", {replace: true});
    }
</script>

    <Router url="{url}">
        <Route path="/">
            <Login on:message={handleLogin}/>
        </Route>
        <Route path="/tutorial">
            <Tutorial/>
        </Route>
        <Route path="/logout">
            <Logout on:message={handleLogout}/>
        </Route>
        <Route path="/survey">
            <CardStack></CardStack>
        </Route>
    </Router>
