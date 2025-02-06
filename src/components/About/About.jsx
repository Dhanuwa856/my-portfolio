import React, { useState } from "react";
import { FaReact, FaNodeJs } from "react-icons/fa";
import { SiFigma, SiPython } from "react-icons/si";
import { MdGroup } from "react-icons/md";

const AboutSection = () => {
  const [activeTab, setActiveTab] = useState("about");

  return (
    <div className="max-w-5xl mx-auto p-6">
      {/* Toggle Buttons */}
      <div className="flex justify-center mb-8 space-x-4 font-body">
        <button
          onClick={() => setActiveTab("about")}
          className={`px-6 py-2 rounded-md font-semibold transition-colors duration-300 focus:outline-none ${
            activeTab === "about"
              ? "bg-indigo-600 text-white shadow-lg"
              : "bg-gray-200 text-gray-800 hover:bg-gray-300"
          }`}
        >
          About Me
        </button>
        <button
          onClick={() => setActiveTab("skills")}
          className={`px-6 py-2 rounded-md font-semibold transition-colors duration-300 focus:outline-none ${
            activeTab === "skills"
              ? "bg-indigo-600 text-white shadow-lg"
              : "bg-gray-200 text-gray-800 hover:bg-gray-300"
          }`}
        >
          Skills & Qualifications
        </button>
      </div>

      {/* Content Section */}
      <div className="relative">
        {activeTab === "about" && (
          <div
            className="flex flex-col md:flex-row items-center md:space-x-8 px-6  transition-opacity duration-500"
            key="about"
          >
            {/* Details Section */}
            <div className="w-full md:w-1/2 text-center md:text-left mb-8 md:mb-0">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 font-header">
                About Me
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4 font-body text-sm sm:text-base">
                Hi, I'm Dhanushka Rathnayaka. I began my journey in the world of
                technology with a passion for solving problems through code.
                After earning my degree in Computer Science, I quickly realized
                that my true passion lay in building dynamic and responsive web
                applications that provide seamless user experiences.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4 font-body text-sm sm:text-base">
                Over the years, I have honed my skills in frontend and backend
                development, working with technologies like React, Node.js, and
                various modern web frameworks. I thrive on challenges that push
                my creative and technical boundaries, always striving to write
                clean, efficient code that meets both user needs and business
                objectives.
              </p>
              <p className="text-gray-700 leading-relaxed font-body text-sm sm:text-base">
                Beyond coding, I am a lifelong learner who stays up-to-date with
                the latest trends in technology and design. When I'm not working
                on innovative projects, I enjoy contributing to open-source
                communities and mentoring aspiring developers. My goal is to
                build digital experiences that not only look beautiful but also
                drive meaningful interactions and growth.
              </p>
            </div>

            {/* Rotating Image Section */}
            <div className="w-full md:w-1/2 flex items-center justify-center">
              <div className="relative w-60 h-60 sm:w-72 sm:h-72 md:w-80 md:h-80 flex items-center justify-center">
                {/* Rotating Gradient Border */}
                <div
                  className="absolute inset-0 rounded-full p-[5px] animate-spin-slow"
                  style={{
                    background:
                      "conic-gradient(#4F46E5, #9333EA, #22C55E, #4F46E5)",
                    boxShadow:
                      "0 0 50px rgba(79, 70, 229, 0.9), 0 0 100px rgba(79, 70, 229, 0.7)",
                  }}
                />

                {/* Inner Static Circle */}
                <div className="relative w-[95%] h-[95%] bg-white rounded-full flex items-center justify-center ">
                  <img
                    src="/user.png"
                    alt="User"
                    className="absolute -bottom-12 sm:-bottom-14 md:-bottom-16 w-[85%] sm:w-[90%] object-cover transform translate-y-[-15%] rounded-b-full"
                  />
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === "skills" && (
          <div className="p-4 transition-opacity duration-500" key="skills">
            <h2 className="text-3xl font-bold mb-6 font-header">
              Skills & Qualifications
            </h2>
            <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 font-body">
              {/* Frontend Development Card */}
              <div className="p-6 bg-white rounded-lg shadow hover:shadow-xl transition-shadow group">
                <div className="flex items-center space-x-3 mb-4">
                  <FaReact className="text-4xl text-blue-500 transition duration-300 group-hover:drop-shadow-[0_0_10px_rgba(79,70,229,1)]" />
                  <h3 className="text-xl font-semibold">
                    Frontend Development
                  </h3>
                </div>
                <p className="text-gray-600">
                  Experienced in React, Vue, Tailwind CSS, and modern JavaScript
                  frameworks. I have studied web development extensively.
                </p>
              </div>

              {/* Backend Development Card */}
              <div className="p-6 bg-white rounded-lg shadow hover:shadow-xl transition-shadow group">
                <div className="flex items-center space-x-3 mb-4">
                  <FaNodeJs className="text-4xl text-green-500 transition duration-300 group-hover:drop-shadow-[0_0_10px_rgba(34,197,94,1)]" />
                  <h3 className="text-xl font-semibold">Backend Development</h3>
                </div>
                <p className="text-gray-600">
                  Skilled in Node.js, Express, MongoDB, and RESTful APIs.
                </p>
              </div>

              {/* Python Development Card */}
              <div className="p-6 bg-white rounded-lg shadow hover:shadow-xl transition-shadow group">
                <div className="flex items-center space-x-3 mb-4">
                  <SiPython className="text-4xl text-yellow-500 transition duration-300 group-hover:drop-shadow-[0_0_10px_rgba(250,204,21,1)]" />
                  <h3 className="text-xl font-semibold">Python Development</h3>
                </div>
                <p className="text-gray-600">
                  Passionate Python developer with a Harvard computer science
                  background.
                </p>
              </div>

              {/* UI/UX Design Card */}
              <div className="p-6 bg-white rounded-lg shadow hover:shadow-xl transition-shadow group">
                <div className="flex items-center space-x-3 mb-4">
                  <SiFigma className="text-4xl text-purple-500 transition duration-300 group-hover:drop-shadow-[0_0_10px_rgba(147,51,234,1)]" />
                  <h3 className="text-xl font-semibold">UI/UX Design</h3>
                </div>
                <p className="text-gray-600">
                  Focused on user-centric design and creating engaging
                  interfaces with Figma and Adobe XD.
                </p>
              </div>

              {/* Soft Skills Card */}
              <div className="p-6 bg-white rounded-lg shadow hover:shadow-xl transition-shadow group">
                <div className="flex items-center space-x-3 mb-4">
                  <MdGroup className="text-4xl text-indigo-500 transition duration-300 group-hover:drop-shadow-[0_0_10px_rgba(99,102,241,1)]" />
                  <h3 className="text-xl font-semibold">Soft Skills</h3>
                </div>
                <p className="text-gray-600">
                  Strong problem-solving, teamwork, and agile methodologies.
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AboutSection;
