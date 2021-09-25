<script>
    import {link, Router} from "svelte-routing";

    export let category;
    import {mapCategoryToString} from "./utils/utils";
</script>


<ion-header translucent="true">
    <ion-toolbar>
        <ion-title>Well Done!</ion-title>
    </ion-toolbar>
</ion-header>

<div class="well-done-container">
    <img src="/res/board.jpg" class="well-done-element" alt="image"/>
    <div class="well-done-eleme nt">You have answered all questions of the
        category {mapCategoryToString(category)}</div>
    <div class="back-button">
        <Router>
            <a href="/" use:link>
                <ion-button>Back to Dashboard</ion-button>
            </a>
        </Router>
    </div>
</div>

<style>
    .well-done-container {
        padding: 1em;
    }

    .back-button {
        position: absolute;
        bottom: 2em;
        display: flex;
        justify-content: center;
        width: calc(100% - 2em)
    }
</style>
