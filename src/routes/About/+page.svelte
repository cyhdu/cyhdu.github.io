<script lang="ts">
    import { AccordionItem, Accordion } from 'flowbite-svelte';

    let skills = ["Unreal Engine",
                  "C++", 
                  "Python", 
                  "C#", 
                  "Java", 
                  "JavaScript", 
                  "Svelte/Sveltekit", 
                  "Docker", 
                  "Unity Engine",
                ]
    let courses = [
        "Data Structurs and Algorithms",
        "Computer Architecture",
        "Deep Learning for Computer Vision",
        "Algorithms and Models of Computation",
        "Computer Systems Engineering",
        "Probability & Statistics"
    ]


</script>



<div class="content p-14 max-w-7xl mx-auto">
    <h1 class="text-5xl align-middle text-center pt-14 font-semibold pb-3"> ABOUT ME </h1>

    <hr class="w-40 mx-auto mb-3 h-1 bg-gray-300 border-0 rounded"/>


    <div class="w-full flex flex-col md:flex-row justify-center items-center">
        <div class="flex flex-col p-8">
            <p class="indent-8"> 
                Hi, I'm Charlie! I'm a senior in Computer Science at the University
                of Illinois Urbana-Champaign. I'm interested in all kinds of programming,
                but currently am taking classes with a focus in system design and architecture.
            </p>
            <p class="indent-8 pt-4">
                I also work part-time at the Brunswick iJet lab as a CG Software Developer.
                My work revolves around bringing the future to life in Unreal Engine.
                The last few years, we have made a boating simulator that showcased autonomous features.
                I have had the opportunity to attend the Consumer Electronics Show multiple times over the last few years to show it off!
            </p>
            <p class="indent-8 pt-4"> 
                Outside of work and school I like learning about new things. My current obsession is
                learning Rust to rewrite some old projects. I also love outdoor activities like hiking and playing frisbee.
            </p>
            <p class="indent-8 pt-4"> 
                Feel free to get in touch with me using the buttons in the footer!
            </p>
        </div>
    </div>

    <h1 class="text-3xl align-middle text-center pt-6 font-semibold pb-3"> LEARN MORE </h1>

    <hr class="w-32 mx-auto mb-3 h-1 bg-gray-300 border-0 rounded"/>
    
    <div class="w-full">
        <Accordion flush multiple>
            <AccordionItem>
                <span slot="header">Achievements and Recognition</span>
                <div class="flex flex-col md:flex-row justify-center items-center">
                    <img src="images/internAwards2.jpg" class="rounded-lg m-4"/>
                    <div class="flex flex-col p-6">
                        <p>
                            “Charlie has been our CGI Engineering Intern at i-Jet for 2 years and has been instrumental in our CES showcase 
                            work and building out our Unreal engine pipeline. He designed and built the framework used for our boating 
                            simulations in Unreal and had collaborated in our CES project for 2 years now. In Jan 2023, he traveled to Las 
                            Vegas to help set up and facilitate the simulator when it ran in the show. This summer, he took on more leadership 
                            into his role when he led the CGI intern team for our CES 2024 project. He stepped up to the leadership 
                            responsibilities after our FTE manager had to step away due to another priority.”

                        </p>

                        <a href="https://researchpark.illinois.edu/article/2023-intern-awards-showcase-talent-at-research-park/"
                           class="text-gray-800 py-2 mt-3 underline">
                            Learn more about the Research Park Intern Awards
                        </a>
                    </div>
                </div>


            </AccordionItem>
            <AccordionItem>
                <span slot="header">Experience</span>
                <p class="text-gray-700 font-lg font-semibold">
                    iJet Lab - Brunswick Corporation <br>
                    Computer Graphics Software Developer Intern
                </p>
                <p class="mx-8">
                    - Managed and provided technical guidance for the team working on CES 2024<br>
                    - Developed training resources for new team members<br>
                    - Developed interactive simulator to showcase autonomous boating at CES 2023<br>
                    - Implemented realistic physics, designed UI, and programmed events to
                    communicate the experience of autonomously docking<br>
                    - Distributed rendering between multiple computers, and calibrated
                    projectors to create a video wall (Unreal nDisplay)<br>
                    - Wrote programs to integrate physical boat hardware with simulator (Python)<br>
                    - Designed simulation system and quick-restart procedures for CES exhibit<br>
                    - Attended CES as exhibitor: set up exhibit, presented simulator to attendees<br>
                </p>



            </AccordionItem>
            <AccordionItem>
                <span slot="header">Skills</span>
                <ul class="grid grid-cols-2 sm:grid-cols-3 grid-flow-row justify-items-center items-center">

                    {#each skills as skill}

                    <li class="m-4">
                        <span>{skill}</span>
                    </li>

                    {/each}

                </ul>



            </AccordionItem>
            <AccordionItem>
                <span slot="header">Coursework</span>
                <ul class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 grid-flow-row justify-items-center items-center">

                    {#each courses as course}

                    <li class="m-4">
                        <span>{course}</span>
                    </li>

                    {/each}

                </ul>



            </AccordionItem>
        </Accordion>
    </div>

    <div class="flex justify-center pt-6">
        <a class="text-xl font-semibold pb-3" href="ResumeCharlieDu.pdf">
            <div class="bg-white p-4 rounded-lg">
                View my resume
            </div>
        </a>
    </div>

</div>
