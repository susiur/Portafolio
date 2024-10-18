import React from 'react';

interface Project {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "LS-SEG",
    description: "Contributed to the development and deployment of LS-SEG, a module extension for 3D Slicer designed for rapid vertebrae segmentation in lumbar MRI images and Cobb angle calculation. The module leverages a U-Net neural network trained for vertebrae segmentation, significantly reducing the number of input points required for Cobb angle calculation compared to traditional methods. LS-SEG was developed using Python, SimpleITK, and TensorFlow, and was selected for 18th Colombian Computing Congress (18CCC)",
    imageUrl: "/1.png",
    technologies: ["Python", "Slicer3D", "SimpleITK", "TensorFlow"],
    githubUrl: "https://github.com/CARTIGEN/LS-SEG/tree/main/lsseg_slicer_extension/lsseg_slicer_extension/lsseg",
  },
  {
    id: 2,
    title: "Laboratory Coat Detection:",
    description: "Implemented a deep learning solution using YOLO for real-time video analysis near a laboratory entrance. The system was designed to detect individuals and determine whether they were wearing a lab coat, enhancing compliance with safety protocols through automated monitoring and featured a graphical user interface built with Tkinter.",
    imageUrl: "/4.png",
    technologies: ["Python", "YOLO", "Tkinter"],
    githubUrl: "https://github.com/susiur/Labcoat-detection"
  },
  {
      id: 3,
      title: "Hovercraft",
      description: "Designed and built the electronic system for a hovercraft equipped with a camera for path detection. Developed and integrated a color detection program using OpenCV to analyze the camera feed in real-time. The system was designed to recognize and distinguish between red and blue markers, corresponding to right and left turns, respectively.",
      imageUrl: "/6.png",
      technologies: ["Python", "OpenCV", "Raspberry Pi"],
  },
  {
      id: 4,
      title: "Dental Classification",
      description: "Developed a machine learning model to classify different types of teeth using a camera-based system for a dentist. The system was programmed to identify the type of tooth and determine whether it was from the right or left side as the teeth passed in front of the camera.",
      imageUrl: "/2.png",
      technologies: ["Python", "OpenCV", "TensorFlow", "Keras"],
  },
  {
    id: 5,
    title: "Apptibiogram Clone",
    description: "Clone of the Apptibiogram app for analyzing antibiograms. Developed with Flutter, Spring Boot, Java, PostgreSQL, and Docker.",
    imageUrl: "/5.png",
    technologies: ["Flutter", "Spring Boot", "Java", "PostgreSQL", "Docker"],
    githubUrl: "https://github.com/Juanipis/proyecto_medico",
   },
    {
        id: 6,
        title: "Personal Portfolio",
        description: "Designed and built my personal portfolio website using React, Tailwind CSS, and Vercel.",
        imageUrl: "/3.png",
        technologies: ["React", "Tailwind CSS", "Vercel"],
        githubUrl: "https://github.com/susiur/Portfolio",
        liveUrl: "https://susiuribe.vercel.app/",
    },
];

const ProjectCard: React.FC<{ project: Project }> = ({ project }) => (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300 ease-in-out">
      <img
        src={project.imageUrl}
        alt={project.title}
        className="w-full h-48 object-cover"
      />
      <div className="p-6">
        <h3 className="text-2xl font-semibold text-gray-800 mb-3">{project.title}</h3>
        <p className="text-gray-600 mb-4">{project.description}</p>
        <div className="mb-4">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="inline-block bg-[#C5EDD4] text-[#536359] rounded-full px-3 py-1 text-sm font-medium mr-2 mb-2"
            >
              {tech}
            </span>
          ))}
        </div>
        <div className="flex space-x-4">
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#536359] text-white px-4 py-2 rounded hover:bg-[#708779] transition-colors duration-300 ease-in-out"
            >
              GitHub
            </a>
          )}
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#8CA896] text-white px-4 py-2 rounded hover:bg-[#A7C9B4] transition-colors duration-300 ease-in-out"
            >
              Live Demo
            </a>
          )}
        </div>
      </div>
    </div>
  );
  
const Projects: React.FC = () => {
    return (
      <section id="projects" className="py-20 bg-[#F9FAFB]">
        <div className="container mx-auto px-4">
          <h2 className="text-5xl  mb-12 text-center text-[#536359]">
            My Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {projects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      </section>
    );
  };
  
  export default Projects;  