import { useEffect, useState } from 'react';
import Particles, { initParticlesEngine } from '@tsparticles/react';
import { loadSlim } from '@tsparticles/slim';
export default function ParticlesBackground() {
  const [options, setOptions] = useState(null);
  useEffect(() => {
    let active = true;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    initParticlesEngine(async engine => { await loadSlim(engine); }).then(() => {
      if (!active) return;
      const style = getComputedStyle(document.documentElement);
      setOptions({ fullScreen: false, fpsLimit: 30, detectRetina: false, background: { color: { value: 'transparent' } }, particles: { number: { value: window.innerWidth < 768 ? 18 : 45 }, color: { value: style.getPropertyValue('--scene-wire').trim() }, links: { enable: true, distance: 130, color: style.getPropertyValue('--scene-wire').trim(), opacity: 0.1, width: 1 }, opacity: { value: { min: 0.1, max: 0.4 } }, size: { value: { min: 1, max: 2 } }, move: { enable: true, speed: 0.25 } }, interactivity: { events: { onHover: { enable: true, mode: 'grab' }, onClick: { enable: true, mode: 'push' } }, modes: { grab: { distance: 150, links: { opacity: 0.3 } }, push: { quantity: 2 } } } });
    }).catch(() => {});
    return () => { active = false; };
  }, []);
  return options ? <Particles id="portfolio-particles" className="particles-background" options={options} /> : null;
}
