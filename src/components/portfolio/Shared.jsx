import { Component, lazy, Suspense, useEffect, useState } from 'react';
import { ClientOnly, Link, useRouterState } from '@tanstack/react-router';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { ArrowUpRight, ArrowRight, Download, Menu, X, Github, Linkedin, Instagram, Youtube, Mail, Code2, BrainCircuit, Cpu, Cloud, Globe, ExternalLink, Check, Copy, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { profile, projects } from '@/data/portfolio';
import { useHeroScene } from '@/hooks/useHeroScene';
const Scene = lazy(() => import('./HeroScene'));
const Particles = lazy(() => import('./ParticlesBackground'));
const nav = [['Home', '/'], ['About', '/about'], ['Projects', '/projects'], ['Skills', '/skills'], ['Articles', '/articles'], ['Coding Profiles', '/coding-profiles'], ['Contact', '/contact']];
export const icons = { code: Code2, web: Globe, brain: BrainCircuit, cloud: Cloud, cpu: Cpu };
function XIcon() { return <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M18.9 2H22l-6.8 7.8L23.2 22h-6.3l-4.9-6.4L6.4 22H3.2l7.3-8.4L.8 2h6.5l4.4 5.8L18.9 2ZM17.8 20h1.7L6.3 3.9H4.5L17.8 20Z" /></svg>; }
const socialIcons = { LinkedIn: Linkedin, GitHub: Github, Instagram, YouTube: Youtube, X: XIcon };
export function Socials() {
  return <div className="socials">{Object.entries(profile.socials).map(([name, url]) => {
    const Icon = socialIcons[name];
    return url ? <Button key={name} variant="ghost" size="icon" asChild><a href={url} target="_blank" rel="noopener noreferrer" aria-label={name} title={name}><Icon /></a></Button> : <Button key={name} variant="ghost" size="icon" aria-label={`${name} — profile not provided`} title={`${name} — profile not provided`} disabled><Icon /></Button>;
  })}</div>;
}
export function ResumeButton({ compact = false }) {
  const [available, setAvailable] = useState(false);
  useEffect(() => {
    let active = true;
    fetch('/resume/Jishnu_R_Resume.pdf', { method: 'HEAD' }).then(r => { if (active) setAvailable(r.ok && (r.headers.get('content-type') || '').includes('application/pdf')); }).catch(() => {});
    return () => { active = false; };
  }, []);
  const label = compact ? 'Resume' : 'Download Resume';
  return available ? <Button variant="outline" asChild className={compact ? 'nav-resume' : 'resume-button'}><a href="/resume/Jishnu_R_Resume.pdf" download="Jishnu_R_Resume.pdf" target="_blank" rel="noopener noreferrer"><Download />{label}</a></Button> : <Button variant="outline" disabled title="Resume PDF has not been provided" className={compact ? 'nav-resume' : 'resume-button'}><Download />{label}</Button>;
}
export function PortfolioLayout({ children }) {
  const pathname = useRouterState({ select: s => s.location.pathname });
  const [menu, setMenu] = useState(false);
  useEffect(() => { setMenu(false); window.scrollTo({ top: 0, behavior: 'instant' }); }, [pathname]);
  useEffect(() => { if (!menu) return; const close = e => { if (e.key === 'Escape') setMenu(false); }; window.addEventListener('keydown', close); return () => window.removeEventListener('keydown', close); }, [menu]);
  return <div className="portfolio"><a href="#main-content" className="skip-link">Skip to content</a>
    <header className="site-header"><div className="header-inner"><Link className="wordmark" to="/" aria-label="Jishnu R. home">jishnu<span>.</span><span className="wordmark-slash">/</span></Link><nav className="desktop-nav" aria-label="Main navigation">{nav.map(([name, path]) => <Link key={path} to={path} activeProps={{ className: 'active' }} activeOptions={{ exact: true }}>{name}</Link>)}</nav><div className="header-actions"><ResumeButton compact /><Button variant="ghost" size="icon" className="mobile-menu-button" aria-label={menu ? 'Close navigation' : 'Open navigation'} aria-expanded={menu} onClick={() => setMenu(!menu)}>{menu ? <X /> : <Menu />}</Button></div></div>
    <AnimatePresence>{menu && <motion.nav initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }} className="mobile-nav" aria-label="Mobile navigation">{nav.map(([name, path]) => <Link key={path} to={path} activeProps={{ className: 'active' }} onClick={() => setMenu(false)}>{name}<ArrowUpRight size={16} /></Link>)}</motion.nav>}</AnimatePresence></header>
    <main id="main-content" tabIndex={-1}>{children}</main><footer className="site-footer"><div className="footer-top"><Link className="wordmark" to="/">jishnu<span>.</span><span className="wordmark-slash">/</span></Link><p>Curiosity drives me. Technology empowers me.</p><Socials /></div><div className="footer-bottom"><span>© 2026 Jishnu R. All rights reserved.</span><span>Built with purpose. Always evolving.<span className="tiny-dot" /></span></div></footer>
  </div>;
}
export function Reveal({ children, className = '', delay = 0 }) {
  const reduced = useReducedMotion();
  return <motion.div className={className} initial={reduced ? false : { opacity: 0, y: 22 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.1 }} transition={{ duration: 0.6, delay }}>{children}</motion.div>;
}
export function PageFrame({ children, variant = 'fade' }) {
  const reduced = useReducedMotion();
  const states = { fade: { opacity: 0 }, slide: { opacity: 0, x: 24 }, zoom: { opacity: 0, scale: 0.97 }, rise: { opacity: 0, y: 24 }, soft: { opacity: 0, y: 12 } };
  return <AnimatePresence mode="wait"><motion.div initial={reduced ? false : states[variant]} animate={{ opacity: 1, x: 0, y: 0, scale: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.5 }}>{children}</motion.div></AnimatePresence>;
}
export function PageHeading({ eyebrow, title, accent, description }) {
  return <Reveal className="page-heading"><div className="eyebrow"><span />{eyebrow}</div><h1>{title} <span className="gradient-text">{accent}</span></h1><p>{description}</p></Reveal>;
}
class SceneBoundary extends Component {
  state = { error: false };
  static getDerivedStateFromError() { return { error: true }; }
  render() { return this.state.error ? <SceneFallback /> : this.props.children; }
}
function SceneFallback() { return <div className="scene-fallback" role="img" aria-label="Neural-network geometric sculpture"><div className="fallback-ring ring-one" /><div className="fallback-ring ring-two" /><div className="fallback-core"><BrainCircuit size={90} strokeWidth={0.7} /></div></div>; }
export function HeroVisual() {
  const enabled = useHeroScene();
  return <div className="hero-visual"><div className="scene-glow" /><div className="scene-caption top-caption"><span className="tiny-dot" />SYSTEM ONLINE <span>01 / NEURAL CORE</span></div><SceneBoundary>{enabled ? <Suspense fallback={<SceneFallback />}><Scene /></Suspense> : <SceneFallback />}</SceneBoundary><div className="scene-label-overlay"><div className="scene-label"><span className="scene-label-dot" />neural_network.py</div><div className="scene-label cyan-label">&lt; intelligence /&gt;</div></div><div className="scene-caption bottom-caption"><span>AI × CODE × CREATIVITY</span><span className="scene-coordinate">LEARN / BUILD / EVOLVE</span></div></div>;
}
export function HeroParticles() { return <ClientOnly fallback={null}><Suspense fallback={null}><Particles /></Suspense></ClientOnly>; }
export function CTA({ title = "Let’s build something", accent = 'great.', text = 'An interesting idea. A meaningful problem. An opportunity to collaborate.' }) {
  return <section className="cta-section"><Reveal className="cta-inner"><div className="eyebrow"><span />THE NEXT CHAPTER</div><h2>{title} <span className="gradient-text">{accent}</span></h2><p>{text}</p><Button asChild variant="premium" size="lg"><Link to="/contact">Let’s Talk <ArrowUpRight /></Link></Button><div className="cta-code">&lt; together, we build /&gt;</div></Reveal></section>;
}
export function ProjectArt({ kind }) {
  return <div className={`project-art art-${kind}`} aria-hidden="true"><div className="art-grid" />
    {kind === 'compliance' && <><div className="art-window"><div className="art-window-top"><i /><i /><i /><span>compliance.engine</span></div><div className="art-code"><span>class</span> ComplianceAgent:<br />&nbsp; rules = <span>load_policy()</span><br />&nbsp; <span>def</span> monitor(self):<br />&nbsp;&nbsp; return <b>analyze(stream)</b></div><div className="art-status"><span className="tiny-dot" />POLICY ENGINE ACTIVE <Check size={12} /></div></div><div className="art-floating"><BrainCircuit size={24} /></div></>}
    {kind === 'stocks' && <><div className="chart-label"><span>TIME-SERIES ANALYSIS</span><span className="chart-pill">PYTHON</span></div><svg className="stock-chart" viewBox="0 0 400 140"><path className="chart-area" d="M0 128 25 115 46 121 70 89 96 101 118 85 142 94 165 67 189 76 212 43 236 55 260 37 283 51 309 22 332 34 356 12 380 23 400 2V140H0Z" /><path className="chart-line" d="M0 128 25 115 46 121 70 89 96 101 118 85 142 94 165 67 189 76 212 43 236 55 260 37 283 51 309 22 332 34 356 12 380 23 400 2" /></svg><div className="chart-axis"><span>OBSERVED DATA</span><span>PREDICTION MODEL <ArrowUpRight size={12} /></span></div></>}
    {kind === 'tracking' && <><svg className="tracking-map" viewBox="0 0 400 200"><path className="map-street" d="M0 40H400M0 100H400M0 160H400M70 0V200M170 0V200M280 0V200M350 0V200" /><path className="map-route" d="M30 160H70V100H170V40H280V100H360" /><circle cx="170" cy="60" r="16" className="map-halo" /><circle cx="170" cy="60" r="5" className="map-point" /></svg><div className="map-chip"><Cpu size={16} />GPS + GSM<span className="tiny-dot" /></div><span className="map-label">CONNECTED TRANSPORT</span></>}
    {kind === 'career' && <><div className="career-node node-top"><BrainCircuit size={28} /><span>CAREER AI</span></div><div className="career-lines" /><div className="career-options"><span><Code2 size={14} />Developer</span><span><Cloud size={14} />Cloud</span><span><BrainCircuit size={14} />AI & Data</span></div></>}
  </div>;
}
export function ProjectCard({ project, index, onDetails }) {
  const reduced = useReducedMotion();
  function tilt(e) { if (reduced || e.pointerType === 'touch') return; const rect = e.currentTarget.getBoundingClientRect(); e.currentTarget.style.setProperty('--tilt-x', `${-(e.clientY - rect.top - rect.height / 2) / 60}deg`); e.currentTarget.style.setProperty('--tilt-y', `${(e.clientX - rect.left - rect.width / 2) / 60}deg`); }
  function reset(e) { e.currentTarget.style.setProperty('--tilt-x', '0deg'); e.currentTarget.style.setProperty('--tilt-y', '0deg'); }
  return <Reveal delay={index * 0.06}><article className="project-card" onPointerMove={tilt} onPointerLeave={reset}><ProjectArt kind={project.visual} /><div className="project-body"><div className="project-kicker"><span>{project.type}</span><span>0{index + 1}<ArrowUpRight size={13} /></span></div><h3>{project.name}</h3><p>{project.description}</p><div className="technology-tags">{project.technologies.map(t => <span key={t}>{t}</span>)}</div><div className="project-actions"><Button variant="link" onClick={() => onDetails(project)}>View Details <ArrowUpRight /></Button><div>{project.github ? <Button variant="ghost" size="icon" asChild><a href={project.github} aria-label="GitHub repository" target="_blank" rel="noreferrer"><Github /></a></Button> : <span title="Repository URL not provided" className="unavailable-icon"><Github size={16} /></span>}{project.demo && <Button variant="ghost" size="icon" asChild><a href={project.demo} target="_blank" rel="noreferrer" aria-label="Live demo"><ExternalLink /></a></Button>}</div></div></div></article></Reveal>;
}
export function ProjectDialog({ project, onClose }) {
  useEffect(() => { if (!project) return; const previous = document.activeElement; const close = e => { if (e.key === 'Escape') onClose(); }; window.addEventListener('keydown', close); document.getElementById('close-project')?.focus(); return () => { window.removeEventListener('keydown', close); previous?.focus(); }; }, [project, onClose]);
  return <AnimatePresence>{project && <motion.div className="modal-backdrop" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={onClose}><motion.section role="dialog" aria-modal="true" aria-labelledby="project-dialog-title" className="project-dialog" initial={{ y: 20 }} animate={{ y: 0 }} onClick={e => e.stopPropagation()} onKeyDown={e => { if (e.key === 'Tab') { e.preventDefault(); document.getElementById('close-project')?.focus(); } }}><Button id="close-project" className="dialog-close" variant="ghost" size="icon" aria-label="Close project details" onClick={onClose}><X /></Button><ProjectArt kind={project.visual} /><div className="dialog-content"><div className="eyebrow">{project.type}</div><h2 id="project-dialog-title">{project.name}</h2><p>{project.description}</p><div className="technology-tags">{project.technologies.map(t => <span key={t}>{t}</span>)}</div><p className="availability-note">Repository and live demo links have not been shared yet.</p></div></motion.section></motion.div>}</AnimatePresence>;
}
export function ProjectGrid({ items = projects }) {
  const [selected, setSelected] = useState(null);
  return <><div className="projects-grid">{items.map((p, i) => <ProjectCard key={p.id} project={p} index={i} onDetails={setSelected} />)}</div><ProjectDialog project={selected} onClose={() => setSelected(null)} /></>;
}
