import React, { useState, useEffect } from "react";
import ProjectGallery from "./ProjectGallery";

const Tenderos: React.FC = () => {
  const [visible, setVisible] = useState(false);
  const images = [
    "/tenderos.png",  // Imagen de fondo principal
    "/tenderos/Home_crop.png",  // Imagen de la aplicación 1
    "/tenderos/landing_mockup.png",  // Imagen de la aplicación 2
  ];
  const videos = {
    analytics: "mEOhxCa64js",
  };
  // Activar visibilidad después de un retardo
  useEffect(() => {
    setTimeout(() => {
      setVisible(true);
    }, 500); // Retardo de 500 ms antes de que aparezca el contenido
  }, []);

  return (
    <div className="relative min-h-[200vh] bg-gray-900 text-white overflow-hidden">
      {/* Fixed background image */}
      <div
        className="fixed inset-0 bg-cover bg-center z-3"
        style={{ backgroundImage: `url(${images[0]})` }}
      >
        <div className="absolute bottom-0 w-full h-1/2 bg-gradient-to-t from-tenderos_secondary to-transparent"></div>
      </div>

      {/* Initial content */}
      <div className={`relative z-10 h-screen flex items-end justify-center text-center px-4 md:px-8 pb-16 transform transition-transform duration-1000 ease-in-out ${visible ? "-translate-y-24" : "translate-y-0"}`}>
        <div>
          <h2 className="text-6xl mb-12 font-heading text-tenderos_primary">Tenderos</h2>
          <p className="text-2xl mb-20 font-subtitle text-tenderos_primary">
            A web application for store management with demand prediction and product analytics.
          </p>
        </div>
      </div>

      {/* Main content section */}
      <div className={`relative z-20 bg-tenderos_primary text-tenderos_secondary text-2xl min-h-screen rounded-t-3xl -mb-24 px-8 md:px-16 py-16 flex flex-col items-center transform transition-transform duration-1000 ease-in-out ${visible ? "-translate-y-24" : "translate-y-0"}`}>
        <div className="animate-bounce">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6 text-tenderos_secondary">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
          </svg>
        </div>
        <div className="flex justify-between items-center w-1/2 mb-8 mt-20">
          <div className="flex flex-col items-center w-full text-center">
            {[
              { label: "Year", value: "2023" },
              { label: "Category", value: "Web Application" },
              { label: "Software Used", value: "Nest, Flask, Prisma, Auth0, Google Cloud" }
            ].map((item, index) => (
              <div key={index} className="flex items-center w-full mb-2">
                <span className="mr-2 opacity-75">{item.label}:</span>
                <div className="flex-grow border-t border-tenderos_secondary mx-2 opacity-75"></div>
                <span>{item.value}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Descripción del objetivo del proyecto */}
        <div className="text-left mb-6">
          <h2 className="text-2xl mb-2 opacity-75">Objective</h2>
          <p className="max-w-3xl">
            Tenderos is a web application designed for store management, offering functionalities like CRUD operations for products and suppliers. The standout feature is its demand prediction model, which forecasts daily demand for each product using a Random Forest Regressor, with training occurring bi-weekly.
          </p>
        </div>

        {/* Metodología */}
        <div className="text-left mb-6">
          <h2 className="text-2xl mb-2 opacity-75">Technologies and Methods</h2>
          <p className="max-w-3xl">
            The backend is built with Flask (Python), using Prisma to manage the MySQL database, while Auth0 is implemented for authentication. The application is hosted on Google Cloud, utilizing Cloud Run for deployment and SQL for the MySQL database.
          </p>
        </div>

        {/* Información del modelo de predicción */}
        <div className="text-left mb-6">
          <h2 className="text-2xl mb-2 opacity-75">Demand Prediction Model</h2>
          <p className="max-w-3xl">
            The demand prediction model leverages a Random Forest Regressor to make daily product demand forecasts. The model is trained bi-weekly to ensure its accuracy in predicting future sales, helping store owners manage inventory and optimize stock levels.
          </p>
        </div>

        {/* Botón de GitHub */}
        <a
          href="https://github.com/susiur/Hackaton" 
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-8 px-8 py-4 bg-tenderos_secondary text-tenderos_primary text-xl font-semibold rounded-3xl shadow-lg hover:bg-transparent hover:border hover:border-tenderos_secondary hover:text-tenderos_secondary transition duration-300 ease-in-out"
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
      <div className="relative z-20 bg-tenderos_secondary text-tenderos_primary text-2xl min-h-screen px-8 md:px-16 lg:px-32 py-16">
        <div className="flex flex-col items-center space-y-16">
          {/* Primera imagen y descripción */}
          <div className="relative w-full rounded-3xl overflow-hidden">
            <div
              style={{
                backgroundImage: `url(${images[1]})`,
                width: '100%',
                height: '340px',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            />
            <h3 className="text-center mt-4 p-4 rounded-lg shadow-lg">
              The application allows store owners to manage products, suppliers, and forecast demand using a sophisticated model.
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
              }}
            />
            <h3 className="text-center mt-4 p-4 rounded-lg shadow-lg">
              The backend is powered by Flask, while Prisma handles database management with MySQL, and Auth0 takes care of authentication.
            </h3>
          </div>
        </div>
      </div>

      {/* Sección secundaria con tres imágenes y texto */}
      <div className="relative z-20 bg-tenderos_primary text-tenderos_secondary text-2xl min-h-screen px-8 md:px-16 lg:px-32 py-16">
        <div className="flex flex-col items-center space-y-16">
          <div className="text-left mb-6">
            <h2 className="text-2xl mb-4 opacity-75">Prediction Model</h2>
            <p className="max-w-3xl">
              This feature enables store owners to visualize demand predictions, track inventory trends, and make data-driven decisions to optimize their business operations.
            </p>
          </div>

          <div className="relative w-full max-w-4xl mb-8 flex flex-col items-center">
            <iframe
              className="rounded-lg shadow-lg animate-fadeIn"
              height="600px"
              width="100%"
              src={`https://www.youtube.com/embed/${videos.analytics}`}
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
            <h3 className="text-center mt-4 p-4">
            The analytics page leverages advanced machine learning models and real-time data updates to ensure accurate and actionable insights, providing users with a competitive edge in inventory management.
            </h3>
          </div>
        </div>
      </div>

      {/* Galería de imágenes */}
      <div className="bg-tenderos_secondary">
        <ProjectGallery />
      </div>
    </div>
  );
};

export default Tenderos;

