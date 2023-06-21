#ifdef GL_ES
precision mediump float;
#endif

uniform vec2 u_resolution;// Canvas size (width,height)
uniform vec2 u_mouse;// mouse position in screen pixels
uniform float u_time;// Time in seconds since load

void main(){
    // Changing colors by time
    float red = abs(sin(u_time * .25 ));
    float green = abs(sin(u_time * .5 ));
    float blue = abs(sin(u_time * .75 ));
    gl_FragColor=vec4( red,green,blue,1.);
    
    // Changing colors by mouse
    // float red = u_mouse.x / u_resolution.x;
    // float blue = u_mouse.y / u_resolution.y;
	// gl_FragColor = vec4(red, 0 ,blue ,1.);
    
    // Gradient
    // vec2 st = gl_FragCoord.xy/u_resolution;
    // gl_FragColor = vec4(st.x, st.y , st.y, 1.);
}
