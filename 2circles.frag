// Author @patriciogv - 2015
// http://patriciogonzalezvivo.com

#ifdef GL_ES
precision mediump float;
#endif

uniform vec2 u_resolution;
uniform vec2 u_mouse;
uniform float u_time;

float circle(vec2 center, float radius){
	vec2 st = gl_FragCoord.xy/u_resolution;
    return  distance(st, center) / radius;
}

void main(){
	vec2 st = gl_FragCoord.xy/u_resolution;
    float pct = 0.0;
    float radius = .56;
    vec2 cetner = vec2(.5);
    vec2 mouse = u_mouse / u_resolution;
    // vec2 mouseSlow = smoothstep(mouse)

    pct = 1. - (circle(mouse, radius) + circle(cetner, radius));

    vec3 color = vec3(pct);

	gl_FragColor = vec4( color, 1.0 );
}
