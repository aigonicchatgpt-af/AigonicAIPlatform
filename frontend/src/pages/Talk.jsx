import { ArrowLeft, ArrowRight, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import "../components/common/Auth.css";

export default function Talk() {
  return <main className="talk-page"><div className="talk-shell">
    <Link className="back-home" to="/"><ArrowLeft size={17}/> Back to home</Link>
    <div className="talk-grid"><div className="talk-copy"><span className="eyebrow"><Sparkles size={14}/> Start a conversation</span><h1>Tell us what you want to build.</h1><p>Share a little about your goals. Our team will get back to you with the right next step.</p></div>
      <form className="talk-form" onSubmit={e => e.preventDefault()}><label>Name<input required placeholder="Your name"/></label><label>Work email<input type="email" required placeholder="you@company.com"/></label><label>What are you exploring?<textarea rows="4" placeholder="AI strategy, automation, training..."/></label><button>Send message <ArrowRight size={18}/></button></form>
    </div>
  </div></main>;
}
