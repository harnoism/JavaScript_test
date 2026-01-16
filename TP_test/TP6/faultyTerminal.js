        // import { Renderer, Program, Mesh, Color, Triangle } from 'https://cdn.skypack.dev/ogl';

        // /* ================= SHADERS ================= */
        // const vertexShader = `
        //     attribute vec2 position;
        //     attribute vec2 uv;
        //     varying vec2 vUv;
        //     void main() {
        //         vUv = uv;
        //         gl_Position = vec4(position, 0.0, 1.0);
        //     }
        // `;

        // const fragmentShader = `  
        //     precision mediump float;     
        //     varying vec2 vUv;    
        //     uniform float iTime;      
        //     uniform vec3 iResolution;
        //     uniform float uScale;

        //     float digit(vec2 p) {
        //         p = fract(p);
        //         return step(0.4, p.x) * step(0.4, p.y);
        //     }

        //     void main() {
        //         vec2 p = vUv * uScale;
        //         float d = digit(p);
        //         vec3 col = vec3(d) * vec3(0.0, 1.0, 0.53);
        //         gl_FragColor = vec4(col, 1.0);
        //     }
        // `;

        // /* ================= MAIN ================= */
        // const container = document.getElementById('terminal');

        // const renderer = new Renderer({
        //     dpr: Math.min(window.devicePixelRatio, 2)
        // });

        // const gl = renderer.gl;
        // gl.clearColor(0, 0, 0, 1);

        // container.appendChild(gl.canvas);

        // const geometry = new Triangle(gl);

        // const program = new Program(gl, {
        //     vertex: vertexShader,
        //     fragment: fragmentShader,
        //     uniforms: {
        //         iTime: { value: 0 },
        //         iResolution: { value: new Color(1, 1, 1) },
        //         uScale: { value: 20 }
        //     }
        // });

        // const mesh = new Mesh(gl, { geometry, program });

        // function resize() {
        //     renderer.setSize(container.clientWidth, container.clientHeight);
        //     program.uniforms.iResolution.value = new Float32Array([
        //         gl.canvas.width,
        //         gl.canvas.height,
        //         gl.canvas.width / gl.canvas.height
        //     ]);
        // }

        // window.addEventListener('resize', resize);
        // resize();

        // /* ================= LOOP ================= */
        // function animate(t) {
        //     program.uniforms.iTime.value = t * 0.001;
        //     renderer.render({ scene: mesh });
        //     requestAnimationFrame(animate);
        // }

        // requestAnimationFrame(animate);

        // /* ================= FORM HANDLING ================= */
        // document.getElementById('portailForm').addEventListener('submit', (e) => {
        //     e.preventDefault();
        //     const pseudo = document.getElementById('pseudo').value;
        //     const sprite1 = document.getElementById('sprite1').checked;
        //     const sprite2 = document.getElementById('sprite2').checked;
        //     const sprite3 = document.getElementById('sprite3').checked;
            
        //     console.log('Pseudo:', pseudo);
        //     console.log('Sprites:', { sprite1, sprite2, sprite3 });
            
        //     // logique de navigation ou d'envoi de données
        //     alert(`Bienvenue ${pseudo} !`);
        // });