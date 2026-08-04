import { useState } from "react";
import axios from "axios";
import {
  ArrowRight,
  Mail,
  MessageCircle,
} from "lucide-react";
import "./Contact.css";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);

    try {
      const response = await axios.post(
        "http://127.0.0.1:8000/contact/",
        formData
      );

      alert(response.data.message);

      setFormData({
        name: "",
        email: "",
        message: "",
      });
    } catch (error) {
      console.error(error);
      alert("Failed to send enquiry.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="contact"
      className="contact"
    >
      <div className="contact-inner">

        {/* LEFT SIDE */}

        <div>

          <span className="eyebrow">
            Get in touch
          </span>

          <h2>
            Let's make your next
            <br />
            <span>move intelligent.</span>
          </h2>

          <p>
            Tell us about the problem you want
            to solve.
            We'll respond with a practical
            path forward.
          </p>

          <div className="contact-orbit">
            <i />
            <i />
            <b>AI</b>
          </div>

          <div className="contact-options">

            {/* EMAIL */}

            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=aigonicinnovpvtltd@gmail.com&su=Inquiry%20from%20AiGONIC%20Website"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Mail size={18} />

              <span>
                Email us
                <br />
                <b>
                  aigonicinnovpvtltd@gmail.com
                </b>
              </span>
            </a>

            {/* WHATSAPP */}

            <a
              href="https://wa.me/918300791899?text=Hello%20AiGONIC%20Team,%0A%0AI%20would%20like%20to%20know%20more%20about%20your%20AI%20services."
              target="_blank"
              rel="noopener noreferrer"
            >
              <MessageCircle size={18} />

              <span>
                Chat with us
                <br />
                <b>
                  Start on WhatsApp
                </b>
              </span>
            </a>

          </div>

        </div>

        {/* RIGHT SIDE */}

        <form
          className="contact-form"
          onSubmit={handleSubmit}
        >

          <div className="form-status">
            <i />
            SECURE AI INTAKE
            <b>READY</b>
          </div>

          <label>
            Your name

            <input
              type="text"
              name="name"
              placeholder="KV COOL"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </label>

          <label>
            Work email

            <input
              type="email"
              name="email"
              placeholder="KVCOOL@company.com"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </label>

          <label>
            How can we help?

            <textarea
              rows="4"
              name="message"
              placeholder="Tell us a little about your goals..."
              value={formData.message}
              onChange={handleChange}
              required
            />
          </label>

          <button
            type="submit"
            className="contact-submit"
            disabled={loading}
          >
            {loading ? (
              "Sending..."
            ) : (
              <>
                Send enquiry
                <ArrowRight size={18} />
              </>
            )}
          </button>

        </form>

      </div>
    </section>
  );
}