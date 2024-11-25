import React from "react";
import './Contact.css';

export default function ContactForm() {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "ca83be27-b432-4f99-b0bb-d9bf0af0cc97");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <div className="contact-container">
      <div className="contact-form">
        <h2>Contact Us</h2>
        <form onSubmit={onSubmit}>
          <label htmlFor="name">Name:</label>
          <input type="text" name="name" id="name" required />
          
          <label htmlFor="email">Email:</label>
          <input type="email" name="email" id="email" required />
          
          <label htmlFor="message">Message:</label>
          <textarea name="message" id="message" required></textarea>

          <button type="submit" className="submit-button">Submit Form</button>
        </form>
        <span className="result-message">{result}</span>
      </div>

      {/* Google Maps Iframe */}
      <div className="map-container">
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3877.2406550851624!2d79.4328689!3d13.643119800000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTPCsDM4JzM1LjIiTiA3OcKwMjUnNTguMyJF!5e0!3m2!1sen!2sin!4v1730532591081!5m2!1sen!2sin" 
          width="600" 
          height="450" 
          style={{ border: 0 }} 
          allowFullScreen 
          loading="lazy" 
          referrerPolicy="no-referrer-when-downgrade">
        </iframe>
      </div>
    </div>
  );
}
