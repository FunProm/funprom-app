<script>
    import {navigate} from "svelte-routing";

    function handleTutorialEnd() {
        navigate("/", {replace: true});
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

        <div class="toolbar">
            <button on:click="{handleTutorialEnd}">Skip</button>
        </div>
        <div class="img" style="background-image: url('/res/happy-to-see-you.jpg')"/>
        <h2>Welcome!</h2>
        <p>We are happy to see you.</p>

    </ion-slide>

    <ion-slide>


        <div class="toolbar negative">
            <button  on:click="{handleTutorialEnd}">Skip</button>
        </div>
        <div class="img" style="background-image: url('/res/swipe.jpg')"/>
        <h2>Filling out PROMs made easy!</h2>
        <p>Proms can be burdensome, therefore <b>FunProm</b> wants to make it easier for you. Just swipe to answer
            the
            questions.
            <br/>
            Additionally all answers get saved, so you can stop and come back whenever you wish</p>

    </ion-slide>

    <ion-slide>
        <div class="toolbar">
            <button on:click="{handleTutorialEnd}">Skip</button>
        </div>
        <div class="img" style="background-image: url('/res/family_big.jpg')"/>
        <h2>What are the benefits of answering all these questions?</h2>
        <p>Taking PROMs leads to less frequent hospitalization and admission to the ER!
            Text: Patients who dilligently complete their PROMs are admitted to the hospital less frequently. Let's
            all
            work together for you to spend more time with your loved ones sooner.</p>
    </ion-slide>

    <ion-slide>

        <div class="img" style="background-image: url('/res/opinion.jpg')"/>
        <h2>Ready to speed up your recovery?</h2>
        <p>Check out your progress to get an overview.</p>
        <div class="button-bar">
            <ion-button on:click="{handleTutorialEnd}">
                Continue to the <br> valuable questions
                <ion-icon slot="end" name="arrow-forward"></ion-icon>
            </ion-button>
        </div>
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

    ion-slide h2 {
        margin-top: 2rem;
        padding: 0 16px;
    }

    .img {
        max-height: 50%;
        height: 100%;
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center top;
        margin: 0;
    }

    ion-slide p {
        padding: 0 16px;
        line-height: 1.5;
        color: #60646B;
    }

    ion-slide {
        overflow: scroll;
        height: calc(100vh - 61px);
        text-align: left;
    }

    .toolbar {
        position: absolute;
        top: 1em;
        right: 1em;
        border-radius: 4px;
        border: 1px solid white;
    }

    .toolbar.negative, .toolbar.negative * {
        color: dimgrey;
        border-color: dimgrey;
    }

    button {
        background: none;
        color: white;
        padding: 1em;
        font-weight: 700;
    }

    .button-bar {
        position: absolute;
        bottom: 1em;
        width: 100%;
        display: flex;
        justify-content: center;
    }
</style>
