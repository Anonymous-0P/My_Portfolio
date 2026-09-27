import { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from 'lenis';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Security from './components/Security';
import Education from './components/Education';
import Certifications from './components/Certifications';
import Achievements from './components/Achievements';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Loader from './components/Loader';
gsap.registerPlugin(ScrollTrigger);
export default function App(){
 const root=useRef(); const cursor=useRef();
 useLayoutEffect(()=>{
  const mm=gsap.matchMedia(); let lenis; let tick; let pointer; let out;
  const ctx=gsap.context(()=>{
   mm.add('(prefers-reduced-motion: no-preference)',()=>{
    lenis=new Lenis({duration:1.05,anchors:true,smoothWheel:true});lenis.on('scroll',ScrollTrigger.update);tick=time=>lenis.raf(time*1000);gsap.ticker.add(tick);
    const intro=gsap.timeline({defaults:{ease:'power3.out'}});
    intro.to('.loader-progress',{scaleX:1,duration:.55}).to('.loader',{yPercent:-100,duration:.5}).from('.hero-intro',{opacity:0,y:16,stagger:.1,duration:.5},'hero').from('.hero-letter',{yPercent:110,opacity:0,stagger:.035,duration:.75},'hero+=.1').from('.hero-role',{y:25,opacity:0,duration:.6},'hero+=.6').from('.hero-subtitle, .hero-description',{y:15,opacity:0,stagger:.1,duration:.6},'hero+=.8').from('.hero-actions, .hero-socials, .hero-bottom',{y:15,opacity:0,stagger:.1,duration:.6},'hero+=1').from('.hero-visual',{y:25,opacity:0,duration:.9},'hero+=.4').from('.code-line',{opacity:0,x:6,stagger:.08,duration:.4},'hero+=.9');
    gsap.utils.toArray('.reveal').forEach(el=>gsap.from(el,{y:32,opacity:0,duration:.8,ease:'power3.out',scrollTrigger:{trigger:el,start:'top 91%',once:true}}));
    gsap.utils.toArray('.project-card').forEach((el,i)=>gsap.from(el,{x:i%2?28:-28,y:22,opacity:0,duration:.9,scrollTrigger:{trigger:el,start:'top 88%',once:true}}));
    gsap.utils.toArray('.skill-group').forEach(el=>gsap.from(el.querySelectorAll('.skill-badge'),{y:8,opacity:0,stagger:.055,duration:.4,scrollTrigger:{trigger:el,start:'top 85%',once:true}}));
    gsap.from('.timeline-progress',{scaleY:0,transformOrigin:'top',ease:'none',scrollTrigger:{trigger:'.timeline',start:'top 65%',end:'bottom 65%',scrub:.6}});
    gsap.utils.toArray('.counter').forEach(el=>{const n={value:0};gsap.to(n,{value:Number(el.dataset.value),duration:1.8,ease:'power2.out',onUpdate:()=>{el.textContent=Math.round(n.value).toLocaleString('en-US');},scrollTrigger:{trigger:el,start:'top 95%',once:true}});});
    return()=>{lenis?.destroy();gsap.ticker.remove(tick);};
   });
   mm.add('(prefers-reduced-motion: reduce)',()=>{gsap.set('.loader',{display:'none'});document.querySelectorAll('.counter').forEach(el=>el.textContent=Number(el.dataset.value).toLocaleString('en-US'));});
   mm.add('(pointer: fine) and (prefers-reduced-motion: no-preference)',()=>{
    const xTo=gsap.quickTo(cursor.current,'x',{duration:.2,ease:'power3'});const yTo=gsap.quickTo(cursor.current,'y',{duration:.2,ease:'power3'});
    pointer=e=>{xTo(e.clientX);yTo(e.clientY);cursor.current.style.opacity='1';const project=e.target.closest('.preview-link');cursor.current.classList.toggle('is-view',!!project);cursor.current.classList.toggle('is-link',!!e.target.closest('a,button'));cursor.current.textContent=project?'VIEW':'';};out=()=>{cursor.current.style.opacity='0';};window.addEventListener('pointermove',pointer,{passive:true});document.addEventListener('pointerleave',out);
    return()=>{window.removeEventListener('pointermove',pointer);document.removeEventListener('pointerleave',out);};
   });
  },root);
  return()=>{mm.revert();ctx.revert();};
 },[]);
 return <div ref={root}><a className="skip-link" href="#main">Skip to content</a><Loader/><Navbar/><main id="main"><Hero/><div className="capabilities" aria-label="Core technologies"><span>POWERED BY CURIOSITY. BUILT WITH</span>{['Python','Django','React','Flutter','Docker','Linux'].map(t=><span key={t}>{t}<i>✦</i></span>)}</div><About/><Skills/><Experience/><Projects/><Security/><section className="section credentials" aria-label="Education and certifications"><Education/><Certifications/></section><Achievements/><Contact/></main><Footer/><div className="custom-cursor" ref={cursor} aria-hidden="true"/></div>;
}
