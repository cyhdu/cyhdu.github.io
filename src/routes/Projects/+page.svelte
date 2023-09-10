<script>
	import BigCard from "../../lib/components/BigCard.svelte";
    import { AccordionItem, Accordion } from 'flowbite-svelte';

</script>
<div class="w-full whole min-h-screen">
    <div class="content p-14 max-w-7xl mx-auto">
        <h1 class="text-5xl align-middle text-center pt-14 font-semibold pb-6"> PROJECTS </h1>

        <Accordion flush multiple>
            <AccordionItem open>
              <span slot="header">Projects for Work</span>
                <BigCard/>

            </AccordionItem>
            <AccordionItem>
              <span slot="header">Personal Projects</span>
                <BigCard imleft={false}/>
            </AccordionItem>
            <AccordionItem>
              <span slot="header">Class Projects</span>
                <BigCard imleft={false}/>
            </AccordionItem>
          </Accordion>
 

    </div>
</div>

<style>
    .whole {
        background-color: var(--primary);
    }
</style>