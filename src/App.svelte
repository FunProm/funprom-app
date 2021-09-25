<script lang="ts">
    import {Router, Route} from "svelte-routing";
    import Login from "./Login.svelte";
    import Tutorial from "./Tutorial.svelte";
    import {navigate} from "svelte-routing";

    export let url = "";
    import Tabs from "./Tabs.svelte";
    import CardStackController from "./CardStackController.svelte";

    let user = {loggedIn: false};

    function handleLogin(event) {
        console.log(event.detail.text);
        user.loggedIn = true;
        navigate("/loggedIn", {replace: true});
    }
</script>

<Router url="{url}">
    <Route path="/">
        <Login on:message={handleLogin}/>
    </Route>
    <Route path="/loggedIn">
        <Tabs/>
    </Route>
    <Route path="/tutorial">
        <Tutorial/>
    </Route>
    <Route path="/survey">
        <CardStackController/>
    </Route>
</Router>
