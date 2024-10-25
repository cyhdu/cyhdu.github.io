<script>
    import { formatDate } from '$lib/utils/utils'
    export let data;
</script>
  
<div class="content p-14 max-w-6xl mx-auto">
    <h1 class="text-4xl align-middle text-left pt-14 font-semibold pb-3"> {data.meta.title} </h1>
    <h1 class="indent-6 text-xl align-middle text-left font-small text-gray-700"> {data.meta.blurb} </h1>
    <h1 class="indent-6 text-md align-middle text-left font-small text-gray-700 pb-3">{formatDate(data.meta.date)}</h1>
    <!-- <hr class="w-full pb-2"/> -->
    <svelte:component this={data.content} />
</div>
