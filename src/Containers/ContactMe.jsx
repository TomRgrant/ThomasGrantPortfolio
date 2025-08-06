import React, { useState } from "react";
import "../Styles/ContactMe.css";

const ContactMe = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const data = {
      name: form.name.value,
      email: form.email.value,
      message: form.message.value,
    };

    try {
      const response = await fetch("https://formspree.io/f/mnnzgyvw", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setSubmitted(true);
      } else {
        alert("Oops! Something went wrong.");
      }
    } catch (error) {
      alert("Oops! Something went wrong.");
      console.error(error);
    }
  };

  if (submitted) {
    return (
      <section className="contact-section" id="contact">
        <div className="contact-content">
          <h2>Contact Me</h2>
          <p
            style={{
              color: "#ffc371",
              fontSize: "1.5rem",
              textAlign: "center",
            }}
          >
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
        <form className="contact-form" onSubmit={handleSubmit}>
          <input type="text" name="name" placeholder="Your Name" required />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea
            name="message"
            placeholder="Your Message"
            rows="5"
            required
          />
          <button type="submit">Send Message</button>
        </form>
      </div>
    </section>
  );
};

export default ContactMe;
