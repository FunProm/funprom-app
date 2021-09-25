<script>
    import {navigate} from "svelte-routing";

    function handleTutorialEnd() {
        navigate("/loggedIn", {replace: true});
    }
</script>

<svelte:head>
    <title>FunProm - Tutorial</title>
</svelte:head>
<ion-header translucent="true">
    <ion-toolbar>
        <ion-title>Tutorial</ion-title>
    </ion-toolbar>
</ion-header>

<ion-slides pager="true">
    <ion-slide>
        <ion-toolbar>
            <div class="ion-text-end">
                <button ion-button color="primary" on:click="{handleTutorialEnd}">Skip</button>
            </div>
        </ion-toolbar>
        <img src="../assets/img/slides/slide-1.png" alt="pict"/>
        <h2>Welcome!</h2>
        <p>We are happy to see you.</p>
    </ion-slide>

    <ion-slide>
        <ion-toolbar>
            <div class="ion-text-end">
                <button ion-button color="primary" on:click="{handleTutorialEnd}" >Skip</button>
            </div>
        </ion-toolbar>
        <img src="../assets/img/slides/svelte.png" alt="pict"/>
        <h2>Handy tool!</h2>
        <p>Prom can be burdensome, therefore <b>FunProm</b> wants to make it easier for you. Just swipe to answer the
            questions.
            <br/>
            Additionally all answers get saved, so you can stop and come back whenever you wish</p>
    </ion-slide>

    <ion-slide>
        <div class="ion-text-end">
            <button ion-button color="primary" on:click="{handleTutorialEnd}">Skip</button>
        </div>
        <img src="../assets/img/slides/slide-2.png" alt="pict"/>
        <h2>What are the benefits of answering the questions?</h2>
        <p>Research shows, that it can help you to get well soon and of course it's fun</p>
    </ion-slide>

    <ion-slide>
        <img src="../assets/img/slides/slide-4.png" alt="pict"/>
        <h2>Ready to Play?</h2>
        <p>Check out your progress to get an overview. <br/>
            <ion-button on:click="{handleTutorialEnd}" fill="clear">
                Or directly continue to earn points
                <ion-icon slot="end" name="arrow-forward"></ion-icon>
            </ion-button>
        </p>
    </ion-slide>
</ion-slides>

<style>
    :root {
        --ion-safe-area-top: 20px;
        --ion-safe-area-bottom: 22px;
    }

    ion-slide {
        display: block;
    }

    ion-slide > h2 {
        margin-top: 2.8rem;
    }

    ion-slide > img {
        max-height: 50%;
        max-width: 60%;
        margin: 36px 0;
    }

    ion-slide > p {
        padding: 0 40px;
        font-size: 14px;
        line-height: 1.5;
        color: #60646B;
    }
</style>
