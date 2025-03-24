import React, { useRef, useState } from 'react'
import emailjs from '@emailjs/browser';
import { serviceId, templateId,publicKey } from '../constants/index';

const Contact = () => {
    const formRef = useRef();

    const [loading, setLoading] = useState(false);
    
    const [form, setForm] = useState({
        name: '',
        email: '',
        message: ''
    })

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm({ ...form, [name]: value });
    };
    const handleSubmit = async(e) => {
        e.preventDefault();

        try {
            setLoading(true); 
        
            await emailjs.send(
                serviceId, 
                templateId, 
                {
                    name: form.name,
                    email: form.email,
                    to_email: "sangamsh04@gmail.com",
                    message: form.message,
                },
                publicKey
            );
        
            setLoading(false); 
            alert("Ohh yeah! Email sent successfully!");
            setForm({name: '', email: '', message: ''});

        } catch (error) {
            setLoading(false); 
            alert("Nahh lil bro, something went wrong!");
            console.error("Email sending failed:", error);
        }

    };

  return (
    <section className="c-space my-20" id="contact">

      <div className="relative min-h-screen flex items-center justify-center flex-col">
        <img 
            src="/assets/terminal.png" 
            alt="terminal-bg" 
            className="absolute inset-0 min-h-screen hidden lg:block" 
        />


        <div className="contact-container pt-15">
          <h3 className="head-text">Let's talk</h3>
          <p className="text-lg text-gray-400 mt-3">
            Whether you’re looking to build a new website, improve your existing platform, or bring a unique project to
            life, I’m here to help.
          </p>

          <form ref={formRef} onSubmit={handleSubmit} className="mt-12 flex flex-col space-y-7">
            <label className="space-y-3">
              <span className="field-label">Full Name</span>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                required
                className="field-input"
                placeholder="ex., Raj"
              />
            </label>

            <label className="space-y-3">
              <span className="field-label">Email address</span>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                required
                className="field-input"
                placeholder="ex., Raj@gmail.com"
              />
            </label>

            <label className="space-y-3">
              <span className="field-label">Your message</span>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                required
                rows={5}
                className="field-input"
                placeholder="Share your thoughts or inquiries..."
              />
            </label>

            <button className="field-btn" type="submit" disabled={loading}>
              {loading ? 'Sending...' : 'Send Message'}

              <img src="/assets/arrow-up.png" alt="arrow-up" className="field-btn_arrow" />
            </button>
          </form>
        </div>
      </div>
    </section>


  )
}

export default Contact
