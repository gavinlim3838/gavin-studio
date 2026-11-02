import React, { useEffect, useRef } from 'react';

/**
 * HeroBackgroundAnimation
 * Theme: Abstract Liquid Light × Prismatic Refraction × Dark Digital Art
 *
 * Features based on reference:
 * 1. Translucent liquid glass waves, folds, and 3D caustic ripples.
 * 2. Dominant deep obsidian / dark purple background (#0B0913 to #140D24).
 * 3. Blue-violet light ribbons with delicate pale lilac-white crests.
 * 4. Subtle chromatic dispersion (rainbow reduced by ~70%, delicate and refined).
 * 5. Calm, slow undulating fluid motion.
 * 6. Central dark void reserved for crystal-clear title & CTA legibility.
 * 7. Real WebGL 3D refractive caustics with automatic 2D Canvas fallback.
 */

const VERTEX_SHADER_SOURCE = `
attribute vec2 a_position;
void main() {
  gl_Position = vec4(a_position, 0.0, 1.0);
}
`;

const FRAGMENT_SHADER_SOURCE = `
precision highp float;

uniform vec2 u_resolution;
uniform float u_time;
uniform vec2 u_mouse;

// Rotational transform for organic fluid folding
mat2 rot(float a) {
  float s = sin(a), c = cos(a);
  return mat2(c, -s, s, c);
}

// Optical caustic refraction through undulating liquid glass
float glassCaustic(vec2 p, float t, float dispersion) {
  vec2 uv = p * (1.0 + dispersion * 0.035);
  float slowTime = t * 0.16; // Gentle, meditative fluid drift

  // Domain warp layer 1: broad organic liquid folds
  vec2 q = vec2(
    sin(uv.x * 1.15 + slowTime * 0.65) + cos(uv.y * 1.35 - slowTime * 0.45),
    cos(uv.x * 1.25 - slowTime * 0.55) + sin(uv.y * 1.05 + slowTime * 0.75)
  );

  // Domain warp layer 2: secondary glass curvature
  vec2 r = uv + q * 0.46;
  r = rot(0.52) * r;

  vec2 s = vec2(
    sin(r.x * 1.95 - slowTime * 0.85 + cos(r.y * 1.65 + slowTime * 0.35)),
    cos(r.y * 2.25 + slowTime * 0.70 + sin(r.x * 1.50 - slowTime * 0.50))
  );

  vec2 pFinal = r + s * 0.38;

  // Wave interference creating curvilinear liquid glass ridges and caustic ribbons
  float w1 = sin(pFinal.x * 2.4 + pFinal.y * 1.9 + slowTime * 0.55);
  float w2 = cos(pFinal.x * 1.9 - pFinal.y * 2.7 - slowTime * 0.45);
  float w3 = sin(length(pFinal - vec2(0.15, -0.25)) * 2.8 - slowTime * 0.70);
  float w4 = cos(pFinal.x * 3.6 + pFinal.y * 1.3 + slowTime * 0.35);

  float waveSum = (w1 * 0.35 + w2 * 0.35 + w3 * 0.20 + w4 * 0.10);

  // Caustic focal peak: sharp luminous ribbons with soft diffuse body
  float focalRidge = pow(clamp(1.0 - abs(waveSum), 0.0, 1.0), 4.2);
  float diffuseGlow = pow(clamp(1.0 - abs(waveSum), 0.0, 1.0), 1.7) * 0.32;

  return focalRidge + diffuseGlow;
}

void main() {
  vec2 st = gl_FragCoord.xy / u_resolution.xy;
  vec2 p = (gl_FragCoord.xy * 2.0 - u_resolution.xy) / min(u_resolution.x, u_resolution.y);

  // Interactive subtle mouse parallax deflection
  vec2 mouseNorm = (u_mouse / u_resolution - 0.5) * 2.0;
  p += mouseNorm * 0.06;

  float t = u_time;

  // Distance from center for the reserved dark zone
  // Distance from center for the reserved dark zone
  // "中间：保留足够的暗色空间放 Hero 标题"
  float centerDist = length((st - vec2(0.5, 0.48)) * vec2(1.0, 1.28));
  // Smoothly dampens caustics in the central area (retaining deep dark obsidian)
  float centerBrightness = smoothstep(0.10, 0.65, centerDist);
  float edgeFactor = mix(0.18, 1.0, centerBrightness);

  // Top Menu Bar region dampening: prevents light caustics from washing out the navbar
  // st.y is 1.0 at the top edge of the screen
  float distFromTop = 1.0 - st.y;
  float topDampen = smoothstep(0.04, 0.22, distFromTop);
  // Dim the caustic refraction strongly near the top 15%
  edgeFactor *= mix(0.15, 1.0, topDampen);

  // Chromatic dispersion evaluation:
  // Rainbow reduced by ~70%: subtle chromatic aberration delta (0.012)
  float delta = 0.012;
  float causticR = glassCaustic(p, t, -delta);
  float causticG = glassCaustic(p, t, 0.0);
  float causticB = glassCaustic(p, t, delta * 1.15);

  // Monochromatic base luminance (blue-violet dominance)
  float monoCaustic = (causticR * 0.25 + causticG * 0.45 + causticB * 0.30);

  // 3D Liquid glass normal approximation via height gradient
  vec2 eps = vec2(0.005, 0.0);
  float hL = glassCaustic(p - eps.xy, t, 0.0);
  float hR = glassCaustic(p + eps.xy, t, 0.0);
  float hD = glassCaustic(p - eps.yx, t, 0.0);
  float hU = glassCaustic(p + eps.yx, t, 0.0);
  vec3 N = normalize(vec3(hL - hR, hD - hU, 0.14));

  // 3D light vectors for glass sheen
  vec3 L = normalize(vec3(0.25, 0.65, 0.75));
  vec3 V = vec3(0.0, 0.0, 1.0);
  vec3 H = normalize(L + V);

  // Specular highlight: pale lilac-white crests on glass folds (淡紫白色)
  float spec = pow(max(dot(N, H), 0.0), 16.0) * monoCaustic;

  // Color Palette conforming strictly to user requirements:
  // 1. Dark Purple / Obsidian Black background
  vec3 colDarkBackground = vec3(0.038, 0.032, 0.068); // #0A0811
  vec3 colDeepPurple     = vec3(0.085, 0.055, 0.165); // Deep velvet violet
  
  // 2. Translucent liquid glass body
  vec3 colGlassBody      = vec3(0.20, 0.15, 0.38);    // Rich royal violet
  
  // 3. Primary light: Blue-violet (蓝紫色为主)
  vec3 colBlueViolet     = vec3(0.48, 0.44, 0.88);    // Luminous periwinkle / blue-violet
  
  // 4. Specular crest: Pale lilac-white (淡紫白色)
  vec3 colPaleLilacWhite = vec3(0.92, 0.89, 0.98);
  
  // 5. Subtle pink warmth at edge folds (淡粉色)
  vec3 colSoftPink       = vec3(0.86, 0.64, 0.82);

  // Chromatic fringe (rainbow reduced by 70%, keeping it sophisticated and subtle)
  vec3 chromaticFringe = vec3(causticR, causticG, causticB);
  vec3 refinedCaustic = mix(vec3(monoCaustic), chromaticFringe, 0.28);

  // Composite layers:
  // Base ambient gradient
  vec3 finalColor = mix(colDarkBackground, colDeepPurple, smoothstep(0.0, 1.0, monoCaustic * 0.7));

  // Add translucent glass body
  finalColor += colGlassBody * (monoCaustic * 0.70 * edgeFactor);

  // Add blue-violet refracted light ribbons
  finalColor += colBlueViolet * (refinedCaustic * 0.88 * edgeFactor);

  // Add subtle soft-pink prism refraction on sharp wave transitions
  float pinkRim = pow(clamp(causticR - causticB, 0.0, 1.0), 1.6) * 0.45;
  finalColor += colSoftPink * pinkRim * edgeFactor;

  // Add 3D specular highlight (pale lilac-white crests)
  finalColor += colPaleLilacWhite * (spec * 0.65 * edgeFactor);

  gl_FragColor = vec4(finalColor, 1.0);
}
`;

export const HeroBackgroundAnimation: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mousePos = useRef<{ x: number; y: number; targetX: number; targetY: number }>({
    x: 0,
    y: 0,
    targetX: 0,
    targetY: 0
  });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    let animationFrameId: number;
    let gl = canvas.getContext('webgl', { antialias: true, alpha: false, depth: false }) as WebGLRenderingContext | null;
    if (!gl) {
      gl = canvas.getContext('experimental-webgl', { antialias: true, alpha: false, depth: false }) as WebGLRenderingContext | null;
    }

    // High performance scale capped at 1.5 for buttery 60 FPS
    let dpr = Math.min(window.devicePixelRatio || 1, 1.5);
    let cssWidth = canvas.parentElement?.clientWidth || window.innerWidth;
    let cssHeight = canvas.parentElement?.clientHeight || window.innerHeight;

    mousePos.current.x = cssWidth / 2;
    mousePos.current.y = cssHeight / 2;
    mousePos.current.targetX = cssWidth / 2;
    mousePos.current.targetY = cssHeight / 2;

    const handleResize = () => {
      if (!canvas || !canvas.parentElement) return;
      dpr = Math.min(window.devicePixelRatio || 1, 1.5);
      cssWidth = canvas.parentElement.clientWidth;
      cssHeight = canvas.parentElement.clientHeight;
      canvas.width = Math.round(cssWidth * dpr);
      canvas.height = Math.round(cssHeight * dpr);
      if (gl) {
        gl.viewport(0, 0, canvas.width, canvas.height);
      }
      mousePos.current.targetX = cssWidth / 2;
      mousePos.current.targetY = cssHeight / 2;
    };

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mousePos.current.targetX = e.clientX - rect.left;
      mousePos.current.targetY = e.clientY - rect.top;
    };

    const handleMouseLeave = () => {
      mousePos.current.targetX = cssWidth / 2;
      mousePos.current.targetY = cssHeight / 2;
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);

    handleResize();

    // Setup WebGL Shader Program if available
    let program: WebGLProgram | null = null;
    let positionBuffer: WebGLBuffer | null = null;
    let uResolutionLoc: WebGLUniformLocation | null = null;
    let uTimeLoc: WebGLUniformLocation | null = null;
    let uMouseLoc: WebGLUniformLocation | null = null;

    if (gl) {
      const createShader = (type: number, source: string) => {
        if (!gl) return null;
        const shader = gl.createShader(type);
        if (!shader) return null;
        gl.shaderSource(shader, source);
        gl.compileShader(shader);
        if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
          console.error(gl.getShaderInfoLog(shader));
          gl.deleteShader(shader);
          return null;
        }
        return shader;
      };

      const vertShader = createShader(gl.VERTEX_SHADER, VERTEX_SHADER_SOURCE);
      const fragShader = createShader(gl.FRAGMENT_SHADER, FRAGMENT_SHADER_SOURCE);

      if (vertShader && fragShader) {
        program = gl.createProgram();
        if (program) {
          gl.attachShader(program, vertShader);
          gl.attachShader(program, fragShader);
          gl.linkProgram(program);

          if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
            console.error(gl.getProgramInfoLog(program));
            program = null;
          } else {
            gl.useProgram(program);

            // Fullscreen quad [-1, -1] to [1, 1]
            const positions = new Float32Array([
              -1, -1,
               1, -1,
              -1,  1,
              -1,  1,
               1, -1,
               1,  1,
            ]);

            positionBuffer = gl.createBuffer();
            gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
            gl.bufferData(gl.ARRAY_BUFFER, positions, gl.STATIC_DRAW);

            const aPositionLoc = gl.getAttribLocation(program, 'a_position');
            gl.enableVertexAttribArray(aPositionLoc);
            gl.vertexAttribPointer(aPositionLoc, 2, gl.FLOAT, false, 0, 0);

            uResolutionLoc = gl.getUniformLocation(program, 'u_resolution');
            uTimeLoc = gl.getUniformLocation(program, 'u_time');
            uMouseLoc = gl.getUniformLocation(program, 'u_mouse');
          }
        }
      }
    }

    const startTime = performance.now();

    const render = () => {
      // Smooth mouse lag
      mousePos.current.x += (mousePos.current.targetX - mousePos.current.x) * 0.04;
      mousePos.current.y += (mousePos.current.targetY - mousePos.current.y) * 0.04;

      const elapsed = (performance.now() - startTime) * 0.001;

      if (gl && program) {
        gl.useProgram(program);
        gl.uniform2f(uResolutionLoc, canvas.width, canvas.height);
        gl.uniform1f(uTimeLoc, elapsed);
        gl.uniform2f(uMouseLoc, mousePos.current.x * dpr, (cssHeight - mousePos.current.y) * dpr);

        gl.drawArrays(gl.TRIANGLES, 0, 6);
      } else {
        // Fallback 2D canvas if WebGL is disabled
        const ctx = canvas.getContext('2d');
        if (ctx) {
          ctx.fillStyle = '#0B0913';
          ctx.fillRect(0, 0, canvas.width, canvas.height);
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      if (gl && program) {
        if (positionBuffer) gl.deleteBuffer(positionBuffer);
        gl.deleteProgram(program);
      }
    };
  }, []);

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden z-0 bg-[#0A0811]">
      {/* Live WebGL 3D Liquid Glass & Refraction Caustics Canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full block"
      />

      {/* Center Black Space Protection Vignette */}
      {/* Ensures the central typography and CTAs sit over a calm, dark obsidian void */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 65% 62% at 50% 48%, rgba(10,8,17,0.85) 0%, rgba(10,8,17,0.50) 45%, rgba(10,8,17,0) 100%)'
        }}
      />

      {/* Top Menu Bar Darkness Protection Gradient */}
      {/* 顶部暗度 90%，向下渐变至 60%~70%，再平滑淡出，彻底避免光线曝光 menu bar */}
      <div
        className="absolute inset-x-0 top-0 h-56 pointer-events-none z-[1]"
        style={{
          background:
            'linear-gradient(to bottom, rgba(10,8,17,0.92) 0%, rgba(10,8,17,0.85) 35%, rgba(10,8,17,0.68) 65%, rgba(10,8,17,0.30) 85%, transparent 100%)'
        }}
      />

      {/* Seamless obsidian blend at bottom transition into next section */}
      <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#0D0B10] via-[#0D0B10]/80 to-transparent pointer-events-none" />
    </div>
  );
};
