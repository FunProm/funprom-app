<script lang="ts">

</script>

<div class="card-item {$$props.item.type}">
    {#if $$props.item.type === "nudge" }
        <img src={$$props.item.imageUrl} alt="" />
        <div class="content">
            <h3>{$$props.item.title}</h3>
            <p>{$$props.item.text}</p>
        </div>
    {/if}

    {#if $$props.item.type === "question"}
        <div class="pagination">
            <span class="title">{$$props.item.category}</span>
            <span class="pagi">{$$props.nr} / {$$props.of}</span>
        </div>
        <div class="content">
            <h2>{$$props.item.question}</h2>
        </div>
    {/if}
</div>


<style>

    .card-item {
        color: #60646B;
    }

    .pagination {
        padding: 1em;
        display: flex;
        justify-content: space-between;
        font-weight: 300;
        font-size: 0.8rem;
        width: 100%;
        position: absolute;
    }

    .content {
        display: flex;
        justify-content: center;
        height: 100%;
        flex-direction: column;
        align-items: flex-start;
        padding: 0 1em;
    }

    .title {
        font-size: 14px;
        font-weight: 700;
    }

    .pagi {
        flex-shrink: 0;
        flex-grow: 0;
    }

    .card-item.nudge.stackedcards-active {
        z-index: 999!important;
    }

    .card-item.nudge {
        overflow: scroll;
    }

    .nudge .content {
        display: block;
        padding: 1em;
    }

    .nudge h3 {
        font-size: 16px;
        font-weight: 700;
    }
    .nudge p{
        font-size: 16px;
        font-weight: normal;
    }
</style>
