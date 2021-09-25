<script lang="ts">
    import {auth} from './utils/firebase';
    import {signInWithEmailAndPassword} from "@firebase/auth";
    import {navigate} from "svelte-routing";

    let username: string = "";
    let password: string = "";
    let errorMessage: string = "";

    function handleUsernameValue(event) {
        username = event.target.value;
    }

    function handlePasswordValue(event) {
        password = event.target.value;
    }

    async function handleSubmit() {
        try {
            await signInWithEmailAndPassword(auth, username, password);
            navigate("/tutorial", {replace: true});
        } catch (e) {
            errorMessage = e.message;
        }
    }
</script>

<svelte:head>
    <title>FunProm - Login</title>
</svelte:head>

<ion-header translucent="true">
    <ion-toolbar>
        <ion-title>Login</ion-title>
    </ion-toolbar>
</ion-header>

<ion-content fullscreen>
    <form>
        <ion-list lines="full" class="ion-no-margin ion-no-padding">
            <ion-item>
                <ion-label position="stacked">
                    Username
                    <ion-text color="danger">*</ion-text>
                </ion-label>
                <ion-input
                        on:ionChange="{handleUsernameValue}"
                        required
                        type="text"
                ></ion-input>
            </ion-item>

            <ion-item>
                <ion-label position="stacked">
                    Password
                    <ion-text color="danger">*</ion-text>
                </ion-label>
                <ion-input
                        on:ionChange="{handlePasswordValue}"
                        required
                        type="password"
                ></ion-input>
            </ion-item>
        </ion-list>

        <div class="ion-padding">
            <ion-button expand="block" on:click="{handleSubmit}" class="ion-no-margin">
                Login
            </ion-button>
            <br>
            <ion-button color="light" expand="block" on:click="{handleSubmit}" class="ion-no-margin">
                Sign Up
            </ion-button>
        </div>
    </form>
</ion-content>

