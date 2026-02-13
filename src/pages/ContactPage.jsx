import { useState } from 'react';
import RevealOnScroll from '../components/RevealOnScroll';
import emailjs from '@emailjs/browser';
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';

const ContactPage = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        service: '',
        message: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Placeholder for EmailJS or backend integration
        alert('Thank you! Your message has been sent (Simulation).');
        setFormData({ name: '', email: '', phone: '', service: '', message: '' });
    };

    return (
        <div style={{
            minHeight: '100vh',
            paddingTop: '6rem', // clear navbar
            paddingBottom: '4rem',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center'
        }}>
            <div className="container">
                <RevealOnScroll>
                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: '1fr',
                        gap: '3rem',
                        alignItems: 'start'
                    }} className="contact-grid">

                        {/* LEFT COLUMN: Info & Socials */}
                        <div style={{ textAlign: 'left' }}>
                            <h1 style={{ fontSize: '3.5rem', marginBottom: '1rem', lineHeight: 1 }}>Let's talk <br /><span className="text-gradient">business</span>.</h1>
                            <p style={{ color: 'var(--text-secondary)', fontSize: '1.2rem', marginBottom: '2rem' }}>
                                Have a project in mind? I'm currently available for freelance work and open to full-time opportunities.
                            </p>

                            <div style={{ marginBottom: '3rem' }}>
                                <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Connect</h3>
                                <div style={{ display: 'flex', gap: '1.5rem' }}>
                                    <a href="https://www.linkedin.com/in/anuj-sharma-776b8a179/" target="_blank" rel="noopener noreferrer"
                                        className="social-icon"
                                        style={{ color: 'var(--text-primary)', fontSize: '2rem', transition: 'all 0.3s' }}>
                                        <FaLinkedin />
                                    </a>
                                    <a href="https://github.com/anujshrm95" target="_blank" rel="noopener noreferrer"
                                        className="social-icon"
                                        style={{ color: 'var(--text-primary)', fontSize: '2rem', transition: 'all 0.3s' }}>
                                        <FaGithub />
                                    </a>
                                    <a href="https://mail.google.com/mail/?view=cm&fs=1&to=anuj.pro94@gmail.com" target="_blank" rel="noopener noreferrer"
                                        className="social-icon"
                                        style={{ color: 'var(--text-primary)', fontSize: '2rem', transition: 'all 0.3s' }}>
                                        <FaEnvelope />
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* RIGHT COLUMN: Form */}
                        <div className="glass" style={{
                            padding: '2.5rem',
                            position: 'relative',
                            overflow: 'hidden'
                        }}>
                            <form onSubmit={handleSubmit} style={{ display: 'grid', gap: '1.5rem' }}>
                                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.5rem' }}>
                                    <div className="form-group">
                                        <label style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--text-secondary)' }}>Name</label>
                                        <input
                                            type="text"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            required
                                            style={{
                                                width: '100%',
                                                padding: '0.8rem',
                                                background: 'rgba(255,255,255,0.05)',
                                                border: '1px solid var(--glass-border)',
                                                borderRadius: '8px',
                                                color: 'var(--text-primary)',
                                                fontSize: '1rem',
                                                outline: 'none'
                                            }}
                                            className="input-field"
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--text-secondary)' }}>Email</label>
                                        <input
                                            type="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            required
                                            style={{
                                                width: '100%',
                                                padding: '0.8rem',
                                                background: 'rgba(255,255,255,0.05)',
                                                border: '1px solid var(--glass-border)',
                                                borderRadius: '8px',
                                                color: 'var(--text-primary)',
                                                fontSize: '1rem',
                                                outline: 'none'
                                            }}
                                            className="input-field"
                                        />
                                    </div>
                                </div>

                                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.5rem' }}>
                                    <div className="form-group">
                                        <label style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--text-secondary)' }}>Service</label>
                                        <select
                                            name="service"
                                            value={formData.service}
                                            onChange={handleChange}
                                            required
                                            style={{
                                                width: '100%',
                                                padding: '0.8rem',
                                                background: 'rgba(0,0,0,0.8)',
                                                border: '1px solid var(--glass-border)',
                                                borderRadius: '8px',
                                                color: 'var(--text-primary)',
                                                fontSize: '1rem',
                                                outline: 'none',
                                                cursor: 'pointer'
                                            }}
                                            className="input-field"
                                        >
                                            <option value="">Select...</option>
                                            <option value="web-dev">Web Dev</option>
                                            <option value="ai">AI / ML</option>
                                            <option value="consulting">Consulting</option>
                                        </select>
                                    </div>
                                </div>

                                <div className="form-group">
                                    <label style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--text-secondary)' }}>Message</label>
                                    <textarea
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        required
                                        rows="4"
                                        style={{
                                            width: '100%',
                                            padding: '0.8rem',
                                            background: 'rgba(255,255,255,0.05)',
                                            border: '1px solid var(--glass-border)',
                                            borderRadius: '8px',
                                            color: 'var(--text-primary)',
                                            fontSize: '1rem',
                                            outline: 'none',
                                            resize: 'vertical'
                                        }}
                                        className="input-field"
                                    />
                                </div>

                                <button type="submit" className="btn btn-primary" style={{ width: '100%', padding: '1rem', fontSize: '1.1rem' }}>
                                    Send Message
                                </button>
                            </form>
                        </div>
                    </div>
                </RevealOnScroll>
            </div>

            <style jsx>{`
                .input-field:focus {
                    border-color: var(--accent-primary) !important;
                    box-shadow: 0 0 10px rgba(0, 240, 255, 0.1);
                }
                .social-icon:hover {
                    color: var(--accent-primary) !important;
                    transform: scale(1.2);
                }
                @media (min-width: 768px) {
                    .contact-grid {
                        grid-template-columns: 1fr 1.5fr !important;
                    }
                }
            `}</style>
        </div>
    );
};

export default ContactPage;
