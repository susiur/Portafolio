import React from 'react';
import { Link } from 'react-router-dom';

const NotFoundPage: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-light-gray"> {/* Fondo gris claro */}
    
      <div className="text-center animate-fadeIn">
        <h1 className="text-7xl font-extrabold text-[#8CA896] mb-4">404</h1> {/* Azul oscuro */}
        <p className="text-2xl font-medium text-[#A7C9B4] mb-8">
          Oops! The page you're looking for doesn't exist.
        </p> {/* Azul claro */}
      </div>

      <div className="mb-8">
        <img
          src="/assets/404-error.svg"  
          alt="Page not found"
          className="w-64 h-64 object-contain mx-auto"
        />
      </div>

      <Link
        to="/"
        className="bg-light-blue text-white text-lg font-semibold px-6 py-3 rounded-full shadow-lg hover:bg-dark-blue transition-all duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-light-blue" 
      > {/* Botón azul claro, que se oscurece al pasar el mouse */}
        Take me home
      </Link>
    </div>
  );
};

export default NotFoundPage;