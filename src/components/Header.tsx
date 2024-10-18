import React from 'react';
import { useNavigate } from 'react-router-dom';

const Header: React.FC = () => {
  const navigate = useNavigate();
    return (
      <header className="fixed top-0 left-0 right-0 z-10 p-4 flex justify-between items-center">
        <button 
        onClick={() => navigate('/')}
        className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
      </header>
    );
  };  

export default Header;