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
    <ion-card>
        <img src="assets/img/bjork-live.jpg"/>
        <ion-card-content>
            <ion-card-title>
                Great job!
            </ion-card-title>
            <p>
                Do you want to answer even more questions?
            </p>
        </ion-card-content>
        <ion-button expand="block" on:click="{toggleValue}" class="ion-no-margin">
            Yes
        </ion-button>

        <ion-button expand="block" on:click="{returnToStart}" class="ion-no-margin">
            No
        </ion-button>
    </ion-card>
{/if}
