<script lang="ts">
    import {navigate} from "svelte-routing";
    import {getAuth, signOut} from "firebase/auth";

    async function logout() {
        await signOut(getAuth());
        navigate("/", {replace: true});
    }

</script>

<svelte:head>
    <title>FunProm - Logout</title>
</svelte:head>

<ion-header translucent="true">
    <ion-toolbar>
        <ion-title>Logout</ion-title>
    </ion-toolbar>
</ion-header>

<ion-content fullscreen>

    <ion-button expand="block" on:click="{logout}">
        Logout
    </ion-button>
</ion-content>
