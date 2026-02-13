import TiltCard from './TiltCard';

const Process = () => {
    const steps = [
        { title: "Develop", desc: "Building robust, scalable architectures.", color: "var(--accent-primary)" },
        { title: "Deploy", desc: "Seamless CI/CD pipelines & cloud integration.", color: "var(--accent-secondary)" },
        { title: "Test", desc: "Rigorous validation for production readiness.", color: "var(--accent-primary)" },
        { title: "Deliver", desc: "High-impact solutions that drive growth.", color: "var(--accent-secondary)" }
    ];

    return (
        <section className="section">
            <div className="container">
                <h2 style={{ fontSize: '2.5rem', marginBottom: '4rem', textAlign: 'center' }}>My Process</h2>
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
                    gap: '2rem',
                    position: 'relative'
                }}>
                    {/* Connecting Line (Desktop) */}
                    <div style={{
                        position: 'absolute',
                        top: '40px',
                        left: '10%',
                        right: '10%',
                        height: '2px',
                        background: 'linear-gradient(90deg, var(--accent-primary), var(--accent-secondary))',
                        opacity: 0.3,
                        zIndex: 0,
                        display: 'none' // Hidden by default, could show on md+ screens with media query, but let's keep simple for now
                    }} className="process-line" />

                    {steps.map((step, index) => (
                        <TiltCard key={index} style={{
                            padding: '2rem',
                            textAlign: 'center',
                            position: 'relative',
                            zIndex: 1
                        }}>
                            <div style={{
                                width: '80px',
                                height: '80px',
                                margin: '0 auto 1.5rem',
                                borderRadius: '50%',
                                background: `linear-gradient(135deg, ${step.color}22, transparent)`,
                                border: `1px solid ${step.color}`,
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                fontSize: '2rem',
                                boxShadow: `0 0 20px ${step.color}44`
                            }}>
                                {index + 1}
                            </div>
                            <h3 style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>{step.title}</h3>
                            <p style={{ color: 'var(--text-secondary)' }}>{step.desc}</p>
                        </TiltCard>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Process;
