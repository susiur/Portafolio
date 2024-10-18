import React, { useState, useEffect } from "react";
import ProjectGallery from "./ProjectGallery";

const Teeth: React.FC = () => {
  const [offsetY, setOffsetY] = useState(0);
  const [visible, setVisible] = useState(false); // Estado para controlar la visibilidad
  const images = [
    "/src/assets/teeth.png",
    "/src/assets/teeth/setup2.jpg",
    "/src/assets/teeth/teeth.jpg"
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
         
        <div className="absolute bottom-0 w-full h-1/2 bg-gradient-to-t from-teeth_secondary to-transparent"></div>
      </div>

      {/* Initial content */}
      
      <div className={`relative z-10 h-screen flex items-end justify-center text-center px-4 md:px-8 pb-16 transform transition-transform duration-1000 ease-in-out ${visible ? "-translate-y-24" : "translate-y-0"}`}> 
        <div>
          <h2 className="text-6xl  mb-12 font-heading text-teeth_primary">Dental Classification</h2>
          <p className="text-2xl mb-20 font-subtitle text-teeth_primary">
            Classify teeth with artificial vision
          </p>
        </div>
      </div>

      {/* Main content section */}
      <div className={`relative z-20 bg-teeth_primary text-teeth_secondary text-2xl min-h-screen rounded-t-3xl -mb-24 px-8 md:px-16 py-16 flex flex-col items-center transform transition-transform duration-1000 ease-in-out ${visible ? "-translate-y-24" : "translate-y-0"}`}>
        <div className="animate-bounce">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6 text-teeth_secondary">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
          </svg>
        </div>
        <div className="flex justify-between items-center w-1/2 mb-8 mt-20">
          <div className="flex flex-col items-center w-full text-center">
            {[
              { label: "Year", value: "2024" },
              { label: "Category", value: "AI-based Dental System" },
              { label: "Technologies", value: "Python, OpenCV, TensorFlow, Keras" }
            ].map((item, index) => (
              <div key={index} className="flex items-center w-full mb-2">
                <span className="mr-2 opacity-75">{item.label}:</span>
                <div className="flex-grow border-t border-teeth_secondary mx-2 opacity-75"></div>
                <span>{item.value}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Descripción del objetivo del proyecto */}
        <div className="text-left mb-6">
          <h2 className="text-2xl mb-2 opacity-75">Objective</h2>
          <p className="max-w-3xl">
            The goal of the Dental Classification System was to create a machine learning model capable of classifying different types of teeth in real-time, using a camera-based system. This system would automate the identification of teeth as they passed in front of a camera on a conveyor belt, determining both type and side (left or right).          </p>
        </div>

        {/* Metodología */}
        <div className="text-left mb-6">
          <h2 className="text-2xl mb-2 opacity-75">Materials and Methods</h2>
          <p className="max-w-3xl">
            Images of individual teeth were collected under controlled lighting conditions inside an MDF enclosure. The images were preprocessed by flattening the data and organizing it into an Excel file. Data augmentation techniques, such as rotating the images at different angles, were applied to increase the dataset. A Multi-Layer Perceptron (MLP) model was then trained using the augmented data, with a 70/30 split for training and testing.
          </p>
        </div>

        {/* Resultados */}
        <div className="text-left mb-6">
          <h2 className="text-2xl mb-2 opacity-75">Results</h2>
          <p className="max-w-3xl">
            The trained MLP model achieved an accuracy score of 100% on the test set, suggesting potential overfitting. Despite this, the model effectively identified the type of tooth and its side. Further exploration was needed to address the overfitting concern, but the system demonstrated the feasibility of automating dental classification in real-time.
          </p>
        </div>
        
      </div>

      {/* Sección secundaria*/}
      <div className="relative z-20 bg-teeth_secondary text-teeth_primary text-2xl min-h-screen px-8 md:px-16 lg:px-32 py-16">
        <div className="flex flex-col items-center space-y-16">
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
              Setup for Data Collection: Enclosed environment designed for controlled lighting and image capture
            </h3>
          </div>

          {/* Segunda imagen y descripción */}
          <div className="relative w-full rounded-3xl overflow-hidden flex flex-col items-center">
            <div className="relative w-full max-w-4xl mb-8 flex flex-col items-center">
              <video controls className="rounded-lg shadow-lg animate-fadeIn">
                <source src="/src/assets/teeth/video_centIzq.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              <h3 className="text-center mt-4 p-4">
                Test Video: Recording used to simulate real-time classification workflow.
              </h3>
            </div>
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
              Training Data: Collection of teeth used for model training and classification
            </h3>
          </div>
        </div>
      </div>

      {/* Galería de imágenes */}
      <div className="bg-teeth_secondary">
        <ProjectGallery />
      </div>
    </div>
  );
};

export default Teeth;