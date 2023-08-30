export const fragTest: string = `
uniform float u_time;

uniform vec3 fogColor;
varying float vFogDepth;
uniform float fogDensity;
uniform vec2 u_resolution;

void main() {
    gl_FragColor = vec4(0.0, 0.58, 0.86, 1.0);
    vec2 st = gl_FragCoord.xy/u_resolution;

    float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
    
    // float cy = clamp(1.0-st.y, 0.0, 1.0);
    float my = smoothstep(0.2, 1.0, 1.0-st.y);
    // cy = pow(cy, 1);

    float temp = 0.069;
    vec3 backColor = vec3(fogColor.x+temp, fogColor.yz);
    gl_FragColor.rgb = mix( gl_FragColor.rgb, backColor, my);
}
`

export const basicVert: string = `

uniform float u_time;

varying float vFogDepth;

float _PI         = 3.1415;
// Parameters
vec4 _WaveA = vec4(1.0, 0.0, 0.2, 64.0);
vec4 _WaveB = vec4(0.0, 1.3, 0.3, 32.0);
vec4 _WaveC = vec4(0.2, 0.5, 0.1, 16.0);
vec4 _WaveD = vec4(0.3, 0.4, 0.4, 8.0);

vec3 GerstnerWave(vec4 wave, vec3 p) {
    float steepness = wave.z;
    float wavelength = wave.w;
    float k = 2.0 * _PI / wavelength;
    float c = sqrt(9.8 / k);
    vec2 d = normalize(wave.xy);
    float f = k * (dot(d, p.xy) - c * u_time);
    float a = steepness / k;

    return vec3(
        d.x * (a * cos(f)),
        d.y * (a * sin(f)),
        a * sin(f)
    );
}

void main() {
    vec3 p = position;
    p += GerstnerWave(_WaveA, position);
    p += GerstnerWave(_WaveB, position);
    p += GerstnerWave(_WaveC, position);
    p += GerstnerWave(_WaveD, position);

    vec4 mvPosition = modelViewMatrix * vec4(p, 1.0);
    vFogDepth = -mvPosition.z;
    gl_Position = projectionMatrix * mvPosition;

    
}
`