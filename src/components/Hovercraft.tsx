import React, { useState, useEffect } from "react";
import ProjectGallery from "./ProjectGallery";

const Hovercraft: React.FC = () => {
  const [offsetY, setOffsetY] = useState(0);
  const [visible, setVisible] = useState(false);
  const images = [
    "/Hovercraft2.png",
    "/hovercraft/Deteccionazulesrojos.png",
    "/hovercraft/3Dmodel.jpg",
    "/hovercraft/HovercraftOnWater.jpg",
  ];

  const videos = {
    trial: "-9sBD8sP3qM",
    competition: "/hovercraft/Competencia.mp4",
    servoTest: "vR2CVJwopvc",
    terrestial: "/hovercraft/TerrestialTest.mp4",
    lift: "ug3OcHv8ovA",
  };

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
         
        <div className="absolute bottom-0 w-full h-1/2 bg-gradient-to-t from-hovercraft_secondary to-transparent"></div>

      </div>

      {/* Initial content */}
      <div
        className={`relative z-10 h-screen flex items-end justify-center text-center px-4 md:px-8 pb-16 transform transition-transform duration-1000 ease-in-out ${
          visible ? "-translate-y-24" : "translate-y-0"
        }`}
      >
        <div>
          <h2 className="text-6xl  mb-12 font-heading text-hovercraft_primary">Hovercraft</h2>
          <p className="text-2xl mb-20 font-subtitle text-hovercraft_primary">
            Small hovercraft with artificial vision
          </p>
        </div>
      </div>

      {/* Main content section */}
      <div
        className={`relative z-20 bg-hovercraft_primary text-hovercraft_secondary text-2xl min-h-screen rounded-t-3xl -mb-24 px-8 md:px-16 py-16 flex flex-col items-center transform transition-transform duration-1000 ease-in-out ${
          visible ? "-translate-y-24" : "translate-y-0"
        }`}
      >
        <div className="animate-bounce">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-6 h-6 text-hovercraft_secondary"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </div>
        <div className="flex justify-between items-center w-1/2 mb-8 mt-20">
          <div className="flex flex-col items-center w-full text-center">
            {[
              { label: "Year", value: "2022" },
              { label: "Project Type", value: "Autonomous Hovercraft Development" },
              { label: "Focus", value: "Artificial Vision and Autonomous Navigation" },
              { label: "Platform", value: "Raspberry Pi and OpenCV" },
              { label: "Technology Stack", value: "Python, OpenCV, Radio Control, 3D Printing" },
            ].map((item, index) => (
              <div key={index} className="flex items-center w-full mb-2">
                <span className="mr-2 opacity-75">{item.label}:</span>
                <div className="flex-grow border-t border-hovercraft_secondary mx-2 opacity-75"></div>
                <span>{item.value}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Project Objectives */}
        <div className="text-left mb-6">
          <h2 className="text-hovercraft_secondary text-2xl mb-2 opacity-75">Description</h2>
          <p className="max-w-3xl">
          The Hovercraft project involved designing and building an electronic system for a hovercraft equipped with artificial vision capabilities. The primary objective was to develop a hovercraft capable of navigating both terrestrial and aquatic environments while ensuring safety and operational efficiency. The hovercraft was designed for a competition and included both radio-controlled and autonomous sections.
          The system featured color detection technology using OpenCV, where the camera feed was processed in real-time to detect red and blue markers. These markers were used for path detection: red for left turns and blue for right turns. The project demonstrated the potential for using computer vision in guiding the hovercraft autonomously.
          </p>
        </div>

        {/* Results */}
        <div className="text-left mb-6">
          <h2 className="text-hovercraft_secondary text-2xl mb-2 opacity-75">Results</h2>
          <p className="max-w-3xl">
            The hovercraft successfully identified colored markers in real-time to navigate and make directional decisions autonomously. It demonstrated strong performance in both the terrestrial and aquatic sections of the competition.
          </p>
        </div>
      </div>

      <div className="relative z-20 bg-hovercraft_secondary text-hovercraft_primary text-2xl min-h-screen px-8 md:px-16 lg:px-32 py-16">
       {/* Videos Section */}
       <div className="flex flex-col items-center space-y-16">
          <div className="text-left mb-6">
          <h2 className="text-2xl mb-4 opacity-75">Lift System</h2>
            <p className="max-w-3xl">
              The lift system was constructed using an MDF base covered with tela tempestad (a durable fabric) secured with screws and tape. This combination was a practical choice because the fabric provided the necessary flexibility for air containment, while the screws created small holes on the top surface of the hovercraft, allowing controlled pressure release. A motor was installed to push air beneath the craft, inflating the lower section covered by the fabric, which enabled the hovercraft to lift and glide above the surface. This approach ensured an effective air cushion for both terrestrial and aquatic navigation.
            </p>
          </div>
          <div className="rounded-3xl"
              style={{
                backgroundImage: `url(/hovercraft/mdf-model.jpg)`,
                width: '100%',
                height: '700px',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                transform: `translateY(-${offsetY * 0.}px)`,
                transition: "transform 0.2s ease-out",
              }}
            />
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between lg:space-x-8 mb-6">
            {/* Video a la derecha */}
            <div className="relative w-full max-w-sm lg:max-w-md flex-shrink-0">
            <iframe
              className="rounded-lg shadow-lg animate-fadeIn"
              height="515"
              src={`https://www.youtube.com/embed/${videos.lift}`}
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
            </div>
            <div className="text-left max-w-lg mb-6 lg:mb-0">
              <p>
                This combination was a practical choice because the fabric provided the necessary flexibility for air containment, while the screws created small holes on the top surface of the hovercraft, allowing controlled pressure release. A motor was installed to push air beneath the craft, inflating the lower section covered by the fabric, which enabled the hovercraft to lift and glide above the surface. This approach ensured an effective air cushion for both terrestrial and aquatic navigation.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="relative z-20 bg-hovercraft_primary text-hovercraft_secondary text-2xl min-h-screen px-8 md:px-16 lg:px-32 py-16">
       {/* Videos Section */}
       <div className="flex flex-col items-center space-y-16">
          <div className="text-left mb-6">
          <h2 className="text-2xl mb-4 opacity-75">Propulsion and Chassis</h2>
            <p className="max-w-3xl">
              The chassis was designed and printed using a 3D printer, with the instruction that the design be suitable for rescue operations. Drawing inspiration from real-life rescue vehicles, such as helicopters and lifeboats, the design aimed to provide a structure that could function efficiently in both emergency and everyday situations. The rescue-oriented design allowed the hovercraft to navigate various terrains while keeping stability and maneuverability in mind.
            </p>
          </div>
          <div className="rounded-3xl"
              style={{
                backgroundImage: `url(/hovercraft/DesignEvolution.png)`,
                width: '100%',
                height: '600px',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                transform: `translateY(-${offsetY * 0.}px)`,
                transition: "transform 0.2s ease-out",
              }} 
            />
          <div className="text-left mb-6">
            <p className="max-w-3xl">
              The 3D-printed body provided a lightweight yet strong frame, which was crucial for maintaining stability while operating on both land and water. For directional control, we implemented two servos, which allowed precise adjustments to the hovercraft’s course by managing the airflow produced by the brushless motor. This setup enabled smooth and responsive movement, essential for the hovercraft’s effective performance in dynamic environments.
            </p>
          </div>
          <div className="rounded-3xl"
              style={{
                backgroundImage: `url(/hovercraft/Chasis.JPG)`,
                width: '100%',
                height: '600px',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                transform: `translateY(-${offsetY * 0.}px)`,
                transition: "transform 0.2s ease-out",
              }} 
            />
        </div>
      </div>

      <div className="relative z-20 bg-hovercraft_secondary text-hovercraft_primary text-2xl min-h-screen px-8 md:px-16 lg:px-32 py-16">
        <div className="flex flex-col items-center space-y-16">
          <div className="text-left mb-6">
            <h2 className="text-2xl mb-4 opacity-75">Electronics and Radio Control</h2>
            <p className="max-w-3xl">
              The hovercraft was powered by six rechargeable lithium-ion batteries (18650, 3.7V, 2000mAh each), connected in a configuration of parallel and series circuits to optimize voltage and battery life. This setup powered a 50W brushless motor for propulsion. 
            </p>
          </div>
          <div className="rounded-3xl"
              style={{
                backgroundImage: `url(/hovercraft/Circuit.png)`,
                width: '100%',
                height: '600px',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                transition: "transform 0.2s ease-out",
              }} 
            />
          <div className="text-left mb-6">
            <p className="max-w-3xl">
              Radio control was used for manual navigation, providing flexibility during operation, and ensuring that critical electrical components remained safe and functional throughout the competition.
            </p>
          </div>
          <div className="relative w-full max-w-4xl mb-8 flex flex-col items-center">
            <iframe
              className="rounded-lg shadow-lg animate-fadeIn"
              height="600px"
              width="100%"
              src={`https://www.youtube.com/embed/${videos.servoTest}`}
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
            <h3 className="text-center mt-4 p-4">
              Test of Servo and Brushless Motor using the radio control.
            </h3>
          </div>
        </div>
      </div>
      
      <div className="relative z-20 bg-hovercraft_primary text-hovercraft_secondary text-2xl min-h-screen px-8 md:px-16 lg:px-32 py-16">
        <div className="flex flex-col items-center space-y-16">
          <div className="text-left mb-6">
            <h2 className="text-2xl mb-4 opacity-75">Software and Computer Vision</h2>
            <p className="max-w-3xl">
              For the autonomous section, we implemented a color detection system using a Raspberry Pi connected to a camera to process live video feeds. The system was designed to capture and analyze the surroundings in real-time, enabling the hovercraft to gather critical information for navigation. The Raspberry Pi served as the processing unit, efficiently handling the video input and executing the necessary computations. 
            </p>
          </div>
          <div className="relative w-full max-w-4xl mb-8 flex flex-col items-center">
            <iframe
              className="rounded-lg shadow-lg animate-fadeIn"
              width="100%"
              height="650"
              src={`https://www.youtube.com/embed/${videos.trial}`}
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
            <h3 className="text-center mt-4 p-4">
              Test of color detection and navigation in the boat.
            </h3>
          </div>
          <div className="text-left mb-6">
            <p className="max-w-3xl">
              The software was built using Python and relied on libraries such as NumPy and OpenCV to detect red and blue markers, which indicated left and right turns, respectively. This system allowed the hovercraft to recognize its path and make autonomous decisions, ensuring precise and timely adjustments during the competition, which was crucial for successful navigation through various obstacles.
            </p>
          </div>
          <div className="rounded-3xl"
              style={{
                backgroundImage: `url(/hovercraft/Deteccionazulesrojos.png)`,
                width: '100%',
                height: '600px',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                transition: "transform 0.2s ease-out",
              }} 
            />
        </div>
      </div>
      {/* Image Gallery */}
      <div className="bg-hovercraft_primary">
        <ProjectGallery />
      </div>
    </div>
  );
};

export default Hovercraft;
