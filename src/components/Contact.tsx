import React, { useState } from 'react';

import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa'; // Importar íconos


const Contact: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Form submitted:', { name, email, message });
    setName('');
    setEmail('');
    setMessage('');
  };

  return (
    <section id="contact" className="py-20 bg-white"> 
      <div className="container mx-auto px-4">
        <h2 className="text-4xl  mb-8 text-center text-gray-800">Contact Me</h2>
        
        {/* Redes sociales */}
        <div className="flex justify-center mb-12 space-x-6 text-3xl">
          <a href="https://www.linkedin.com/in/susana-uribe-velasquez/" target="_blank" rel="noopener noreferrer" className="text-gray-800 hover:text-gray-600">
            <FaLinkedin />
          </a>
          <a href="https://github.com/susiur" target="_blank" rel="noopener noreferrer" className="text-gray-800 hover:text-gray-600">
            <FaGithub />
          </a>
          <a href="mailto:susyuribe22@gmail.com" className="text-gray-800 hover:text-gray-600">
            <FaEnvelope />
          </a>
        </div>
        <div className="max-w-2xl mx-auto bg-white p-8 rounded-lg shadow-lg">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-gray-500 focus:ring-gray-500"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-gray-500 focus:ring-gray-500"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
              <textarea
                id="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
                rows={4}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-gray-500 focus:ring-gray-500"
              ></textarea>
            </div>
            <div>
              <button type="submit" className="w-full bg-gray-800 text-white px-4 py-2 rounded hover:bg-gray-600">
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;