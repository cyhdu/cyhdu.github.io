<script lang="ts">


export let imgsrc;
export let href;
export let headertext = "Placeholder";
export let desctext = "Add text here";


</script>


<div class="w-80 m-4 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    <a {href}>
        <img class="rounded-t-lg w-full h-72 object-cover" src={imgsrc} alt=""/>
    </a>
    <div class="p-5 h-100">
        <a {href}>
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{headertext}</h5>
        </a>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">{desctext}</p>
        <a {href} class="block text-right text-lg font-medium text-black hover:text-gray-500 hover:font-semibold">
            Read more -&gt
             <!-- <svg class="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
            </svg> -->
        </a>
    </div>
</div>