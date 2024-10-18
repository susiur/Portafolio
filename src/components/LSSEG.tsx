import React, { useState, useEffect } from "react";
import ProjectGallery from "./ProjectGallery";

const LSSEG: React.FC = () => {
  const [offsetY, setOffsetY] = useState(0);
  const [visible, setVisible] = useState(false); // Estado para controlar la visibilidad
  const images = [
    "/LSSEG.png",
    "/lsseg/slicer_preview.png",
    "src/assets/lsseg/simulation.jpg",
    "src/assets/lsseg/angle.jpg"
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
         
        <div className="absolute bottom-0 w-full h-1/2 bg-gradient-to-t from-lsseg_secondary to-transparent"></div>
      </div>

      {/* Initial content */}
      
      <div className={`relative z-10 h-screen flex items-end justify-center text-center px-4 md:px-8 pb-16 transform transition-transform duration-1000 ease-in-out ${visible ? "-translate-y-24" : "translate-y-0"}`}> 
        <div>
          <h2 className="text-6xl  mb-12 font-heading text-lsseg_primary">LS-SEG</h2>
          <p className="text-2xl mb-20 font-subtitle text-lsseg_primary">
            Semi-Automatic Segmentation Methods for Lumbar Spine MRI in 3D Slicer
          </p>
        </div>
      </div>

      {/* Main content section */}
      <div className={`relative z-20 bg-lsseg_primary text-lsseg_secondary text-2xl min-h-screen rounded-t-3xl -mb-24 px-8 md:px-16 py-16 flex flex-col items-center transform transition-transform duration-1000 ease-in-out ${visible ? "-translate-y-24" : "translate-y-0"}`}>
        <div className="animate-bounce">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6 text-lsseg_secondary">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
          </svg>
        </div>
        <div className="flex justify-between items-center w-1/2 mb-8 mt-20">
          <div className="flex flex-col items-center w-full text-center">
            {[
              { label: "Year", value: "2024" },
              { label: "Category", value: "Medical Imaging Software" },
              { label: "Software Used", value: "3D Slicer, SimpleITK, TensorFlow" },
              { label: "Team", value: "University of Montpellier, Universidad EIA" },
            ].map((item, index) => (
              <div key={index} className="flex items-center w-full mb-2">
                <span className="mr-2 opacity-75">{item.label}:</span>
                <div className="flex-grow border-t border-lsseg_secondary mx-2 opacity-75"></div>
                <span>{item.value}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Descripción del objetivo del proyecto */}
        <div className="text-left mb-6">
          <h2 className="text-2xl mb-2 opacity-75">Objective</h2>
          <p className="max-w-3xl">
            The primary objective of LS-SEG is to develop a module extension for 3D Slicer that enables the rapid segmentation of vertebrae in lumbar MRI scans, while also facilitating the automatic calculation of the Cobb angle. The module improves the efficiency of analyzing a large number of images in clinical studies.
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
            LS-SEG allows users to select and segment specific vertebrae on lumbar MRI scans, automatically calculating the Cobb angle within the 3D Slicer environment. The use of a semi-automatic approach reduces the number of manual inputs, making the process more efficient for clinical applications.
          </p>
        </div>
        {/* Botón de GitHub */}
        <a
          href="https://github.com/CARTIGEN/LS-SEG/tree/main/lsseg_slicer_extension/lsseg_slicer_extension/lsseg" 
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-8 px-8 py-4 bg-lsseg_secondary text-lsseg_primary text-xl font-semibold rounded-3xl shadow-lg hover:bg-transparent hover:border hover:border-lsseg_secondary hover:text-lsseg_secondary transition duration-300 ease-in-out"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="inline-block h-6 w-6 mr-2"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M12 2C6.477 2 2 6.478 2 12c0 4.418 2.867 8.167 6.839 9.489.5.092.682-.217.682-.483 0-.237-.009-.868-.013-1.703-2.782.605-3.369-1.34-3.369-1.34-.454-1.157-1.109-1.465-1.109-1.465-.907-.62.069-.608.069-.608 1.003.07 1.531 1.031 1.531 1.031.891 1.528 2.34 1.087 2.91.831.09-.647.349-1.086.635-1.336-2.22-.252-4.555-1.111-4.555-4.944 0-1.092.39-1.986 1.03-2.684-.103-.254-.447-1.274.098-2.656 0 0 .84-.269 2.75 1.025a9.575 9.575 0 012.5-.337 9.577 9.577 0 012.5.337c1.91-1.294 2.75-1.025 2.75-1.025.546 1.382.201 2.402.098 2.656.64.698 1.03 1.592 1.03 2.684 0 3.842-2.34 4.684-4.56 4.934.36.31.68.916.68 1.848 0 1.334-.012 2.41-.012 2.743 0 .267.18.577.688.48A10.012 10.012 0 0022 12c0-5.522-4.477-10-10-10z"
            />
          </svg>
          View on GitHub
        </a>
      </div>

      {/* Sección secundaria con tres imágenes y texto */}
      <div className="relative z-20 bg-lsseg_secondary text-lsseg_primary text-2xl min-h-screen px-8 md:px-16 lg:px-32 py-16">
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
              LS-SEG in Action: Vertebrae selection and segmentation for Cobb angle calculation.
            </h3>
          </div>

          {/* Segunda imagen y descripción */}
          <div className="relative w-full rounded-3xl overflow-hidden">
            <div
              style={{
                backgroundImage: `url(${images[3]})`,
                width: '100%',
                height: '600px',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                transform: `translateY(-${offsetY * 0}px)`,
                transition: "transform 0.2s ease-out",
              }}
            />
            <h3 className="text-center mt-4 p-4 rounded-lg shadow-lg">
              U-Net Neural Network: Automating vertebrae segmentation for faster clinical workflows.
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
      <div className="bg-lsseg_secondary">
        <ProjectGallery />
      </div>
    </div>
  );
};

export default LSSEG;