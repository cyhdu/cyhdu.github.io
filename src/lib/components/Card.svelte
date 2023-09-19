<script lang="ts">
    export let post;
</script>


<div class="w-80 m-4 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    {#if post}
    <a href = {post.path}>
        <img class="rounded-t-lg w-full h-72 object-cover" src={post.meta.preview} alt=""/>
    </a>
    <div class="p-5 h-100">
        <!-- <a href = {post.path}> -->
        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{post.meta.project_title}</h5>
        <!-- </a> -->
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">{post.meta.blurb}</p>
        <a href = {post.path} class="block text-right text-lg font-medium text-black hover:text-gray-500 hover:font-semibold">
            Read more -&gt
             <!-- <svg class="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
            </svg> -->
        </a>
    </div>
    {:else}
    <a href = "">
        <img class="rounded-t-lg w-full h-72 object-cover" src='/images/focal.webp' alt=""/>
    </a>
    <div class="p-5 h-100">
        <!-- <a href = ""> -->
        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Placeholder Title</h5>
        <!-- </a> -->
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Placeholder description</p>
        <a href = "" class="block text-right text-lg font-medium text-black hover:text-gray-500 hover:font-semibold">
            Read more -&gt
             <!-- <svg class="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
            </svg> -->
        </a>
    </div>
    {/if}
</div>
