<script lang="ts">
    import {createEventDispatcher, onMount} from 'svelte';
    import CardItem from "./CardItem.svelte";
    import {getRandomNudge, mapCategoryToString} from './utils/utils'
    import {navigate} from "svelte-routing";
    import {category} from "./WellDone.svelte";

    const beUrl = 'https://fun-prom.herokuapp.com';
    const userId = 4444; // TODO: make this dynamic
    let questions: Array<{type, title, category, text, imageUrl  }> = [];

    const dispatch = createEventDispatcher();

    async function handleLastCard() {
        console.log("handleButtonClick");
        dispatch('message', {
            text: 'noMoreQuestions!'
        });
    }

    const fetchQuestions = async () => {
        const options = {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json;charset=UTF-8'
            }
        };

        const response = await fetch(beUrl + '/question/' + userId, options);
        return response.json();
    };

    onMount(async () => {
        questions = await fetchQuestions();

        if(questions.length === 1 && questions[0].number === undefined){
            navigate("/well-done/" + questions[0].category, {replace: true});
            return;
        }

        questions = questions.map(value => ({
            ...value,
            category: mapCategoryToString(value.category),
            type: "question"
        }));
        questions.push(getRandomNudge());
        console.log(questions)
        setTimeout(function(){ renderStackedCards(questions, handleLastCard) }, 100);
    });

</script>

<main>
    <div class="card-stack-view">
        <div id="stacked-cards-block" class="stackedcards stackedcards--animatable init">
            <div class="stackedcards-container">
                {#each questions as question, index}
                    <CardItem item={question} nr={index+1} of={questions.length}/>
                {/each}
            </div>
            <div class="stackedcards--animatable stackedcards-overlay top">A little</div>
            <div class="stackedcards--animatable stackedcards-overlay right">Not at all</div>
            <div class="stackedcards--animatable stackedcards-overlay left">Very much</div>
            <div class="stackedcards--animatable stackedcards-overlay bottom">Quite a bit</div>
            <div class="stackedcards--animatable stackedcards-overlay skipped">Skipped</div>
        </div>
        <div class="global-actions">
            <div class="left-action">Very much</div>
            <div class="top-action">A little</div>
            <div class="bottom-action">Quite a bit</div>
            <div class="right-action">Not at all</div>
        </div>
        <div class="global-actions">
            <div class="skip-action">Skip</div>
        </div>
    </div>
</main>


<style>


</style>
