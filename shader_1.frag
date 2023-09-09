#ifdef GL_ES
precision mediump float;
#endif

uniform vec2 u_resolution;  // Canvas size (width,height)
uniform vec2 u_mouse;       // mouse position in screen pixels
uniform float u_time;       // Time in seconds since load

vec3 palette(float t){
    vec3 a = vec3(.5, .5, .5);
    vec3 b = vec3(.5, .5, .5);
    vec3 c = vec3(1., 1., 1.);
    vec3 d = vec3(.263, .416, .557);

    return a + b*cos(6.28318*(c*t+d));
}
// vec3 palette(float t, vec3 a, vec3 b, vec3 c, vec3 d){
//     return a + b*cos(6.28318*(c*t+d));
// }

mat2 rotate(float angle){
    return mat2(
        cos(angle), -sin(angle),
        sin(angle), cos(angle)
    );
}

void main(){
    vec2 uv = gl_FragCoord.xy / u_resolution.xy * 2.0 - 1.0; // map the space to -1, 1 and 0,0 in the center
    uv.x *= u_resolution.x / u_resolution.y; // fix aspect ratio
    vec2 uv0 = uv;
    vec3 finalColor = vec3(0.);


    for(float i = 0.; i < 3.; i++){
        uv = fract(uv * 1.5) - .5;
        // uv *= rotate(3.*u_time);

        // uv *= abs(sin(uv *5.));

        // float d = length(uv);
        float d = length(uv) * exp(-length(uv0));

        vec3 col = palette(length(uv0) + i*4. + u_time * .4);
        // vec3 col = vec3(1., 2., 3.);

        d = sin(d * 8. + u_time) / 8.;
        d = abs(d);
        d = smoothstep(0., .1, d);

        d = pow(.01 / d, 1.2);

        finalColor += col * d;
    }

    gl_FragColor = vec4(finalColor, 1.);
}