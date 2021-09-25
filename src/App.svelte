<script lang="ts">
    import {Router, Route, navigate} from "svelte-routing";
    import Login from "./Login.svelte";
    import Tutorial from "./Tutorial.svelte";
    import CardStack from './CardStack.svelte';
    import Tabs from "./Tabs.svelte";
    import {getAuth, onAuthStateChanged} from "firebase/auth";
    import {session} from './stores';

    onAuthStateChanged(getAuth(), (user) => {
        if (user) {
            session.set(user)
        } else {
            navigate("/login", {replace: true})
        }
    });


    export let url = "";
</script>

<Router url="{url}">
    <Route path="/">
        <Tabs/>
    </Route>
    <Route path="/login">
        <Login/>
    </Route>
    <Route path="/tutorial">
        <Tutorial/>
    </Route>
    <Route path="/survey">
        <CardStack></CardStack>
    </Route>
</Router>
