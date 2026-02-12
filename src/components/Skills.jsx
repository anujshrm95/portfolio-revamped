import TiltCard from './TiltCard';

const Skills = () => {
    const skillGroups = [
        {
            category: "Gen AI & Data Science",
            skills: [
                "Python",
                "LangChain",
                "RAG Pipelines",
                "TensorFlow / PyTorch",
                "OpenAI API",
                "Vector Databases"
            ]
        },
        {
            category: "Frontend & Full Stack",
            skills: [
                "React / Next.js",
                "FastAPI (Backend)",
                "Three.js / WebGL",
                "Tailwind CSS",
                "Docker / Kubernetes",
                "PostgreSQL"
            ]
        },
        {
            category: "Cloud Certifications",
            skills: [
                "Azure AI Engineer (AI-102)",
                "Azure Data Fundamentals (DP-900)",
                "Azure AI Fundamentals (AI-900)",
                "AWS Associate Machine Learning",
                "GCP Certified Professional"
            ]
        }
    ];

    return (
        <section id="skills" className="section">
            <div className="container">
                <h2 style={{ fontSize: '2.5rem', marginBottom: '3rem' }}>Technical Expertise</h2>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem' }}>
                    {skillGroups.map((group, index) => (
                        <div key={index}>
                            <h3 className="text-gradient" style={{ fontSize: '1.8rem', marginBottom: '1.5rem', borderLeft: '4px solid var(--accent-primary)', paddingLeft: '1rem' }}>
                                {group.category}
                            </h3>
                            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
                                {group.skills.map(skill => (
                                    <TiltCard key={skill} className="glass" style={{
                                        padding: '0.8rem 1.5rem',
                                        fontSize: '1rem',
                                        fontWeight: 500,
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: '0.5rem',
                                        cursor: 'default'
                                    }}>
                                        <span style={{ color: 'var(--accent-secondary)' }}>•</span> {skill}

                                    </TiltCard>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
