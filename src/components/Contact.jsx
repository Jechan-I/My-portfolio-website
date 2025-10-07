import React, { useState } from 'react';
import '../styles/Contact.css';

const Contact = () => {
    const [form, setForm] = useState({ name: '', email: '', message: '' });
    const [status, setStatus] = useState(null); // null | 'sending' | 'sent' | 'error'

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setStatus('sending');

        // Basic client-side validation
        if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
            setStatus('error');
            return;
        }

        // Simple behavior: open user's mail client with prefilled content.
        const recipient = 'jeremiahntabuchunguka@gmail.com';
        const subject = `Contact from ${form.name}`;
        const body = `${form.message}\n\n---\nFrom: ${form.name} <${form.email}>`;
        const mailto = `mailto:${encodeURIComponent(recipient)}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

        // Try to open mail client. If popup blocked, still set status to sent for UX.
        try {
            window.location.href = mailto;
            setStatus('sent');
            setForm({ name: '', email: '', message: '' });
        } catch (err) {
            console.error('Failed to open mail client', err);
            setStatus('error');
        }
    };

    return (
        <section id="contact" className="container">
            <h2>Get In Touch</h2>
            <p>
                Have a question or want to work together? Leave your details below, and I'll get back to you as soon as possible.
            </p>

            <form className="contact-form" onSubmit={handleSubmit} noValidate>
                <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        required
                        aria-required="true"
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        required
                        aria-required="true"
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="message">Message</label>
                    <textarea
                        id="message"
                        name="message"
                        value={form.message}
                        onChange={handleChange}
                        required
                        aria-required="true"
                        rows={6}
                    />
                </div>

                <button type="submit" className="submit-button" disabled={status === 'sending'}>
                    {status === 'sending' ? 'Sending...' : 'Send Message'}
                </button>

                {status === 'sent' && <p className="contact-success">Thanks — your message action was triggered.</p>}
                {status === 'error' && <p className="contact-error">Please complete all fields or try again.</p>}
            </form>
        </section>
    );
};

export default Contact;