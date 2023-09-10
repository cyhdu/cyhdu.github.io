<script lang="ts">
    import asdf from '$lib/images/focal.webp'
    export let imleft = true;
    export let header="Placeholder"
    export let desc = "Short Description here"
    export let c = "red";
</script>


<div class="px-3 py-6 max-w-7xl">

    <a href="#" class="smcard w-full h-full mx-auto flex flex-row items-center rounded-lg">

        {#if imleft}
        <img class="object-cover w-1/3 rounded-lg hover:-inset-0 h-96" src={asdf}/>
        {/if}
        <div class="flex flex-col justify-between p-4 leading-normal w-full">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{header}</h5>
            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">{desc}</p>

        </div>
        {#if !imleft}
        <img class="object-cover w-1/3 rounded-lg h-96" src={asdf}/>
        {/if}
    </a>

</div>
<!-- <a href="#" class="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
    <img class="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg" src="/docs/images/blog/image-4.jpg" alt="">
    <div class="flex flex-col justify-between p-4 leading-normal">
        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
    </div>
</a> -->
