import React, { useState } from "react";
import "../Styles/ContactMe.css";

const ContactMe = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault(); // prevent page refresh
    const form = e.target;

    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams(new FormData(form)).toString(),
    })
      .then(() => setSubmitted(true)) // show success message
      .catch((error) => alert(error));
  };

  if (submitted) {
    return (
      <section className="contact-section" id="contact">
        <div className="contact-content">
          <h2>Contact Me</h2>
          <p style={{ color: "#ffc371", fontSize: "1.5rem", textAlign: "center" }}>
            Thanks for your message! I’ll get back to you soon.
          </p>
        </div>
      </section>
    );
  }

  return (
    <section className="contact-section" id="contact">
      <div className="contact-content">
        <h2>Contact Me</h2>
        <form
          className="contact-form"
          name="contact"
          method="POST"
          data-netlify="true"
          netlify-honeypot="bot-field"
          onSubmit={handleSubmit}
        >
          {/* Hidden inputs required for Netlify */}
          <input type="hidden" name="form-name" value="contact" />
          <input type="hidden" name="bot-field" />

          <input type="text" name="name" placeholder="Your Name" required />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea name="message" placeholder="Your Message" rows="5" required />
          <button type="submit">Send Message</button>
        </form>
      </div>
    </section>
  );
};

export default ContactMe;
