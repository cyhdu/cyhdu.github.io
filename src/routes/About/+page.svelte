<script lang="ts">
    import { AccordionItem, Accordion } from 'flowbite-svelte';


</script>



<div class="content p-14 max-w-7xl mx-auto">
    <h1 class="text-5xl align-middle text-center pt-14 font-semibold pb-3"> ABOUT ME </h1>

    <hr class="w-1/4 mx-auto mb-3 h-1 bg-gray-300 border-0 rounded"/>


    <div class="w-full flex flex-col md:flex-row justify-center items-center">
        <img src="images/CESSign.jpg" class="rounded-full h-80 p-12"/>
        <div class="flex flex-col p-8">
            <p class="indent-8"> 
                Hi, I'm Charlie! I'm a junior in Computer Science at the University
                of Illinois Urbana-Champaign. I'm interested in all kinds of programming,
                but currently am taking classes with a focus in system design and architecture.
            </p>
            <p class="indent-8 pt-4">
                I also work part-time at the Brunswick iJet lab as a CG Software Developer.
                My work revolves around bringing the future to life in Unreal Engine.
                Last year, we made a boating simulator that showcased autonomous features.
                I had the opportunity to attend the Consumer Electronics Show last year to show it off!
            </p>
            <p class="indent-8 pt-4"> 
                Outside of work and school I like learning about new things. My current obsession is
                learning Rust to rewrite some old projects. I'm also a huge keyboard nerd and 
                headphone collector.
            </p>
        </div>
    </div>

    <h1 class="text-3xl align-middle text-center pt-6 font-semibold pb-3"> LEARN MORE </h1>

    <hr class="w-1/6 mx-auto mb-3 h-1 bg-gray-300 border-0 rounded"/>
    
    <div class="w-full">
    <Accordion flush multiple>
        <AccordionItem>
            <span slot="header">Coursework</span>



        </AccordionItem>
        <AccordionItem>
            <span slot="header">Achievements</span>


        </AccordionItem>
    </Accordion>
    </div>

    <div class="flex justify-center pt-6">
        <a class="text-xl font-wemibold pb-3" href="Resume.pdf">View my resume</a>
    </div>

</div>
