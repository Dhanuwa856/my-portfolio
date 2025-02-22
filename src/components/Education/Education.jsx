import React, { useEffect, useRef, useState } from "react";
import styled, { keyframes } from "styled-components";
import { FaGraduationCap, FaCode, FaBook, FaUniversity } from "react-icons/fa";

const EducationSection = () => {
  const containerRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const educationData = [
    {
      icon: <FaGraduationCap />,
      title: "Computer Science Degree",
      institution: "Harvard University",
      period: "2024 - Now",
    },
    {
      icon: <FaCode />,
      title: "full stack web development",
      institution: "Skyrek pvt ltd",
      period: "2024",
    },
    {
      icon: <FaBook />,
      title: "Basics and principles of programming",
      institution: "Udemy",
      period: "2023 - 2024",
    },
    {
      icon: <FaUniversity />,
      title: "School Education",
      institution: "Diyathilaka Central College",
      period: "2020 - 2023 (A/L)",
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          const interval = setInterval(() => {
            setActiveIndex((prev) =>
              prev < educationData.length - 1 ? prev + 1 : prev
            );
          }, 800);
          return () => clearInterval(interval);
        }
      },
      { threshold: 0.5 }
    );

    if (containerRef.current) observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, []);

  // Calculate the fill percentage based on activeIndex.
  const progressHeight = (activeIndex / (educationData.length - 1)) * 100;

  return (
    <StyledEducation ref={containerRef}>
      <div className="container">
        {/* Timeline with icons */}
        <div className="timeline">
          {educationData.map((_, i) => (
            <div
              key={i}
              className={`timeline-icon ${i <= activeIndex ? "active" : ""}`}
              style={{ top: `${(i * 100) / (educationData.length - 1)}%` }}
            >
              <div className="icon-wrapper bg-primary">
                {educationData[i].icon}
              </div>
            </div>
          ))}
          <div
            className="progress-line"
            style={{ height: `${progressHeight}%` }}
          />
        </div>

        {/* Education Items */}
        <div className="education-items">
          {educationData.map((item, i) => (
            <div
              key={i}
              className={`education-item bg-gray-100 hover:bg-secondary duration-700 group ${
                i <= activeIndex ? "active" : ""
              }`}
              style={{ top: `${(i * 100) / (educationData.length - 1)}%` }}
            >
              <h3 className="font-header text-3xl font-semibold text-secondary/90 group-hover:text-white duration-700">
                {item.title}
              </h3>
              <p className="font-body text-lg text-gray-500 group-hover:text-white duration-700">
                {item.institution}
              </p>
              <p className="font-body text-gray-400 text-base group-hover:text-white duration-700">
                {item.period}
              </p>
            </div>
          ))}
        </div>
      </div>
    </StyledEducation>
  );
};

const popIn = keyframes`
  0% { transform: scale(0); }
  90% { transform: scale(1.1); }
  100% { transform: scale(1); }
`;

const slideIn = keyframes`
  from { opacity: 0; transform: translateX(-30px); }
  to { opacity: 1; transform: translateX(0); }
`;

const StyledEducation = styled.div`
  padding: 2rem 0 8rem;
  min-height: 100vh;
  display: flex;
  align-items: center;

  .container {
    position: relative;
    max-width: 1200px;
    margin: 0 auto;
    height: 800px;
  }

  .timeline {
    position: absolute;
    left: 50%;
    height: 100%;
    width: 4px;
    transform: translateX(-50%);
    background: #e5e7eb;

    .progress-line {
      position: absolute;
      top: 0;
      width: 100%;
      background: linear-gradient(to bottom, #4f46e5, #9333ea);
      transition: height 0.8s ease-out;
    }

    .timeline-icon {
      position: absolute;
      left: 50%;
      transform: translate(-50%, -50%);
      z-index: 2;

      .icon-wrapper {
        width: 40px;
        height: 40px;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        color: white;
        font-size: 1.2rem;
        opacity: 0;
        animation: ${popIn} 0.5s forwards;
      }

      &.active .icon-wrapper {
        opacity: 1;
      }
    }
  }

  .education-items {
    position: relative;
    height: 100%;

    .education-item {
      position: absolute;
      width: 40%;
      padding: 1.5rem;
      border-radius: 8px;
      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
      opacity: 0;
      transform: translateX(-30px);
      transition: 0.5s;

      &.active {
        opacity: 1;
        transform: translateX(0);
        animation: ${slideIn} 0.5s forwards;
      }

      &:nth-child(even) {
        left: 55%;
      }
      &:nth-child(odd) {
        right: 55%;
      }
    }
  }

  @media (max-width: 768px) {
    .container {
      height: auto;
      padding: 2rem;
    }

    .timeline {
      display: none;
    }

    .education-items .education-item {
      width: 100%;
      position: static;
      margin-bottom: 2rem;
      transform: none !important;

      &:nth-child(even),
      &:nth-child(odd) {
        left: auto;
        right: auto;
      }
    }
  }
`;

export default EducationSection;
