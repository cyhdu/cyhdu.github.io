<script lang="ts">
    import { Canvas } from '@threlte/core';
    import typewriter from '$lib/components/typewriter.ts';
    import Scene from './Scene.svelte';
	import Card from '$lib/components/Card.svelte';

    export let data;

    const p1 = data.posts.find(post => post.meta.project_title == "CES 2023")
    const p2 = data.posts.find(post => post.meta.project_title == "Portfolio Website")
    const p3 = data.posts.find(post => post.meta.project_title == "Game Dev Project")

    let elem;
    let playing: boolean = true;
    let nightMode: boolean = false;


    // $: console.log(playing);
    // $: nightMode: 

    function sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }
    
    let displayed = false;
    sleep(200).then(() => {displayed = true});



</script>
<div class="waves h-screen">
    <Canvas>
        <Scene shouldRender={playing} {nightMode}/>
    </Canvas>
    <!-- <label class="check">
        <input type='checkbox' bind:checked={playing} />
        Display contents
    </label>
    <label class="check">
        <input type='checkbox' bind:checked={nightMode} />
        Light/Dark
    </label> -->
    {#if displayed}
    <div class="absolute top-1/2 left-28 max-w-7xl mx-auto">
        <div class="w-fit px-14" in:typewriter={{ delay: 0, speed: 30 }}>
            <h1 class="text-black font-sans font-bold text-7xl">
                Charlie Du
            </h1>
            <!-- Fix text wrapping -->
            <!-- <p class="text-black font-sans font-semibold text-2xl">
                CG Software Developer.  Problem Solver.  Visionary.
            </p> -->
            <!-- Figure out better way to anchor right -->
            <a href="/About" class="text-slate-800 float-right font-sans font-medium">
                Learn More -&gt
            </a>
            <!-- Ew cringe -->
        </div>
    </div>
    {/if}
</div>

<div class="w-full grad min-h-full">
    <div class="content p-14 max-w-7xl mx-auto ">
        <h2 class="text-slate-600 font-sans font-semibold text-5xl">
            I love learning about new things
        </h2>
        <h2 class="text-slate-500 font-sans font-semibold text-xl pt-4">
            Check out some of my projects.
        </h2>

        <div class="w-full pt-6 flex flex-wrap justify-center items-center">
            <!-- <img src={placeholder} class="w-20 m-4"/>
            <img src={placeholder} class="w-20 m-4"/>
            <img src={placeholder} class="w-20 m-4"/> -->
            <!-- <Card imgsrc={CES} headertext={"CES 2023"} desctext={"An interactive boating simulator built for CES 2023"} href={"/About"}/>
            <Card imgsrc={Website} headertext={"Portolio Website"} desctext={"This website which serves as my portfolio"} href={"/About"}/>
            <Card imgsrc={touchpad} headertext={"Touchpad Writing"} desctext={"An app to use a laptop touchpad as a drawing tablet"} href={"/About"}/> -->

            <Card post = {p1}/>
            <Card post = {p2}/>
            <Card post = {p3}/>
        </div>
    </div>
</div>

<style>
    .waves {
        min-height: 45em;
        background-color: var(--primary);
    }
</style>
