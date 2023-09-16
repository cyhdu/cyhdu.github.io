<script lang="ts">
    // export let header="Placeholder"
    // export let desc = "Short Description here. Or a long one, idrk, In fact, fill this up wiht text to see how it scales with a large-ish amoun tof text. Fill it up so full of text that you have a hard time even editing it because its so long and vscode has no linewrap. Or maybe becvause you didn't configure the vscode linewrap"
    // export let href = "#";
    export let post;
</script>


<div class="px-3 py-6 max-w-7xl">

    {#if post}
    <a href = {post.path} class="w-5/6 h-full mx-auto flex flex-col md:flex-row items-center rounded-lg">

        <img class="shadow object-cover w-80 rounded-lg h-72 flex-none" src = {post.meta.preview}/>
        <div class="flex flex-col justify-between p-4 leading-normal w-full">
            <p class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"> {post.meta.project_title} </p>
            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">{post.meta.description}</p>
        </div>
    </a>
    {:else}
    <a href = "" class="w-5/6 h-full mx-auto flex flex-col md:flex-row items-center rounded-lg">

        <img class="shadow object-cover w-80 rounded-lg h-72 flex-none" src = '/images/focal.webp' />
        <div class="flex flex-col justify-between p-4 leading-normal w-full">
            <p class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"> Placeholder Title </p>
            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400"> Placeholder Description </p>
        </div>
    </a>
    {/if}

</div>
