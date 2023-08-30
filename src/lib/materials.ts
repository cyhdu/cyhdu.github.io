import { getContext } from "svelte"

export function useShader(): ShaderContext{
	return getContext('threlte-shader')
}