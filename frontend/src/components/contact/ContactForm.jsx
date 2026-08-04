import { useState } from "react";
import axios from "axios";
import "./Contact.css";

function ContactForm() {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
  e.preventDefault();

  console.log("Submit button clicked");
  console.log(formData);

  try {

    const response = await axios.post(
      "http://127.0.0.1:8000/contact/",
      formData
    );

    console.log("Response:", response.data);

    alert(response.data.message);

  } catch (error) {

    console.log("Axios Error:", error);

    if (error.response) {
      console.log(error.response.data);
    }

    alert("Failed to send enquiry.");

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
          ></textarea>

          <button
            type="submit"
            className="primary-btn"
          >
            Send Enquiry
          </button>

        </form>

      </div>

    </section>
  );
}

export default ContactForm;