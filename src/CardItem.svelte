<script lang="ts">

</script>

<div class="card-item {$$props.type}">
    {#if $$props.type === "info" }
        <div class="content">
            <h2><slot></slot></h2>
        </div>
    {/if}
    {#if $$props.type === "done" }
        <div class="content">
            <h2>Done!</h2>
            <p>Do you want more?</p>
            <button>yes</button>
            <button>no</button>
        </div>
    {/if}

    {#if !$$props.type}
        <div class="content">
            <h2><slot></slot></h2>
        </div>
    {/if}


</div>


<style>
.content{
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    padding: 2em;
}

.info {
    background-color: #2d9bf3;
    color: white;
}

.done {
    background-color: #f32d83;
    color: white;
}
</style>
