<script lang="ts">
    import { T, useFrame, useThrelte } from '@threlte/core'
    import { FogExp2, Color } from 'three'
    import { basicVert, fragTest } from '$lib/test.glsl';
    import {uniforms} from './stores'
    import '/src/styles/app.scss'



    // let geometry: PlaneGeometry
    // let geometry

    // let vertices = geometry.getAttribute('position').array


    // let count = 0

    // useRender(({ camera, renderer, scene }, delta) => {
    //     if (!geometry) return
    //     geometry.verticesNeedUpdate = true
    //     count++
    //     geometry.attributes.position.array[2] = count
    //     renderer.render(scene, camera.current)
    // })


    export let shouldRender: boolean = false;
    export let nightMode: boolean = false;
    const {frameloop} = useThrelte();

    
    // uniforms.update((u) => {
    //     u.u_resolution.value = [size.length, size.width];
    //     return u;
    // });

    const _light = new Color( 0xf0ffff );
    const _dark = new Color( 0x676767 );
    const _density = 0.0375;

    // scene.fog = new FogExp2("azure",  0.0375);
    // scene.fog.color = _light;


    function updateFog(c: Color, d: number) {
        uniforms.update((u) => {
            u.fogColor.value = c;
            u.fogDensity.value = d;
            return u;
        });
    }

    updateFog(_light, 0.0375);


    function update_uTime(d: number): void {
        uniforms.update((u) => {
            u.u_time.value += d;
            return u;
        });
    }

    function setFrameLoop(b: boolean) {
        if(b) {
            frameloop.update((s) => 'demand');
        }
        else {
            frameloop.update((s) => 'never');
        }

    }

    function setMode(b: boolean) {
        if (b) {
            updateFog(_dark, 0.0375);
        }
        else {
            updateFog(_light, 0.0375);
        }
    }

    function handleResize() {

    }

    $: setFrameLoop(shouldRender);
    $: setMode(nightMode);

    useFrame((state, delta) => {
        update_uTime(delta);
    })


    // frameloop.update((s) => 'never');
</script>

<svelte:window on:resize={handleResize}/>

<T.PerspectiveCamera
  makeDefault
  position={[17,6,17]}
  on:create={({ ref }) => {
    ref.lookAt(0, -3, 0)
  }}
/>

<T.Mesh rotation.x={-Math.PI*.5}>
    <T.PlaneGeometry args={[70,70,25,25]}/>
    <!-- <T.ShaderMaterial bind:ref={shade}/> -->
    <T.ShaderMaterial fragmentShader={fragTest} 
                      vertexShader={basicVert} 
                      wireframe={false}
                      uniforms={$uniforms}/>
    <!-- <T.MeshBasicMaterial color="green"/> -->
</T.Mesh>
