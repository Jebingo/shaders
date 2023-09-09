#ifdef GL_ES
precision mediump float;
#endif

uniform vec2 u_resolution;  // Canvas size (width,height)
uniform vec2 u_mouse;       // mouse position in screen pixels
uniform float u_time;       // Time in seconds since load

void main(){
    vec2 uv = gl_FragCoord.xy / u_resolution.xy * 2.0 - 1.0; // map the space to -1, 1 and 0,0 in the center
    uv.x *= u_resolution.x / u_resolution.y; // fix aspect ratio
    vec3 col = vec3(0.0, 0.0, 0.0);

    gl_FragColor = vec4(col, 1.0);
}