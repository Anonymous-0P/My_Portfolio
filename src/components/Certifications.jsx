import { Award, ArrowUpRight } from 'lucide-react';
import { certifications } from '../data/portfolio';
export default function Certifications(){return <div className="certifications-block"><div className="eyebrow reveal">ALWAYS LEARNING / CERTIFICATIONS</div><div className="certification-grid">{certifications.map((cert,i)=><article className="certification-card reveal" key={cert}><Award size={20}/><div><small>0{i+1} / CERTIFICATION</small><h3>{cert}</h3></div><ArrowUpRight size={14}/></article>)}</div></div>}
