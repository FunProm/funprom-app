<script lang="ts">
    import {Router, Route, navigate} from "svelte-routing";
    import Login from "./Login.svelte";
    import Tutorial from "./Tutorial.svelte";
    import Tabs from "./Tabs.svelte";
    import {getAuth, onAuthStateChanged} from "firebase/auth";
    import {session} from './stores';
    import CardStackController from "./CardStackController.svelte";
    import WellDone from "./WellDone.svelte";

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
        <CardStackController/>
    </Route>
   <Route path="/well-done/:category" component="{WellDone}"/>
</Router>
