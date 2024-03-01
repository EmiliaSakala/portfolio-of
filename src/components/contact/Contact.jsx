// import React from 'react';
// import { useState } from 'react';
import emailjs from 'emailjs-com'
import './contact.css'
import responsive from '../../img/responsive.png';


// const Contact = () => {

//     const [name, setName] = useState('');
//     const [email, setEmail] = useState('');
//     const [message, setMessage] = useState('');
//     const [emailSent, setEmailSent] = useState(false);

//     const submit = () => {
//         if (name && email && message) {
//             const serviceId = '12345678';
//             const templateId = 'template1';
//             const userId = 'ZRN0v631dWYeoIltu';
//             const templateParams = {
//                 name,
//                 email,
//                 message
//             };

//             emailjs.send(serviceId, templateId,templateParams,userId)
//             .then(response => console.log(response))
//             .then(error => console.log(error));

//             setName('');
//             setEmail('');
//             setMessage('');
//             setEmailSent(true);
//         } else {
//             alert('Please fill in all fields.');
//         }
//     }

//     return (
//         <div className="contact-form">
//             <input type="text" placeholder="Your name" value={name} onChange={e => setName(e.target.value)}/>
//             <input type="email" placeholder="Your email" value={email} onChange={e => setEmail(e.target.value)}/>
//             <textarea name="" placeholder="Your message" value={message} onChange={e => setMessage(e.target.value)}></textarea>
//             <button onClick={submit}>Send Message</button>

//             <span className={emailSent ? 'visible' : null}>Thank you for getting in touch with me, i'll get back to you shortly!</span>

//         </div>
//     );
// }

// export default Contact;

import React, { useRef } from 'react';


const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('12345678', 'template1', form.current, 'ZRN0v631dWYeoIltu')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    };

    return (
        <div className="container">
            <div className="form">
                <p>You have a project in mind? Do get in touch with me.</p>
                <form ref={form} onSubmit={sendEmail}>
                    <label>Name</label>
                    <input type="text" name="user_name" />
                    <label>Email</label>
                    <input type="email" name="user_email" />
                    <label>Message</label>
                    <textarea name="message" />
                    <input type="submit" value="Send" className='send' />
                </form>
            </div>
            <div className="text">
                <img src={responsive} alt="" />
            </div>
        </div>
    );
};

export default Contact;
