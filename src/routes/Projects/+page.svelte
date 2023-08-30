<script>
	import BigCard from "../../lib/components/BigCard.svelte";

</script>
<div class="w-full whole min-h-screen bg-gradient-to-b from-cyan-300">
    <div class="content p-14 max-w-7xl mx-auto">
        <h1 class="text-5xl align-middle text-center pt-14 font-semibold"> PROJECTS </h1>

    </div>
    <BigCard/>
    <BigCard imleft={false}/>
</div>

<style>
    .whole {
        background-color: var(--primary);
    }
</style>