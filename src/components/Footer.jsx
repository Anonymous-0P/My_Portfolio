import { ArrowUp } from 'lucide-react';
import { profile } from '../data/portfolio';
export default function Footer(){return <footer><a className="logo" href="#home">PK<span>.</span></a><span>© {new Date().getFullYear()} {profile.name}</span><span className="footer-credit">Designed &amp; Developed by {profile.name}</span><a className="back-top" href="#home">Back to top <ArrowUp size={15}/></a></footer>}
