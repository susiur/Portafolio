import React from "react";
import { useLocation } from "react-router-dom";
import projectsData from '../data/projects.json'; // Importamos el JSON

const ProjectGallery: React.FC = () => {
  const location = useLocation(); // Get current location

  const filteredProjects = projectsData.filter(
    (project) => project.link !== location.pathname
  );

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 bg-lsseg_secondary">
      {filteredProjects.map((project, index) => (
        <div
          key={index}
          className="relative overflow-hidden group shadow-lg"
          onClick={() => (window.location.href = project.link)}
          style={{ backgroundColor: project.color }}
        >
          <img
            src={project.image}
            alt={`Image ${index + 1}`}
            className="object-cover w-full h-80 transition-transform duration-600 scale-100 group-hover:scale-110"
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
  );
};

export default ProjectGallery;
