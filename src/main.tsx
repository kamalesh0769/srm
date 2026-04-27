import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

// ── Custom cursor ──────────────────────────────────────────
const dot = document.createElement('div');
dot.id = 'cursor-dot';
const ring = document.createElement('div');
ring.id = 'cursor-ring';
document.body.appendChild(dot);
document.body.appendChild(ring);

let dotX = 0, dotY = 0, ringX = 0, ringY = 0;
let raf: number;

document.addEventListener('mousemove', (e) => {
  dotX = e.clientX; dotY = e.clientY;
  dot.style.left = dotX + 'px';
  dot.style.top = dotY + 'px';
  // ring follows with lerp
  if (!raf) {
    const lerp = () => {
      ringX += (dotX - ringX) * 0.12;
      ringY += (dotY - ringY) * 0.12;
      ring.style.left = ringX + 'px';
      ring.style.top = ringY + 'px';
      const dist = Math.hypot(dotX - ringX, dotY - ringY);
      if (dist > 0.5) raf = requestAnimationFrame(lerp);
      else raf = 0;
    };
    raf = requestAnimationFrame(lerp);
  }
});

document.addEventListener('mouseover', (e) => {
  const t = e.target as HTMLElement;
  if (t.closest('a, button, [role="button"]')) {
    document.body.classList.add('cursor-hover');
  }
});
document.addEventListener('mouseout', () => {
  document.body.classList.remove('cursor-hover');
});

// ── Scroll progress bar ────────────────────────────────────
const bar = document.createElement('div');
bar.id = 'scroll-progress';
document.body.appendChild(bar);
window.addEventListener('scroll', () => {
  const s = document.documentElement;
  const pct = (s.scrollTop / (s.scrollHeight - s.clientHeight)) * 100;
  bar.style.width = pct + '%';
}, { passive: true });

createRoot(document.getElementById("root")!).render(<App />);
