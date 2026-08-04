import { useState } from "react";
import "./Chat.css";

function CareerApplication({ onSubmit, onCancel, submitting = false }) {
  const [form, setForm] = useState({ name: "", email: "", mobile: "", experience: "", role: "" });
  function updateField(event) {
    const { name, value } = event.target;
    setForm((current) => ({ ...current, [name]: value }));
  }
  function handleSubmit(event) { event.preventDefault(); onSubmit(form); }
  return (
    <form className="career-application" onSubmit={handleSubmit}>
      <div className="career-application__heading">
        <div className="career-application__icon">💼</div>
        <div><p className="career-application__eyebrow">CAREERS</p><h3>Start your application</h3><span>Share a few details and upload your resume next.</span></div>
        <button type="button" className="career-application__close" onClick={onCancel} aria-label="Close application form">×</button>
      </div>
      <div className="career-application__fields">
        <label>Full name<input name="name" value={form.name} onChange={updateField} required /></label>
        <label>Email address<input name="email" type="email" value={form.email} onChange={updateField} required /></label>
        <label>Mobile number<input name="mobile" value={form.mobile} onChange={updateField} required /></label>
        <label>Experience<select name="experience" value={form.experience} onChange={updateField} required><option value="">Select experience</option><option value="Fresher">Fresher</option><option value="1–3 years">1–3 years</option><option value="3–5 years">3–5 years</option><option value="5+ years">5+ years</option></select></label>
        <label className="career-application__role">Role you are applying for<input name="role" value={form.role} onChange={updateField} required /></label>
      </div>
      <button className="career-application__submit" type="submit" disabled={submitting}>{submitting ? "Saving details…" : "Continue to resume upload →"}</button>
    </form>
  );
}
export default CareerApplication;
