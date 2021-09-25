<script>
    import {navigate} from "svelte-routing";

    export let category;
    import {mapCategoryToString} from "./utils/utils";

    const userId = 4444
    const beUrl = "https://fun-prom.herokuapp.com"

    async function backToDashboard() {
        await resetDataForUser();
        navigate("/")
    }

    async function resetDataForUser() {
        const options = {
            method: 'DELETE',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json;charset=UTF-8'
            }
        };
        const response = await fetch(beUrl + '/question/' + userId, options);
        console.debug(`Successfully reset data. Status: ${response.status}`)
    }
</script>


<ion-header translucent="true">
    <ion-toolbar>
        <ion-title>Well Done!</ion-title>
    </ion-toolbar>
</ion-header>

<div class="well-done-container">
    <img src="/res/board.jpg" class="well-done-element" alt=""/>
    <div class="well-done-eleme nt">You have answered all questions of the
        category {mapCategoryToString(category)}</div>
    <div class="back-button" on:click={backToDashboard}>
        <ion-button>Back to Dashboard</ion-button>
    </div>
</div>

<style>
    .well-done-container {
        padding: 1em;
    }

    .back-button {
        position: absolute;
        bottom: 1em;
        display: flex;
        justify-content: center;
        width: calc(100% - 2em)
    }
</style>
