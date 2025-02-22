import React from "react";
import { FiGithub, FiExternalLink } from "react-icons/fi";
import { useInView } from "react-intersection-observer";

const ProjectsSection = () => {
  const projects = [
    {
      title: "Hotel booking system",
      description:
        "Full-stack Hotel booking system solution with React & Node.js",
      tags: [
        "React",
        "NodeJS",
        "MongoDB",
        "ExpressJS",
        "Tailwind CSS",
        "Firebase",
      ],
      links: {
        github: "https://github.com/Dhanuwa856/hotel-booking-frontend.git",
        demo: "https://hotel-booking-frontend-ruddy.vercel.app/",
      },
      image: "/project01.png",
    },
    {
      title: "Makaan Frontend Development",
      description: "Figma design turned into a pixel-perfect react site",
      tags: ["React", "Tailwind CSS", "Figma", "NPM", "Motion"],
      links: {
        github: "https://github.com/Dhanuwa856/React-Dummy-Website-01.git",
        demo: "https://dhanuwa856.github.io/React-Dummy-Website-01/",
      },
      image: "/project02.png",
    },
    {
      title: "Movie search app",
      description:
        "A React app that returns relevant information when you search for the name and year of the movie.",
      tags: ["React", "axios", "omdbapi", "javascript"],
      links: {
        github: "https://github.com/Dhanuwa856/movie-details-app.git",
        demo: "https://dhanuwa856.github.io/movie-details-app/",
      },
      image: "/project03.png",
    },
    {
      title: "E-commerce Dashboard",
      description: "Create a dashboard for an e-commerce website",
      tags: ["React", "Supabase", "Firebase", "JWT", "Tailwind CSS"],
      links: {
        github: "https://github.com/Dhanuwa856/E-Commerce-frontend.git",
        demo: "#",
      },
      image: "/project04.png",
    },
  ];

  return (
    <section className="py-16 bg-transparent text-center">
      <div className="container mx-auto px-4 grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </section>
  );
};

const ProjectCard = ({ project }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
    rootMargin: "-50px 0px",
  });

  return (
    <div
      ref={ref}
      className={`bg-gray-200 rounded-lg shadow-md overflow-hidden transform transition-all duration-500
        ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}
        hover:scale-105 hover:shadow-[0_0_20px_rgba(79,70,229,0.8)]`}
    >
      {project.image && (
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-48 object-cover"
        />
      )}
      <div className="p-4">
        <h3 className="text-2xl font-semibold text-gray-900 mb-2 font-header">
          {project.title}
        </h3>
        <p className="text-gray-600 font-body">{project.description}</p>
        <div className="mt-4 flex flex-wrap gap-2">
          {project.tags.map((tag, i) => (
            <span
              key={i}
              className="bg-blue-100 text-[#4F46E5] px-2 py-1 rounded-full text-[12px] font-body font-medium"
            >
              {tag}
            </span>
          ))}
        </div>
        <div className="mt-4 flex gap-4 justify-center">
          <a
            href={project.links.github}
            aria-label="GitHub"
            className="text-gray-600 hover:text-[#4F46E5] transition-colors"
          >
            <FiGithub size={20} />
          </a>
          <a
            href={project.links.demo}
            aria-label="Demo"
            className="text-gray-600 hover:text-[#4F46E5] transition-colors"
          >
            <FiExternalLink size={20} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectsSection;
