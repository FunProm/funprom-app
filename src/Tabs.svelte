<script>
    import Cards from "./Cards.svelte";
    import {navigate} from "svelte-routing";
    import Tutorial from "./Tutorial.svelte";
    import Logout from "./Logout.svelte";

    function handleTutorial(event) {
        navigate("/tutorial", {replace: true});
    }
</script>

<svelte:head>
    <title>FunProm - Tabs</title>
</svelte:head>

<ion-tabs>
    <ion-tab tab="tab-schedule">
        <ion-nav>
            <Cards/>
        </ion-nav>
    </ion-tab>

    <ion-tab tab="tab-progress">
        <ion-nav></ion-nav>
    </ion-tab>


    <ion-tab tab="tab-logout">
        <ion-nav>
            <Logout/>
        </ion-nav>
    </ion-tab>

    <ion-tab-bar slot="bottom">
        <ion-tab-button tab="tab-schedule">
            <ion-icon name="calendar"></ion-icon>
            <ion-label>Schedule</ion-label>
            <ion-badge>6</ion-badge>
        </ion-tab-button>

        <ion-tab-button tab="tab-progress">
            <ion-icon name="ribbon-outline"></ion-icon>
            <ion-label>Progress</ion-label>
        </ion-tab-button>

        <ion-tab-button on:click={handleTutorial}>
            <ion-icon name="information-circle"></ion-icon>
            <ion-label>Tutorial</ion-label>
        </ion-tab-button>

        <ion-tab-button tab="tab-logout">
            <ion-icon name="key-outline"></ion-icon>
            <ion-label>Logout</ion-label>
        </ion-tab-button>
    </ion-tab-bar>
</ion-tabs>
