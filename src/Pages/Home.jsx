import React from "react";
import Hero from "../components/Hero/Hero";
import NavigationBar from "../components/NavigationBar/NavigationBar";
import AboutSection from "../components/About/About";
import TitleTag from "../components/TitleTag/TitleTag";
import Projects from "../components/Projects/Projects";
import Skills from "../components/Skills/Skills";
import EducationSection from "../components/Education/Education";

const Home = () => {
  return (
    <>
      <NavigationBar />
      <Hero />
      <TitleTag sub_title="about me" />
      <AboutSection />
      <TitleTag sub_title="My Skills" />
      <Skills />
      <TitleTag sub_title="education" />
      <EducationSection />
    </>
  );
};

export default Home;
