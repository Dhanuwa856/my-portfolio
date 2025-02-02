import React from "react";
import Hero from "../components/Hero/Hero";
import NavigationBar from "../components/NavigationBar/NavigationBar";
import AboutSection from "../components/About/About";

const Home = () => {
  return (
    <>
      <NavigationBar />
      <Hero />
      <AboutSection />
    </>
  );
};

export default Home;
