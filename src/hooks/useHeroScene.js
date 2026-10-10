import { useEffect, useState } from 'react';
export function useHeroScene() {
  const [enabled, setEnabled] = useState(false);
  useEffect(() => {
    const motion = window.matchMedia('(prefers-reduced-motion: reduce)');
    function check() {
      if (motion.matches) { setEnabled(false); return; }
      try { const canvas = document.createElement('canvas'); const gl = canvas.getContext('webgl2') || canvas.getContext('webgl'); setEnabled(Boolean(gl)); gl?.getExtension('WEBGL_lose_context')?.loseContext(); } catch { setEnabled(false); }
    }
    check(); motion.addEventListener('change', check);
    return () => motion.removeEventListener('change', check);
  }, []);
  return enabled;
}
