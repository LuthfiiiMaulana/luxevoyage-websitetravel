/**
 * ocean.js — animated night-ocean scene drawn on <canvas id="oceanCanvas">.
 * Layered waves, twinkling stars, moon and foam.
 */

let oceanStarted = false;

function initOceanCanvas() {
  const canvas = document.getElementById('oceanCanvas');
  if (!canvas || oceanStarted) return;
  oceanStarted = true;

  const ctx = canvas.getContext('2d');
  let w = 0;
  let h = 0;
  let t = 0;

  const WAVE_COLORS = [
    'rgba(20,60,130,0.8)',
    'rgba(30,80,160,0.7)',
    'rgba(40,100,180,0.6)',
    'rgba(50,120,200,0.5)',
    'rgba(60,140,220,0.4)',
  ];

  function resize() {
    w = canvas.width = canvas.offsetWidth;
    h = canvas.height = canvas.offsetHeight;
  }

  function drawSky() {
    const sky = ctx.createLinearGradient(0, 0, 0, h * 0.5);
    sky.addColorStop(0, '#0a1628');
    sky.addColorStop(1, '#1a3a6e');
    ctx.fillStyle = sky;
    ctx.fillRect(0, 0, w, h * 0.5);

    // Moon glow
    const glow = ctx.createRadialGradient(w * 0.75, h * 0.15, 0, w * 0.75, h * 0.15, 40);
    glow.addColorStop(0, 'rgba(255,230,150,0.9)');
    glow.addColorStop(1, 'rgba(255,200,50,0)');
    ctx.fillStyle = glow;
    ctx.beginPath();
    ctx.arc(w * 0.75, h * 0.15, 28, 0, Math.PI * 2);
    ctx.fill();

    // Stars
    for (let i = 0; i < 40; i++) {
      const x = (Math.sin(i * 37.4) * 0.5 + 0.5) * w;
      const y = (Math.sin(i * 19.1) * 0.5 + 0.5) * h * 0.4;
      const alpha = 0.4 + 0.4 * Math.sin(t * 2 + i);
      ctx.fillStyle = `rgba(255,255,220,${alpha})`;
      ctx.beginPath();
      ctx.arc(x, y, 0.8, 0, Math.PI * 2);
      ctx.fill();
    }
  }

  function drawWater() {
    const ocean = ctx.createLinearGradient(0, h * 0.45, 0, h);
    ocean.addColorStop(0, '#0e2a5c');
    ocean.addColorStop(0.4, '#0a1e45');
    ocean.addColorStop(1, '#060f25');
    ctx.fillStyle = ocean;
    ctx.fillRect(0, h * 0.45, w, h * 0.55);

    WAVE_COLORS.forEach((color, l) => {
      const baseY = h * (0.5 + l * 0.08);
      const amp = 8 + l * 3;
      const freq = 0.008 - l * 0.001;
      const speed = t * (1 + l * 0.3);

      ctx.beginPath();
      ctx.moveTo(0, baseY);
      for (let x = 0; x <= w; x += 4) {
        const y = baseY
          + Math.sin(x * freq + speed) * amp
          + Math.cos(x * freq * 1.7 + speed * 0.8) * (amp * 0.4);
        ctx.lineTo(x, y);
      }
      ctx.lineTo(w, h);
      ctx.lineTo(0, h);
      ctx.closePath();
      ctx.fillStyle = color;
      ctx.fill();
    });
  }

  function drawFoamAndReflection() {
    for (let i = 0; i < 15; i++) {
      const x = (i * 137 + t * 50) % w;
      const y = h * 0.5 + Math.sin(x * 0.008 + t) * 11;
      const alpha = 0.3 + 0.4 * Math.abs(Math.sin(t * 3 + i));
      ctx.fillStyle = `rgba(200,240,255,${alpha})`;
      ctx.beginPath();
      ctx.arc(x, y, 2 + (i % 3) * 0.7, 0, Math.PI * 2);
      ctx.fill();
    }

    const reflection = ctx.createLinearGradient(w * 0.7, h * 0.5, w * 0.8, h);
    reflection.addColorStop(0, 'rgba(255,230,100,0.3)');
    reflection.addColorStop(1, 'rgba(255,230,100,0)');
    ctx.fillStyle = reflection;
    const rw = 30 + Math.sin(t) * 5;
    ctx.fillRect(w * 0.75 - rw / 2, h * 0.5, rw, h * 0.5);
  }

  function frame() {
    t += 0.015;
    drawSky();
    drawWater();
    drawFoamAndReflection();
    requestAnimationFrame(frame);
  }

  resize();
  window.addEventListener('resize', resize);
  frame();
}
