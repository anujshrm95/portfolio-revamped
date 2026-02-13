import Hero from '../components/Hero';
import About from '../components/About';
import Services from '../components/Services';
import Skills from '../components/Skills';
import Process from '../components/Process';
import Projects from '../components/Projects';
import Contact from '../components/Contact'; // Keep existing Contact section as footer or remove? 
// Plan said "replacing the header/hero Contact scroll links", but maybe keep the footer/contact info?
// Actually, detailed form is requested. The existing Contact.jsx might just be simple info.
// I'll keep reusing components for Home.

const Home = () => {
    return (
        <>
            <Hero />
            <About />
            <Services />
            <Skills />
            <Process />
            <Projects />
            {/* Keeping the original Contact section as a quick footer contact for now, or maybe remove if redundant? */}
            {/* The user wants a NEW page for the form. I'll leave the old Contact section in Home for now but it might be better to remove if it confuses. 
                However, for a one-pager flow, usuall bottom has contact. 
                Let's assume the user wants the "Say Hello" button to go to a separate page. 
                I'll keep the bottom contact section as "Quick Contact" or just remove it if it duplicates.
                Given the request "redirect user to a new page", I'll keep the old section but maybe we'll rename it or just leave it.
            */}
            <Contact />
        </>
    );
};

export default Home;
