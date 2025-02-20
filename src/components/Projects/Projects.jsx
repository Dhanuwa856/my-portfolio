import React from "react";
import ReactIcon from "../../assets/tools/react.png";
import TailwindIcon from "../../assets/tools/tailwind.png";
import NodeIcon from "../../assets/tools/nodejs.png";
import MongodbIcon from "../../assets/tools/mongodb.png";
import FirebaseIcon from "../../assets/tools/firebase.png";
import NpmIcon from "../../assets/tools/npm.png";
import ExpressIcon from "../../assets/tools/expressjs.png";

const projectsData = [
  {
    id: 1,
    title: "Hotel Management System",
    imageUrl: "/project01.png",
    description:
      "A responsive web application built with React and Node.js that integrates seamless user experiences and modern design principles. It streamlines hotel operations, allowing guests to book rooms and staff to manage reservations effectively.",
    demoUrl: "https://example.com/demo1",
    codeUrl: "https://github.com/username/project1",
    tools: [
      { name: "React", icon: ReactIcon, url: "https://react.dev/" },
      { name: "Tailwind", icon: TailwindIcon, url: "https://tailwindcss.com/" },
      { name: "MongoDB", icon: MongodbIcon, url: "https://www.mongodb.com/" },
      { name: "Express", icon: ExpressIcon, url: "https://expressjs.com/" },
      {
        name: "Firebase",
        icon: FirebaseIcon,
        url: "https://firebase.google.com/",
      },
      { name: "NPM", icon: NpmIcon, url: "https://www.npmjs.com/" },
      { name: "NodeJS", icon: NodeIcon, url: "https://nodejs.org/" },
    ],
  },
  // Add more project objects as needed
];

const Projects = () => {
  return (
    <div className="m-10 max-w-5xl mx-auto">
      <h2 className="font-header text-3xl font-semibold text-center mb-8">
        My Previous Projects
      </h2>
      <div className="grid grid-cols-1 gap-8">
        {projectsData.map((project) => (
          <div
            key={project.id}
            className="bg-white rounded-lg shadow-lg overflow-hidden transition transform hover:-translate-y-1 hover:shadow-2xl"
          >
            <img
              src={project.imageUrl}
              alt={project.title}
              className="w-full h-64 object-cover"
            />
            <div className="p-6">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">
                {project.title}
              </h3>
              <p className="text-gray-600 text-sm mb-6">
                {project.description}
              </p>
              <div className="mb-4">
                <h4 className="text-lg font-semibold text-gray-800 mb-2">
                  Tools Used
                </h4>
                <div className="grid grid-cols-3 sm:grid-cols-4 gap-2">
                  {project.tools.map((tool, index) => (
                    <a
                      key={index}
                      href={tool.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="transition transform duration-300 hover:scale-110 hover:drop-shadow-[0_0_10px_rgba(250,204,21,1)]"
                    >
                      <img
                        src={tool.icon}
                        alt={tool.name}
                        className="w-10 h-10 object-contain"
                      />
                    </a>
                  ))}
                </div>
              </div>
              <div className="flex justify-between mt-4">
                <a
                  href={project.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
                >
                  Demo
                </a>
                <a
                  href={project.codeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition"
                >
                  Code
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
