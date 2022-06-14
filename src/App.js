import React from "react";
import About from "./components/about/about";
import Doing from "./components/doing/doing";
import Footer from "./components/footer/footer";
import Touch from "./components/get-in-touch/touch";
import Landing from "./components/landing/landing";
import NavBar from "./components/navbar/navbar";
import Portfolio from "./components/portfolio/Portfolio";
import Services from "./components/services/services";
import "./main.css";
import { Switch, Route } from "react-router-dom";
import Projects from "./components/projects/Projects";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Route exact path="/">
        <Landing />
        <Doing />
        <About />
        <Services />
        <Portfolio />
        <Touch />
      </Route>
      <Route path="/projects">
        <Projects />
      </Route>
      <Footer />
    </div>
  );
}

export default App;
