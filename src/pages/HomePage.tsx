import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';

const Home: React.FC = () => {
  // Crear referencias para las secciones
  const heroRef = useRef<HTMLDivElement>(null);
  const lssegRef = useRef<HTMLDivElement>(null);
  const labcoatRef = useRef<HTMLDivElement>(null);
  const apptibiogramRef = useRef<HTMLDivElement>(null);
  const hovercraftRef = useRef<HTMLDivElement>(null);
  const portfolioRef = useRef<HTMLDivElement>(null); 
  const teethRef = useRef<HTMLDivElement>(null); 
  const demandPredictorRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null); 

  const sections = [
    { ref: heroRef, label: 'H' },
    { ref: lssegRef, label: '1' },
    { ref: labcoatRef, label: '2' },
    { ref: apptibiogramRef, label: '3' },
    { ref: hovercraftRef, label: '4' },
    { ref: portfolioRef, label: '5' },
    { ref: teethRef, label: '6' },
    { ref: demandPredictorRef, label: '7' },
    { ref: aboutRef, label: 'A' },
  ];

  const colors = [
    'white',    
    'lsseg',   
    'lab',  
    'apptibiogram', 
    'hovercraft', 
    'portfolio',   
    'teeth', 
    'gray-400',   
    'tenderos',
  ];

  const [activeSection, setActiveSection] = useState<string | null>(null);

  const scrollToSection = (ref: React.RefObject<HTMLDivElement>) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = sections.findIndex((section) => section.ref.current === entry.target);
            setActiveSection(sections[index].label);
          }
        });
      },
      { threshold: 0.6 }
    );

    sections.forEach((section) => {
      if (section.ref.current) {
        observer.observe(section.ref.current);
      }
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div id="home-page" className="relative">
      {/* Círculos de navegación a la derecha */}
      <div className="fixed right-4 top-1/2 transform -translate-y-1/2 space-y-8 z-10">
        {sections.map((section, index) => (
          <button
            key={index}
            onClick={() => scrollToSection(section.ref)}
            className={`w-4 h-4 rounded-full flex items-center justify-center
              transition-all duration-300 ${
                activeSection === section.label
                  ? `w-8 h-8 text-${colors[sections.findIndex(s => s.label === activeSection)]}_secondary bg-${colors[sections.findIndex(s => s.label === activeSection)]}_primary`
                  : `bg-${colors[sections.findIndex(s => s.label === activeSection)]}_primary hover:w-8 hover:h-8`
              }`}
          >
            <span className={`${activeSection === section.label ? 'visible' : 'invisible'}`}>
              {section.label}
            </span>
          </button>
        ))}
      </div>

      {/* Secciones de la página */}
      <div className="snap-y snap-mandatory h-screen overflow-y-scroll">
        {/* Hero Section */}
        <section ref={heroRef} className="min-h-screen snap-start flex flex-col items-center justify-center bg-cover bg-center text-black"
          style={{ backgroundImage: 'url(Hero.jpg)' }}>
          <div className="text-center py-16 px-8 bg-white bg-opacity-75 w-full">
            <h1 className="text-7xl font-heading">Welcome to My Portfolio</h1>
            <p className="mt-4 text-xl">Scroll down to explore more</p>
          </div>
          {/* line to separate social media (bottom of page) */}
          <div className="absolute bottom-0 w-full py-4 bg-white bg-opacity-75 flex justify-center space-x-40">
            <a href="https://www.linkedin.com/in/susana-uribe-velasquez/" className="text-2xl text-black">
              <FaLinkedin />
            </a>
            <a href="https://github.com/susiur" className="text-2xl text-black">
              <FaGithub />
            </a>
            <a href="mailto:susyuribe22@gmail.com" className="text-2xl text-black">
              <FaEnvelope />
            </a>
          </div>
        </section>

        {/* Projects Section */}
        <section
          ref={lssegRef}
          className="min-h-screen snap-start flex items-end justify-center bg-cover bg-center relative"
          style={{
            backgroundImage: 'url(/LSSEG.png)'
          }}
        >
          <div className="absolute bottom-0 w-full h-1/2 bg-gradient-to-t from-lsseg_secondary to-transparent"></div>
          <div className="relative text-center z-10 text-white mb-20">
            <h2 className="text-6xl font-heading text-lsseg_primary mb-6">LS-SEG</h2>
            <p className="text-2xl text-lsseg_primary font-subtitle mb-12">
              Semi-Automatic Segmentation Methods for Lumbar Spine MRI in 3D Slicer
            </p>
            <br />
            <Link
              to="/lsseg"
              className="bg-lsseg_primary text-lsseg_secondary text-2xl px-12 py-6 rounded-full shadow-lg hover:border hover:border-lsseg_primary hover:bg-transparent hover:text-lsseg_primary transition-all duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-light-blue"
            >
              Learn more
            </Link>
          </div>
        </section>

        <section
          ref={labcoatRef}
          className="min-h-screen snap-start flex items-end justify-center bg-cover bg-center relative"
          style={{
            backgroundImage: 'url(/labcoat.png)'
          }}
        >
          <div className="absolute bottom-0 w-full h-1/2 bg-gradient-to-t from-lab_secondary to-transparent"></div>
          <div className="relative text-center z-10 text-white mb-20">
            <h2 className="text-6xl text-lab_primary font-heading mb-6">Laboratory Coat Detection</h2>
            <p className="text-2xl font-subtitle text-lab_primary mb-12">
              Computer vision for labcoat detection
            </p>
            <br />
            <Link
              to="/labcoat"
              className="bg-lab_primary text-lab_secondary text-2xl px-12 py-6 rounded-full shadow-lg hover:border hover:border-lab_primary hover:bg-transparent hover:text-lab_primary transition-all duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-light-blue"
            >
              Learn more
            </Link>
          </div>
        </section>

        <section
          ref={apptibiogramRef}
          className="min-h-screen snap-start flex items-end justify-center bg-cover bg-center relative"
          style={{
            backgroundImage: 'url(/apptibiogram.png)'
          }}
        >
          <div className="absolute bottom-0 w-full h-1/2 bg-gradient-to-t from-apptibiogram_secondary to-transparent"></div>
          <div className="relative text-center z-10 text-white mb-20">
            <h2 className="text-6xl mb-6 font-heading text-apptibiogram_primary">Apptibiogram</h2>
            <p className="text-2xl mb-12 font-subtitle text-apptibiogram_primary">
              Clone of the Apptibiogram app for analyzing antibiograms.
            </p>
            <br />
            <Link
              to="/apptibiogram"
              className="bg-apptibiogram_primary text-apptibiogram_secondary text-2xl px-12 py-6 rounded-full shadow-lg hover:border hover:border-apptibiogram_primary hover:bg-transparent hover:text-apptibiogram_primary transition-all duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-light-blue"
            >
              Learn more
            </Link>
          </div>
        </section>

        <section
          ref={hovercraftRef}
          className="min-h-screen snap-start flex items-end justify-center bg-cover bg-center relative"
          style={{
            backgroundImage: 'url(/Hovercraft2.png)'
          }}
        >
          <div className="absolute bottom-0 w-full h-1/2 bg-gradient-to-t from-hovercraft_secondary to-transparent"></div>
          <div className="relative text-center z-10 text-hovercraft_primary mb-20">
            <h2 className="text-6xl mb-6 font-heading text-hovercraft_primary">Hovercraft</h2>
            <p className="text-2xl mb-12 font-subtitle text-hovercraft_primary">
              Small hovercraft with artificial vision.
            </p>
            <br />
            <Link
              to="/hovercraft"
              className="bg-hovercraft_primary text-hovercraft_secondary text-2xl px-12 py-6 rounded-full shadow-lg hover:border hover:border-hovercraft_primary hover:bg-transparent hover:text-hovercraft_primary transition-all duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-light-blue"
            >
              Learn more
            </Link>
          </div>
        </section>

        <section
          ref={portfolioRef}
          className="min-h-screen snap-start flex items-end justify-center bg-cover bg-center relative"
          style={{
            backgroundImage: 'url(/webpage.png)'
          }}
        >
          <div className="absolute bottom-0 w-full h-1/2 bg-gradient-to-t from-portfolio_secondary to-transparent"></div>
          <div className="relative text-center z-10 text-white mb-20">
            <h2 className="text-6xl mb-6 font-heading text-portfolio_primary">My Portfolio</h2>
            <p className="text-2xl mb-12 font-subtitle text-portfolio_primary">
              A showcase of my projects and skills.
            </p>
            <br />
            <Link
              to="/portfolio"
              className="bg-portfolio_primary text-portfolio_secondary text-2xl px-12 py-6 rounded-full shadow-lg hover:border hover:border-portfolio_primary hover:bg-transparent hover:text-portfolio_primary transition-all duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-light-blue"
            >
              Learn more
            </Link>
          </div>
        </section>

        <section
          ref={teethRef}
          className="min-h-screen snap-start flex items-end justify-center bg-cover bg-center relative"
          style={{
            backgroundImage: 'url(/teeth.png)'
          }}
        >
          <div className="absolute bottom-0 w-full h-1/2 bg-gradient-to-t from-teeth_secondary to-transparent"></div>
          <div className="relative text-center z-10 text-white mb-20">
            <h2 className="text-6xl mb-6 font-heading text-teeth_primary">Dental Classification</h2>
            <p className="text-2xl mb-12 font-subtitle text-teeth_primary">
              AI-driven dental image classification.
            </p>
            <br />
            <Link
              to="/teeth"
              className="bg-teeth_primary text-teeth_secondary text-2xl px-12 py-6 rounded-full shadow-lg hover:border hover:border-teeth_primary hover:bg-transparent hover:text-teeth_primary transition-all duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-light-blue"
            >
              Learn more
            </Link>
          </div>
        </section>

        <section
          ref={demandPredictorRef}
          className="min-h-screen snap-start flex items-end justify-center bg-cover bg-center relative"
          style={{
            backgroundImage: 'url(/tenderos.png)'
          }}
        >
          <div className="absolute bottom-0 w-full h-1/2 bg-gradient-to-t from-tenderos_secondary to-transparent"></div>
          <div className="relative text-center z-10 text-white mb-20">
            <h2 className="text-6xl mb-6 font-heading text-tenderos_primary">Tenderos</h2>
            <p className="text-2xl mb-12 font-subtitle text-tenderos_primary">
              Web application for store management wih demand prediction models.
            </p>
            <br />
            <Link
              to="/tenderos"
              className="bg-tenderos_primary text-tenderos_secondary text-2xl px-12 py-6 rounded-full shadow-lg hover:border hover:border-tenderos_primary hover:bg-transparent hover:text-tenderos_primary transition-all duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-light-blue"
            >
              Learn more
            </Link>
          </div>
        </section>

        <section
        ref={aboutRef} 
        className="min-h-screen flex flex-col snap-start relative bg-gray-900 text-gray-100">
          <header className="p-4 flex justify-between items-center">
            <div className="w-12 h-12 rounded-full overflow-hidden bg-cover bg-center"
              style={{backgroundImage: 'url(Yo.jpg)'}}/>
            <button className="text-gray-400 hover:text-gray-200">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </header>
          
          <div className="flex-grow flex flex-col items-center justify-center px-4 py-12">
            <div className="w-full max-w-3xl aspect-[3/1] relative mb-8 rounded-lg overflow-hidden bg-cover bg-center"
            style={{backgroundImage: 'url(Yo.jpg)'}}/>
            
            <h1 className="text-5xl font-bold mb-4">About me</h1>
            <p className="text-xl text-gray-400 mb-8">Why is the question I'll ask you first</p>
            
            <Link to="/about" 
                  className="bg-teeth_primary text-teeth_secondary text-2xl px-8 py-6 rounded-full shadow-lg hover:border hover:border-teeth_primary hover:bg-transparent hover:text-teeth_primary transition-all duration-300 ease-in-out transform hover:scale-105 focus:outline-none flex items-center">
              Learn more
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </Link>

          </div>
        </section>
      </div>
    </div>
  );
};

export default Home;