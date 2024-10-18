import React, { useState, useEffect } from "react";
import ProjectGallery from "./ProjectGallery";

const  Portfolio: React.FC = () => {
  const [offsetY, setOffsetY] = useState(0);
  const [visible, setVisible] = useState(false); // Estado para controlar la visibilidad
  const images = [
    "/src/assets/webpage.png",
    "/src/assets/lsseg/slicer_preview.png",
    "src/assets/lsseg/workflow.png"
  ];

  // Detect scroll for the parallax effect
  const handleScroll = () => {
    setOffsetY(window.pageYOffset);
  };

  // Activate the scroll listener when the component mounts
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    // Controlar la visibilidad del contenido después de un tiempo
    setTimeout(() => {
      setVisible(true);
    }, 500); // Retardo de 500 ms antes de que aparezca el contenido

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="relative min-h-[200vh] bg-gray-900 text-white overflow-hidden">
      {/* Fixed background image */}
      <div
        className="fixed inset-0 bg-cover bg-center z-3"
        style={{ backgroundImage: `url(${images[0]})` }}
      >
         
        <div className="absolute bottom-0 w-full h-1/2 bg-gradient-to-t from-portfolio_secondary to-transparent"></div>
      </div>

      {/* Initial content */}
      
      <div className={`relative z-10 h-screen flex items-end justify-center text-center px-4 md:px-8 pb-16 transform transition-transform duration-1000 ease-in-out ${visible ? "-translate-y-24" : "translate-y-0"}`}> 
        <div>
          <h2 className="text-6xl  mb-12 font-heading text-portfolio_primary"> Portfolio</h2>
          <p className="text-2xl mb-20 font-subtitle text-portfolio_primary">
          My portfolio website (Front End Project)using React, Tailwind CSS, and Vercel
          </p>
        </div>
      </div>

      {/* Main content section */}
      <div className={`relative z-20 bg-portfolio_primary text-portfolio_secondary text-2xl min-h-screen rounded-t-3xl -mb-24 px-8 md:px-16 py-16 flex flex-col items-center transform transition-transform duration-1000 ease-in-out ${visible ? "-translate-y-24" : "translate-y-0"}`}>
        <div className="animate-bounce">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6 text-portfolio_secondary">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
          </svg>
        </div>
        <div className="flex justify-between items-center w-1/2 mb-8 mt-20">
          <div className="flex flex-col items-center w-full text-center">
            {[
              { label: "Year", value: "2024" },
              { label: "Category", value: "Web Development" },
              { label: "Software Used", value: "React, Tailwind CSS, Vercel" },
            ].map((item, index) => (
              <div key={index} className="flex items-center w-full mb-2">
                <span className="mr-2 opacity-75">{item.label}:</span>
                <div className="flex-grow border-t border-portfolio_secondary mx-2 opacity-75"></div>
                <span>{item.value}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Descripción del objetivo del proyecto */}
        <div className="text-left mb-6">
          <h2 className="text-2xl mb-2 opacity-75">Objective</h2>
          <p className="max-w-3xl">
            The primary goal of this project was to create a personal portfolio that would showcase my skills and projects in an aesthetically appealing and responsive manner. It was built to be easily expandable and adaptable as I continue to grow and develop more projects.
          </p>
        </div>

        {/* Metodología */}
        <div className="text-left mb-6">
          <h2 className="text-2xl mb-2 opacity-75">Materials and Methods</h2>
          <p className="max-w-3xl">
            The project utilizes sagittal fast spin-echo MRI images of the lumbar spine, with imaging parameters of TE/TR = 125/3000 ms and an in-plane resolution/slice thickness of 0.6/4 mm. LS-SEG employs a U-Net neural network trained to predict vertebrae within sub-images, while the Cobb angle is computed using a semi-automatic method requiring only two points for input.
          </p>
        </div>

        {/* Resultados */}
        <div className="text-left mb-6">
          <h2 className="text-2xl mb-2 opacity-75">Results</h2>
          <p className="max-w-3xl">
            The result is a fully functional portfolio that showcases all my projects, like this one! It includes links to GitHub repositories and live demos for each project. The website is responsive and optimized for performance, loading quickly across different devices.          
          </p>
        </div>
      </div>

      {/* Sección secundaria con tres imágenes y texto */}
      <div className="relative z-20 bg-portfolio_secondary text-portfolio_primary text-2xl min-h-screen px-8 md:px-16 lg:px-32 py-16">
        <div className="flex flex-col items-center space-y-16">
          {/* Primera imagen y descripción */}
          <div className="relative w-full rounded-3xl overflow-hidden">
            <div
              style={{
                backgroundImage: `url(${images[1]})`,
                width: '100%',
                height: '600px',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                transform: `translateY(-${offsetY * 0}px)`,
                transition: "transform 0.2s ease-out",
              }}
            />
            <h3 className="text-center mt-4 p-4 rounded-lg shadow-lg">
              Main landing page of my personal portfolio, showcasing a clean design and navigation to various project showcases            </h3>
          </div>

          {/* Segunda imagen y descripción */}
          <div className="relative w-full rounded-3xl overflow-hidden">
            <div
              style={{
                backgroundImage: `url(${images[0]})`,
                width: '100%',
                height: '600px',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                transform: `translateY(-${offsetY * 0}px)`,
                transition: "transform 0.2s ease-out",
              }}
            />
            <h3 className="text-center mt-4 p-4 rounded-lg shadow-lg">
              Interactive project gallery, with links to each project.            
            </h3>
          </div>

          {/* Tercera imagen y descripción */}
          <div className="relative w-full rounded-3xl overflow-hidden">
            <div
              style={{
                backgroundImage: `url(${images[2]})`,
                width: '100%',
                height: '700px',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                transform: `translateY(-${offsetY * 0}px)`,
                transition: "transform 0.2s ease-out",
              }}
            />
            <h3 className="text-center mt-4 p-4 rounded-lg shadow-lg">
              Simplified Workflow: Reducing manual input for Cobb angle measurement.
            </h3>
          </div>
        </div>
      </div>

      {/* Galería de imágenes */}
      <div className="bg-portfolio_secondary">
        <ProjectGallery />
      </div>
    </div>
  );
};

export default  Portfolio;