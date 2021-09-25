<script lang="ts">
    import {onMount} from 'svelte';
    import CardItem from "./CardItem.svelte";

    const beUrl = 'https://fun-prom.herokuapp.com';
    let questions: Array<any> = Array();

    const fetchQuestions = async () => {
        const options = {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json;charset=UTF-8'
            }
        };

        const response = await fetch(beUrl + '/question', options);
        return await response.json();
    };

    onMount(async () => {
        questions = await fetchQuestions();
        setTimeout(function(){ renderStackedCards() }, 100);
    });

</script>

<main>
    <div class="card-stack-view">
        <div id="stacked-cards-block" class="stackedcards stackedcards--animatable init">
            <div class="stackedcards-container">
                {#each questions as question}
                    <CardItem>
                        {question.question}
                    </CardItem>
                {/each}
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
