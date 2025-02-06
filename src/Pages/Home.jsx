import React from "react";
import Hero from "../components/Hero/Hero";
import NavigationBar from "../components/NavigationBar/NavigationBar";
import AboutSection from "../components/About/About";
import TitleTag from "../components/TitleTag/TitleTag";

const Home = () => {
  return (
    <>
      <NavigationBar />
      <Hero />
      <TitleTag sub_title="about me" />
      <AboutSection />
      <TitleTag sub_title="projects" />
    </>
  );
};

export default Home;
