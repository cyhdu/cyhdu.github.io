import { writable, readable } from "svelte/store";


const defUniforms = {
    u_time: {type: 'f', value: 2.0},
    fogColor: {type: 'c', value: [0,1,2]},
    fogDensity: {type: 'f', value: 0.0425},
    u_resolution: {type: 'p', value: [100,500]},
};
export const uniforms = writable(defUniforms);

