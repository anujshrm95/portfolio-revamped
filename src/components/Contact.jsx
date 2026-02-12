
const Contact = () => {
    return (
        <section id="contact" className="section" style={{ paddingBottom: '8rem' }}>
            <div className="container" style={{ textAlign: 'center', maxWidth: '800px' }}>
                <h2 style={{ fontSize: '3rem', marginBottom: '1.5rem' }}>Let's work together</h2>
                <p style={{ fontSize: '1.2rem', color: 'var(--text-secondary)', marginBottom: '3rem' }}>
                    Have a project in mind? I'm currently available for freelance work and open to full-time opportunities.
                    Send me a message and let's discuss your ideas.
                </p>
                <a href="mailto:hello@example.com" className="btn" style={{ fontSize: '1.2rem', padding: '1rem 3rem' }}>
                    Say Hello
                </a>
            </div>
        </section>
    );
};

export default Contact;
