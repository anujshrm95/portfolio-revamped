import RevealOnScroll from './RevealOnScroll';
import TiltCard from './TiltCard';

const Services = () => {
    const services = [
        {
            title: "AI Solutions",
            desc: "Custom Artificial Intelligence models tailored to automate and optimize your business processes.",
            icon: "🤖"
        },
        {
            title: "Product Development",
            desc: "End-to-end product lifecycle management from ideation to deployment.",
            icon: "🚀"
        },
        {
            title: "Machine Learning",
            desc: "Predictive analytics and data-driven insights using advanced ML algorithms.",
            icon: "📊"
        },
        {
            title: "Computer Vision",
            desc: "Image processing and object detection systems for visual data analysis.",
            icon: "👁️"
        },
        {
            title: "Frontend Development",
            desc: "Responsive websites and e-commerce platforms built with modern frameworks.",
            icon: "💻"
        },
        {
            title: "Creative Design",
            desc: "Engaging posters, posts, and illustrations designed with Canva and modern tools.",
            icon: "🎨"
        }
    ];

    return (
        <section id="services" className="section">
            <div className="container">
                <RevealOnScroll>
                    <h2 style={{ fontSize: '2.5rem', marginBottom: '3rem', textAlign: 'center' }}>What I Offer</h2>
                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                        gap: '2rem'
                    }}>
                        {services.map((service, index) => (
                            <TiltCard key={index} className="glass" style={{
                                padding: '2rem',
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'flex-start',
                                cursor: 'default',
                                borderTop: '2px solid transparent'
                            }}>
                                <div style={{
                                    fontSize: '3rem',
                                    marginBottom: '1rem',
                                    background: 'var(--surface-light)',
                                    width: '70px',
                                    height: '70px',
                                    borderRadius: '15px',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    boxShadow: 'inset 0 0 20px rgba(0,0,0,0.5)'
                                }}>
                                    {service.icon}
                                </div>
                                <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>{service.title}</h3>
                                <p style={{ color: 'var(--text-secondary)' }}>{service.desc}</p>
                            </TiltCard>
                        ))}
                    </div>
                </RevealOnScroll>
            </div>
        </section>
    );
};

export default Services;
