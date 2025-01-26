import React from "react";
import NavigationBar from "./components/NavigationBar/NavigationBar";
import { Toaster } from "react-hot-toast";
import Home from "./Pages/Home";

const App = () => {
  return (
    <>
      <Toaster position="bottom-center" reverseOrder={false} />
      <Home />
    </>
  );
};

export default App;
