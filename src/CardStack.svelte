<script lang="ts">
    import {onMount} from 'svelte';
    import CardItem from "./CardItem.svelte";

    onMount(async () => {
        renderStackedCards()
    });

</script>

<main>
    <div class="card-stack-view">
        <div id="stacked-cards-block" class="stackedcards stackedcards--animatable init">
            <div class="stackedcards-container">
                <CardItem>Do you have any trouble doing strenuous activities, like carrying a heavy shopping bag or a
                    suitcase?
                </CardItem>
                <CardItem>Do you have any trouble taking a long walk?</CardItem>
                <CardItem>Do you have any trouble taking a short walk outside of the house?</CardItem>
                <CardItem type="info">Did you know that...</CardItem>
                <CardItem>Do you need to stay in bed or a chair during the day?</CardItem>
                <CardItem type="done">Whheop you're done!</CardItem>

            </div>
            <div class="stackedcards--animatable stackedcards-overlay top">A little</div>
            <div class="stackedcards--animatable stackedcards-overlay right">Not at all</div>
            <div class="stackedcards--animatable stackedcards-overlay left">Very much</div>
            <div class="stackedcards--animatable stackedcards-overlay bottom">Quite a bit</div>
        </div>
        <div class="global-actions">
            <div class="left-action">Very much</div>
            <div class="top-action">A little</div>
            <div class="right-action">Not at all</div>
            <div class="bottom-action">Quite a bit</div>
        </div>
        <div class="global-actions">
            <div class="skip-action">Skip</div>
        </div>
    </div>
</main>


<style>


</style>
