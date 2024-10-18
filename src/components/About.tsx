import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import projects from '../data/projects.json';

export default function AboutPage() {
  const [scrollPosition, setScrollPosition] = useState(0)
  const navigate = useNavigate();
  useEffect(() => {
    const handleScroll = () => {
      const position = window.pageYOffset
      setScrollPosition(position)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <div className="bg-gray-900 text-gray-100 min-h-screen">
      <header className="fixed top-0 left-0 right-0 z-10 p-4 flex justify-between items-center">
        <button 
        onClick={() => navigate('/')}
        className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <button className="text-gray-400 hover:text-gray-200">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </header>

      <div 
        className="relative h-[50vh] md:h-[70vh] transition-all duration-500 ease-in-out overflow-hidden bg-cover bg-center"
        style={{ backgroundImage: 'url(Yo.jpg)', height: `${Math.max(30, 70 - scrollPosition / 5)}vh` }}
      />

      <main className="relative z-10 bg-gray-900 p-4 max-w-screen-md mx-auto text-2xl py-16">
        
        <h1 className="text-7xl font-heading mb-8 text-center py-6">About</h1>
        <br/>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
          <div>
            <p className="text-gray-400">Location</p>
            <p>Medellín, Colombia</p>
          </div>
          <div>
            <p className="text-gray-400">Experience</p>
            <p>Specializing in AI and Software Development</p>
          </div>
          <div>
            <p className="text-gray-400">Freelance</p>
            <p>Available</p>
          </div>
        </div>

        <p className="mb-8">
          I am a System and Computing Engineering student specializing in software development, machine learning, and computer vision. My focus is on applying AI solutions to real-world scenarios, especially in healthcare and robotics. I also enjoy hiking and painting in my free time.
        </p>

        <h2 className="text-2xl font-bold mb-4">Work Experience</h2>

        <div className="space-y-8">
          <div>
            <h3 className="text-xl font-semibold">Kuenta S.A.S</h3>
            <p className="text-gray-400">2023 — Present</p>
            <p className="text-gray-400">Software Developer</p>
            <p>I have analyzed identity documents using computer vision and machine learning techniques, including OCR, barcode reading, facial recognition, and liveness detection in Python. I developed and trained most of the models for accurate and efficient document analysis, while also creating a perspective corrector for IDs using OpenCV. I utilized Docker to ensure consistent application performance across different environments and built gRPC microservices for seamless communication between application components. Additionally, I improved document processing speed by optimizing machine learning workflows, making the system faster and more reliable.</p>
          </div>
        </div>
      </main>
      
      <div className="grid grid-cols-1 bg-lsseg_secondary">
      {projects.map((project, index) => (
        <div
          key={index}
          className="relative overflow-hidden group shadow-lg"
          onClick={() => (window.location.href = project.link)}
          style={{ backgroundColor: project.color }}
        >
          <img
            src={project.image}
            alt={`Image ${index + 1}`}
            className="object-cover w-full h-40 transition-transform duration-600 scale-100 group-hover:scale-110"
          />
          <div
            className="absolute inset-0 bg-opacity-100 opacity-100 transition-opacity duration-300 group-hover:opacity-0 flex items-center justify-center"
            style={{ backgroundColor: project.color }}
          >
            <span className={`font-heading text-2xl`}
            style={{ color: project.secondaryColor}}>{project.name}</span>
          </div>
        </div>
      ))}
    </div>
    </div>
  )
}
