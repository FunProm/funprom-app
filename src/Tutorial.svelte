<svelte:head>
    <title>Ionic Companion - Slides</title>
</svelte:head>
<ion-header translucent="true">
    <ion-toolbar>
        <ion-buttons slot="start">
            <ion-menu-button></ion-menu-button>
        </ion-buttons>
        <ion-title>Slides</ion-title>
    </ion-toolbar>
</ion-header>

<ion-content fullscreen padding scroll-y="false">
    <ion-slides on:ionSlideReachEnd="{flipMenuOnOff}" pager="true">
        <ion-slide>
            <img src="../assets/img/slides/slide-1.png" alt="pict"/>
            <h2>Welcome!</h2>
            We are happy to see you. <br/>
            <br/>
            <br/>
        </ion-slide>

        <ion-slide>
            <img src="../assets/img/slides/svelte.png" alt="pict"/>
            <h2>Handy tool!</h2>
            Prom can be burdensome, therefore <b>FunProm</b> wants to make it easier for you. Just swipe to answer the
            questions.
            <br/>
            Additionally all answers get saved, so you can stop and come back whenever you wish<br/>
            <br/>
            <br/>
        </ion-slide>

        <ion-slide>
            <img src="../assets/img/slides/slide-2.png" alt="pict"/>
            <h2>What are the benefits of answering the questions?</h2>

            Research shows, that it can help you to get well soon and of course it's fun <br/>
            <br/>
            <br/>
        </ion-slide>

        <ion-slide>
            <img src="../assets/img/slides/slide-4.png" alt="pict"/>
            <h2>Ready to Play?</h2>
            Check out the
            <ion-icon name="menu"></ion-icon>
            to get an overview. <br/>
            <ion-button fill="clear">
                Or directly continue to earn points
                <ion-icon slot="end" name="arrow-forward"></ion-icon>
            </ion-button>
            <br/>
            <br/>
            <br/>
        </ion-slide>
    </ion-slides>
</ion-content>

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
</style>

<script>
    const flipMenuOnOff = () => {
        console.log("flipMenuOnOff");
        setTimeout(() => {
            setTimeout(() => {
            }, 2000);
        }, 2000);
    };
</script>
