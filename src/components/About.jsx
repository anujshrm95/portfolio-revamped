
const About = () => {
    return (
        <section id="about" className="section">
            <div className="container">
                <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '4rem' }}>

                    {/* Stats Row */}
                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                        gap: '2rem',
                        marginBottom: '2rem'
                    }}>
                        {[
                            { number: "100+", label: "Projects Delivered" },
                            { number: "3+", label: "Years Experience" },
                            { number: "100%", label: "Client Satisfaction" }
                        ].map((stat, index) => (
                            <div key={index} className="glass" style={{ padding: '2rem', textAlign: 'center', borderColor: 'var(--accent-primary)' }}>
                                <h3 className="text-gradient" style={{ fontSize: '3.5rem', marginBottom: '0.5rem', fontFamily: 'var(--font-mono)' }}>{stat.number}</h3>
                                <p style={{ color: 'var(--text-secondary)', textTransform: 'uppercase', letterSpacing: '1px', fontSize: '0.9rem' }}>{stat.label}</p>
                            </div>
                        ))}
                    </div>

                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                        gap: '4rem',
                        alignItems: 'start'
                    }}>
                        <div>
                            <h2 style={{ fontSize: '2.5rem', marginBottom: '2rem' }}>Bridging <span className="text-gradient">AI & Design</span></h2>
                            <p style={{ color: 'var(--text-secondary)', marginBottom: '1.5rem', fontSize: '1.1rem' }}>
                                Based in <b>Noida</b>, I am a Consultant Data Scientist and Product Developer who engineers intelligent digital ecosystems. I specialize in deploying complex AI models, Computer Vision systems, and full-scale web products.
                            </p>
                            <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem' }}>
                                From predicting market trends with Machine Learning to designing stunning creative assets, I deliver end-to-end solutions. My goal is simple: solve hard problems with code and make them look beautiful.
                            </p>
                        </div>

                        {/* We will move the detailed skills to the separate Skills component,
                            so here we can just have a button or a brief "Core Focus" list */}
                        <div className="glass" style={{ padding: '2.5rem' }}>
                            <h3 style={{ fontSize: '1.5rem', marginBottom: '1.5rem' }}>Core Focus</h3>
                            <ul style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                                {[
                                    "Generative AI & LLMs",
                                    "Computer Vision & ML",
                                    "Product Development",
                                    "Creative Design & Frontend"
                                ].map((item, i) => (
                                    <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '1rem', color: 'var(--text-primary)' }}>
                                        <span style={{ color: 'var(--accent-primary)' }}>▹</span> {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
