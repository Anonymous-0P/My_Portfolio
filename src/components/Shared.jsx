import { useRef } from 'react';
import gsap from 'gsap';
import { ArrowUpRight, Download } from 'lucide-react';
import { profile } from '../data/portfolio';
export function SectionTitle({ number, label, title, description }) { return <div className="section-heading reveal"><div className="eyebrow"><span>{number} /</span> {label}</div><h2>{title}</h2>{description && <p>{description}</p>}</div>; }
export function SkillBadge({ children }) { return <span className="skill-badge">{children}</span>; }
export function MagneticButton({ children, className = '', ...props }) {
 const ref = useRef();
 const move = (e) => { if (!matchMedia('(pointer: fine) and (prefers-reduced-motion: no-preference)').matches) return; const r = ref.current.getBoundingClientRect(); gsap.to(ref.current, { x: (e.clientX-r.left-r.width/2)*0.08, y: (e.clientY-r.top-r.height/2)*0.1, duration: .35, overwrite: true }); };
 return <a ref={ref} className={`button ${className}`} onPointerMove={move} onPointerLeave={() => gsap.to(ref.current, {x:0,y:0,duration:.4,overwrite:true})} {...props}>{children}</a>;
}
export function ResumeButton() { return <MagneticButton href={profile.resume} download className="button-outline">Download Resume <Download size={16}/></MagneticButton>; }
export function ExternalLink({ href, children, ...props }) { return <a href={href} target="_blank" rel="noopener noreferrer" {...props}>{children} <ArrowUpRight size={17}/></a>; }
