<script>
    import {link, Router} from "svelte-routing";
    export let category;
    export let location;
</script>

<ion-header translucent="true">
    <ion-toolbar>
        <ion-title>Well Done!</ion-title>
    </ion-toolbar>
</ion-header>

<div class="well-done-container">
    <img src="/res/board.jpg" class="well-done-element" alt="image"/>
    <div class="well-done-element">You have answered all questions of the category {category}</div>
    <div class="well-done-element">
        <Router>
            <a href="/" use:link>Back to Dashboard</a>
        </Router>
    </div>
</div>
