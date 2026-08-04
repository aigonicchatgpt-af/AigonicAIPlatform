import { ArrowUpRight, BriefcaseBusiness, Clock3, MapPin } from "lucide-react";
import "./Careers.css";

const roles = [
  ["AI / ML Engineer", "Engineering", "Full-time"],
  ["Generative AI Intern", "Innovation Lab", "Internship"],
  ["AI Solutions Consultant", "Client Success", "Full-time"],
];

export default function CareersSection() {
  return <section id="careers" className="careers"><div className="careers-inner">
    <div className="careers-intro"><span className="eyebrow">Careers at Aigonic</span><h2>Do your best work<br/>at the edge of AI.</h2><p>Join a multidisciplinary team building useful, responsible intelligence for ambitious organizations.</p><div className="talent-status"><i /> TALENT NODE ACTIVE <b>03 OPEN ROLES</b></div><a href="https://mail.google.com/mail/?view=cm&fs=1&to=aigonicinnovpvtltd@gmail.com&su=Inquiry%20from%20AiGONIC%20Website" className="careers-mail" target="_blank" rel="noopener noreferrer">aigonicinnovpvtltd@gmail.com <ArrowUpRight size={17}/></a></div>
    <div className="role-list">{roles.map(([title, team, type]) => <a className="role-card" href="https://mail.google.com/mail/?view=cm&fs=1&to=aigonicinnovpvtltd@gmail.com&su=Inquiry%20from%20AiGONIC%20Website" target="_blank" rel="noopener noreferrer" key={title}><span className="role-icon"><BriefcaseBusiness size={20}/></span><span className="role-main"><b>{title}</b><small><MapPin size={13}/> India · {team}</small></span><span className="role-type"><Clock3 size={13}/>{type}</span><ArrowUpRight className="role-arrow" size={19}/></a>)}</div>
  </div></section>;
}
