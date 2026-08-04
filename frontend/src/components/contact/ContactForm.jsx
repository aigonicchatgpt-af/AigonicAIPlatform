import { useState } from "react";
import axios from "axios";
import "./Contact.css";

const API_URL = import.meta.env.VITE_API_URL;

function ContactForm() {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {

    e.preventDefault();

    setLoading(true);

    try {

      const response = await axios.post(
        `${API_URL}/contact/`,
        formData
      );

      alert(response.data.message);

      setFormData({
        name: "",
        email: "",
        message: ""
      });

    } catch (error) {

      console.error(error);

      alert(
        error.response?.data?.detail ||
        "Failed to send enquiry."
      );

    } finally {

      setLoading(false);

    }

  };

  return (
    <section className="contact-section">

      <div className="container">

        <h2>Contact Us</h2>

        <p>
          Let's build the future of AI together.
        </p>

        <form
          className="contact-form"
          onSubmit={handleSubmit}
        >

          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Work Email"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <textarea
            rows="6"
            name="message"
            placeholder="How can we help?"
            value={formData.message}
            onChange={handleChange}
            required
          />

          <button
            type="submit"
            className="primary-btn"
            disabled={loading}
          >
            {loading ? "Sending..." : "Send Enquiry"}
          </button>

        </form>

      </div>

    </section>
  );
}

export default ContactForm;