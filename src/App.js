import React from "react";
import About from "./components/about/about";
import Doing from "./components/doing/doing";
import Footer from "./components/footer/footer";
import Touch from "./components/get-in-touch/touch";
import Landing from "./components/landing/landing";
import NavBar from "./components/navbar/navbar";
import Projects from "./components/projects/projects";
import Services from "./components/services/services";
import "./main.css";
function App() {
  return (
    <div className="App">
      <NavBar />
      <Landing />
      <Doing />
      <About />
      <Services />
      <Projects />
      <Touch />
      <Footer />
    </div>
  );
}

export default App;
