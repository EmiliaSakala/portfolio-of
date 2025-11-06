
import './contact.css';
import { useState } from 'react';
import responsive  from '../../assets/responsive.png';

export default function Contact() {
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);
    formData.append("access_key", "2f312c1c-1b8f-48c3-92a3-feead09ed4fe");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();
    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      setResult("Error");
    }
  };

  return (
    <div className="container">
        <div className="form">
            <p>You have a project in mind? Do get in touch with me</p>
            <form onSubmit={onSubmit}>
            <label htmlFor="name">Name</label>
            <input type="text" name="name" required/>

            <label htmlFor="email">Email</label>
            <input type="email" name="email" required/>

            <label htmlFor="message">Message</label>
            <textarea name="message" required></textarea>

            <button type="submit" className="send">Submit Form</button>
            <span>{result}</span>
            </form>
        </div>

        <div className="text">
            <img src={responsive} alt="" />
        </div>
    </div>
  );
}