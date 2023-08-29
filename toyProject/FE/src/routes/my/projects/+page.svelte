<script>
    import {MyProjectItem} from "$lib/components"
    export let data
</script>

<h2 class="text-3xl font-bold">My Projects</h2>
<div class="w-full mt-4 flex flex-col items-center">
    {#if data.projects.length===0}
        <p class="text-center text-3xl">There is no Project</p>
        <a href="/projects/new" class="btn btn-primary max-w-md mt-4">Add on:eventname={handler}</a>
    {:else}
        {#each data.projects as project}
            <MyProjectItem {project}/>  
        {/each}
    {/if}
</div>