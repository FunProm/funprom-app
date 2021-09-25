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
        <ion-toolbar>
            <div class="ion-text-end">
                <button ion-button color="primary" on:click="{handleTutorialEnd}">Skip</button>
            </div>
        </ion-toolbar>
        <img src="res/happy-to-see-you.jpg" alt="pict"/>
        <h2>Welcome!</h2>
        <p>We are happy to see you.</p>
    </ion-slide>

    <ion-slide>
        <ion-toolbar>
            <div class="ion-text-end">
                <button ion-button color="primary" on:click="{handleTutorialEnd}" >Skip</button>
            </div>
        </ion-toolbar>
        <img src="res/swipe.jpg" alt="pict"/>
        <h2>Filling out PROMs made easy!</h2>
        <p>Proms can be burdensome, therefore <b>FunProm</b> wants to make it easier for you. Just swipe to answer the
            questions.
            <br/>
            Additionally all answers get saved, so you can stop and come back whenever you wish</p>
    </ion-slide>

    <ion-slide>
        <div class="ion-text-end">
            <button ion-button color="primary" on:click="{handleTutorialEnd}">Skip</button>
        </div>
        <img src="res/family_big.jpg"  alt="pict"/>
        <h2>What are the benefits of answering all these questions?</h2>
        <p>Taking PROMs leads to less frequent hospitalization and admission to the ER!
            Text: Patients who dilligently complete their PROMs are admitted to the hospital less frequently. Let's all work together for you to spend more time with your loved ones sooner.</p>
    </ion-slide>

    <ion-slide>
        <img src="res/opinion.jpg"  alt="pict"/>
        <h2>Ready to speed up your recovery?</h2>
        <p>Check out your progress to get an overview. <br/>
            <ion-button on:click="{handleTutorialEnd}" fill="clear" style="overflow: visible">
                Or directly continue to the valuable questions
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
        margin: 5px 0;
    }

    ion-slide > p {
        padding: 0 5px;
        font-size: 14px;
        line-height: 1.5;
        color: #60646B;
    }
</style>
