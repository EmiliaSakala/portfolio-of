
import './contact.css';
import { useState } from 'react';
import responsive  from '../../assets/responsive.png';
import { FaWhatsapp, FaLinkedin } from 'react-icons/fa';  

export default function Contact() {
  return (
    <div className="contact">
        <h4>You have a project in mind? Do get in touch with me</h4>

        <a href="https://wa.me/+263717986510" className="whatsapp_float" target="_blank" rel="noopener noreferrer">
            <FaWhatsapp className="whatsapp-icon" />
        </a>
        <a href="https://www.linkedin.com/in/emiliasakala/"><span><FaLinkedin /></span></a>
    </div>
  );
}