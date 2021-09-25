<script lang="ts">
    import CardStack from "./CardStack.svelte";
    import {navigate} from "svelte-routing";

    let toggle: boolean = true;

    function toggleValue() {
        toggle = !toggle;
    }

    function returnToStart() {
        navigate("/loggedIn", {replace: true});
    }

</script>

{#if toggle}
    <CardStack on:message="{toggleValue}"/>
{:else }
    <div class="main">
        <div class="top">
            <img src="res/thumbs_up.jpg"/>
            <h1>
                Great job!
            </h1>
            <p>
                Do you want to answer even more questions?
            </p>
        </div>
        <div class="bottom">
            <ion-button on:click="{toggleValue}">
                Yes
            </ion-button>
            <br>
            <ion-button color="light" on:click="{returnToStart}">
                No
            </ion-button>
        </div>
    </div>
{/if}

<style>
    ion-button {
        width: 100%;
    }

    .main {
        display: flex;
        height: 100vh;
        justify-content: center;
        align-items: center;
        flex-direction: column
    }

    .top {
        flex-grow: 1;
        text-align: center;
    }

    .bottom {
        flex-grow: 0;
        width: 95%;
    }
</style>