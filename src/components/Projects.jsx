import RevealOnScroll from './RevealOnScroll';
import TiltCard from './TiltCard';

const Projects = () => {
    const projects = [
        {
            title: "DataDiscover.ai",
            category: "Gen AI / SaaS",
            desc: "Advanced data discovery platform leveraging AI to uncover actionable insights from complex datasets.",
            tags: ["React", "Python", "AI", "Data Viz"],
            link: "https://datadiscover.ai/"
        },
        {
            title: "Agra Smart City",
            category: "Smart City",
            desc: "Official smart city portal for Agra, integrating IoT data and civic services for improved urban management.",
            tags: ["GovTech", "IoT Integration", "Web Portal"],
            link: "https://agrasmartcity.in/"
        },
        {
            title: "Enterprise Chatbot",
            category: "Enterprise",
            desc: "Internal resource tracking and management system built for Coca Cola operations.",
            tags: ["React", "Dashboard", "Management"],
            link: "https://coco-cola-irt.vercel.app/"
        },
        {
            title: "Ayraaz",
            category: "E-Commerce / Brand",
            desc: "Modern digital platform delivering a seamless brand experience and product showcase.",
            tags: ["React", "E-commerce", "UI/UX"],
            link: "https://ayraaz.com/"
        },
        {
            title: "HustleMad Revamped",
            category: "E-Commerce / Lifestyle",
            desc: "Modern e-commerce experience for a lifestyle brand with dynamic product showcases.",
            tags: ["Next.js", "E-commerce", "UI/UX"],
            link: "https://hustlemad-revamped-jnek.vercel.app/"
        },
        {
            title: "JayDadGuru",
            category: "EdTech",
            desc: "Educational platform offering courses and mentorship resources.",
            tags: ["EdTech", "LMS", "React"],
            link: "https://jaydadguru.com/"
        },
        {
            title: "SDYogam",
            category: "Wellness",
            desc: "Holistic yoga and wellness platform featuring class schedules and resource libraries.",
            tags: ["Wellness", "Booking System", "React"],
            link: "https://sdyogam.com/"
        },
        {
            title: "Raj Auto Parts",
            category: "E-Commerce",
            desc: "Digital catalog and ordering system for an automotive parts distributor.",
            tags: ["E-commerce", "Inventory", "Web"],
            link: "https://rajautoparts.com/"
        },
        {
            title: "AI Education Platform",
            category: "EdTech AI",
            desc: "Gateway to the future of education delivering personalized learning, adaptive instruction, and AI-powered examination monitoring.",
            tags: ["Gen AI", "Personalized Learning", "AI Proctor"],
            link: "#"
        },
        {
            title: "VisionDetect Pro",
            category: "AI Surveillance",
            desc: "Real-time face verification for video KYC, facial access control, sentiment analysis, and automated attendance systems.",
            tags: ["Computer Vision", "Video KYC", "Security"],
            link: "#"
        },
        {
            title: "AI Chatbot Assistant",
            category: "Conversational AI",
            desc: "Enterprise-level AI chatbot powered by GPT-4.0. Delivers human-like, multilingual conversations and handles complex queries.",
            tags: ["GPT-4", "NLP", "Customer Support"],
            link: "#"
        },
        {
            title: "Call Audit AI",
            category: "Voice AI",
            desc: "Automates customer service call analysis, extracts insights, and delivers instant feedback to boost agent performance.",
            tags: ["Speech-to-Text", "Sentiment Analysis", "Audit"],
            link: "#"
        },
        {
            title: "Smart ATS",
            category: "HR Tech",
            desc: "AI-powered Applicant Tracking System that transforms recruitment by automating bulk resume analysis and delivering data-driven insights.",
            tags: ["Resume Parsing", "Matching Algorithms", "HR Automation"],
            link: "#"
        }
    ];

    return (
        <section id="projects" className="section">
            <div className="container">
                <RevealOnScroll>
                    <h2 style={{ fontSize: '3rem', marginBottom: '1rem' }}>Selected Work</h2>
                    <p style={{ color: 'var(--text-secondary)', marginBottom: '4rem', maxWidth: '600px' }}>
                        A showcase of technical excellence and business impact.
                    </p>
                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
                        gap: '2.5rem'
                    }}>
                        {projects.map((project, index) => (
                            <TiltCard key={index} className="glass" style={{
                                padding: '2.5rem',
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'space-between',
                                minHeight: '400px',
                                cursor: 'pointer',
                                borderTop: '1px solid rgba(255,255,255,0.1)'
                            }}>
                                {/* Hover Glow Effect */}
                                <div className="project-glow" style={{
                                    position: 'absolute',
                                    top: 0,
                                    left: 0,
                                    right: 0,
                                    bottom: 0,
                                    background: 'radial-gradient(circle at top right, rgba(0, 219, 222, 0.1), transparent 60%)',
                                    opacity: 0,
                                    transition: 'opacity 0.4s ease',
                                    zIndex: 0
                                }} />

                                <div style={{ zIndex: 1 }}>
                                    <span style={{
                                        color: 'var(--accent-secondary)',
                                        fontSize: '0.85rem',
                                        textTransform: 'uppercase',
                                        letterSpacing: '1px',
                                        fontWeight: 600,
                                        marginBottom: '1rem',
                                        display: 'block'
                                    }}>
                                        {project.category}
                                    </span>
                                    <h3 style={{ fontSize: '2rem', marginBottom: '1rem', lineHeight: 1.2 }}>{project.title}</h3>
                                    <p style={{ color: 'var(--text-secondary)', marginBottom: '2rem', lineHeight: 1.6 }}>{project.desc}</p>
                                </div>
                                <div style={{ zIndex: 1 }}>
                                    <div style={{ display: 'flex', gap: '0.8rem', flexWrap: 'wrap', marginBottom: '2rem' }}>
                                        {project.tags.map(tag => (
                                            <span key={tag} style={{
                                                fontSize: '0.85rem',
                                                color: 'var(--text-primary)',
                                                background: 'rgba(255, 255, 255, 0.05)',
                                                padding: '0.3rem 1rem',
                                                borderRadius: '50px',
                                                border: '1px solid var(--glass-border)'
                                            }}>
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                    <a href={project.link} target="_blank" rel="noopener noreferrer" style={{
                                        display: 'inline-flex',
                                        alignItems: 'center',
                                        gap: '0.5rem',
                                        fontWeight: 600,
                                        color: 'var(--accent-primary)',
                                        fontSize: '1.1rem'
                                    }}>
                                        View Project <span>&rarr;</span>
                                    </a>
                                </div>
                            </TiltCard>
                        ))}
                    </div>
                </RevealOnScroll>
            </div>
        </section>
    );
};

export default Projects;
