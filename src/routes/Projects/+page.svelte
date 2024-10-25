<script lang="ts">
    import type { Post } from '$lib/types'
	import BigCard from "$lib/components/BigCard.svelte";
    import { AccordionItem, Accordion } from 'flowbite-svelte';
	import YtEmbed from '../../lib/components/YTEmbed.svelte';

    export let data

    // Replace with rust lol
    const work: Post[] = data.posts.filter(post => post.meta.category == "Work")
    const personal: Post[] = data.posts.filter(post => post.meta.category == "Personal")
    const school: Post[] = data.posts.filter(post => post.meta.category == "School")

</script>

<div class="content p-14 max-w-7xl mx-auto">
    <h1 class="text-5xl align-middle text-center pt-14 font-semibold pb-3"> PROJECTS </h1>

    <hr class="w-1/4 mx-auto mb-3 h-1 bg-gray-300 border-0 rounded"/>

    <Accordion flush multiple>
        <AccordionItem open class="font-medium text-xl">
            <span slot="header">Projects for Work</span>

            {#each work as post}
                <BigCard {post}/>
            {/each}
        </AccordionItem>
        <AccordionItem class="font-medium text-xl">
            <span slot="header">Personal Projects</span>
            {#each personal as post}
                <BigCard {post}/>
            {/each}
        </AccordionItem>
        <AccordionItem class="font-medium text-xl">
            <span slot="header">Class Projects</span>
            {#each school as post}
                <BigCard {post}/>
            {/each}
        </AccordionItem>
    </Accordion>
</div>