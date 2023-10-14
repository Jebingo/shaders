#ifdef GL_ES
precision mediump float;
#endif

uniform vec2 u_resolution;  // Canvas size (width,height)
uniform vec2 u_mouse;       // mouse position in screen pixels
uniform float u_time;       // Time in seconds since load

float sdBox( in vec2 p, in vec2 b )
{
    vec2 d = abs(p)-b;
    return length(max(d,0.0)) + min(max(d.x,d.y),0.0);
}

void main(){
    vec2 uv = gl_FragCoord.xy / u_resolution.xy * 2.0 - 1.0; // map the space to -1, 1 and 0,0 in the center
    uv.x *= u_resolution.x / u_resolution.y; // fix aspect ratio
    vec3 col = vec3(0.0, 0.0, 0.0);

    float radius = 5.0 / 10.0;
    float d = length(uv);
    d = abs(d - radius);
    d = smoothstep(0.0, 0.1, d);
    // d = -d;

    gl_FragColor = vec4(vec3(d), 1.0);
}