import React, { useState, useEffect } from "react";
import ProjectGallery from "./ProjectGallery";

const Labcoat: React.FC = () => {
  const [offsetY, setOffsetY] = useState(0);
  const [visible, setVisible] = useState(false); 
  const images = [
    "/src/assets/labcoat.png", 
    "/src/assets/labcoat/labcoat_preview.png",
    "/src/assets/labcoat/app.png",
    "/src/assets/labcoat/labcoat_positive.png"
  ];

  const handleScroll = () => {
    setOffsetY(window.pageYOffset);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    setTimeout(() => {
      setVisible(true);
    }, 500);

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
        <div className="absolute bottom-0 w-full h-1/2 bg-gradient-to-t from-lab_secondary to-transparent"></div>
      </div>

      {/* Initial content */}
      <div className={`relative z-10 h-screen flex items-end justify-center text-center px-4 md:px-8 pb-16 transform transition-transform duration-1000 ease-in-out ${visible ? "-translate-y-24" : "translate-y-0"}`}> 
        <div>
          <h2 className="text-6xl  mb-12 font-heading text-lab_primary">Laboratory Coat Detection</h2>
          <p className="text-2xl mb-20 font-subtitle text-lab_primary">
            Real-time monitoring system to ensure compliance with laboratory safety protocols.
          </p>
        </div>
      </div>

      {/* Main content section */}
      <div className={`relative z-20 bg-lab_primary text-lab_secondary text-2xl min-h-screen rounded-t-3xl -mb-24 px-8 md:px-16 py-16 flex flex-col items-center transform transition-transform duration-1000 ease-in-out ${visible ? "-translate-y-24" : "translate-y-0"}`}>
        <div className="animate-bounce">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6 text-lab_secondary">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
          </svg>
        </div>
        <div className="flex justify-between items-center w-1/2 mb-8 mt-20">
          <div className="flex flex-col items-center w-full text-center">
            {[
              { label: "Year", value: "2024" },
              { label: "Category", value: "Computer Vision / Safety Compliance" },
              { label: "Software Used", value: "Python, YOLO, Tkinter" },
              { label: "Team", value: "Universidad de XYZ" }, // Cambia según tu equipo
            ].map((item, index) => (
              <div key={index} className="flex items-center w-full mb-2">
                <span className="mr-2 opacity-75">{item.label}:</span>
                <div className="flex-grow border-t border-lab_secondary mx-2 opacity-75"></div>
                <span>{item.value}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Descripción del objetivo del proyecto */}
        <div className="text-left mb-6">
          <h2 className="text-lab_secondary text-2xl mb-2 opacity-75">Objective</h2>
          <p className="max-w-3xl">
            The primary objective of this project is to develop a real-time monitoring system that detects individuals entering a laboratory to ensure they are wearing lab coats. This enhances compliance with safety protocols through automated monitoring.
          </p>
        </div>

        {/* Metodología */}
        <div className="text-left mb-6">
          <h2 className="text-lab_secondary text-2xl mb-2 opacity-75">Materials and Methods</h2>
          <p className="max-w-3xl">
            The project utilizes video footage from the laboratory entrance, employing YOLO for object detection. The system identifies whether individuals are wearing lab coats and counts them, facilitating compliance with safety regulations.
          </p>
        </div>

        {/* Resultados */}
        <div className="text-left mb-6">
          <h2 className="text-lab_secondary text-2xl mb-2 opacity-75">Results</h2>
          <p className="max-w-3xl">
            The implemented system effectively detects individuals and distinguishes between those wearing lab coats and those who are not, providing valuable data for laboratory safety compliance.
          </p>
        </div>
      </div>

      {/* Sección secundaria con imágenes y texto */}
      <div className="relative z-20 bg-lab_secondary text-lab_primary text-2xl min-h-screen px-8 md:px-16 lg:px-32 py-16">
        <div className="flex flex-col items-center space-y-16">
          {/* Primera imagen y descripción */}
          <div className="relative w-full rounded-3xl overflow-hidden">
            <div
              style={{
                backgroundImage: `url(${images[1]})`,
                width: '100%',
                height: '800px',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                transform: `translateY(-${offsetY * 0}px)`,
                transition: "transform 0.2s ease-out",
              }}
            />
            <h3 className="text-center mt-4 p-4 bg-lab_secondary bg-opacity-80 rounded-lg shadow-lg">
              YOLO in Action: Detecting lab coats in real-time for safety compliance.
            </h3>
          </div>

          {/* Segunda imagen y descripción */}
          <div className="relative w-full rounded-3xl overflow-hidden">
            <div
              style={{
                backgroundImage: `url(${images[2]})`,
                width: '100%',
                height: '600px',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                transform: `translateY(-${offsetY * 0.}px)`,
                transition: "transform 0.2s ease-out",
              }}
            />
            <h3 className="text-center mt-4 p-4 bg-lab_secondary bg-opacity-80 rounded-lg shadow-lg">
              Automated Monitoring: Ensuring lab coat compliance at laboratory entrances.
            </h3>
          </div>

          {/* Tercera imagen y descripción */}
          <div className="relative w-full rounded-3xl overflow-hidden">
            <div
              style={{
                backgroundImage: `url(${images[3]})`,
                width: '100%',
                height: '700px',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                transform: `translateY(-${offsetY * 0.}px)`,
                transition: "transform 0.2s ease-out",
              }}
            />
            <h3 className="text-center mt-4 p-4 bg-lab_secondary bg-opacity-80 rounded-lg shadow-lg">
              Safety Compliance: Data collection for lab entrance monitoring.
            </h3>
          </div>
        </div>
      </div>

      {/* Galería de imágenes */}
      <div className="bg-lab_primary">
        <ProjectGallery />
      </div>
    </div>
  );
};

export default Labcoat;
