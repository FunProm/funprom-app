<script>
    import {navigate} from "svelte-routing";

    function openSurvey() {
        navigate("/survey", {replace: true});
    }
</script>

<svelte:head>
    <title>FunProm - Dashboard</title>
</svelte:head>
<ion-header translucent="true">
    <ion-toolbar>
        <ion-title>Dashboard</ion-title>
    </ion-toolbar>
</ion-header>

<ion-content fullscreen padding scroll-y="false">
    <ion-card on:click="{openSurvey}">
        <ion-card-header>
            <ion-card-subtitle>In Progress</ion-card-subtitle>
            <ion-card-title>Survey September</ion-card-title>
        </ion-card-header>

        <ion-card-content>
            <ion-avatar slot="start">
                <img src="https://img.icons8.com/doodle/50/000000/80-percents.png"/>
            </ion-avatar>
            <br>
            <b>Click to continue</b>
        </ion-card-content>
    </ion-card>

    <ion-card on:click="{openSurvey}">
        <ion-card-header>
            <ion-card-subtitle>Not Started</ion-card-subtitle>
            <ion-card-title>Survey October</ion-card-title>
        </ion-card-header>

        <ion-card-content>
            <ion-avatar slot="start">
                <img src="https://img.icons8.com/doodle/50/000000/0-percents.png"/>
            </ion-avatar>
            <br>
            <b>Click to Start</b>
        </ion-card-content>
    </ion-card>
</ion-content>
