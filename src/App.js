import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/NavBar/navbar";
import Intro from "./components/Intro/Intro";
import Skills from "./components/Skills/Skills";
import Works from "./components/Works/Works";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";

function App(){

  const [skills, setSkills] = useState([
    {
      id: 1,
      title: "example title",
      content: "example content",
      image: "https://i.imgur.com/example.jpg"
    },
    {
      id: 2,
      title: "example title",
      content: "This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
      image: "https://i.imgur.com/example.jpg"
    },
    {
      id: 3,
      title: "example title",
      content: "example content",
      image: "https://i.imgur.com/example.jpg"
    },
    ]);


  return(
      <div className="App">
        <Navbar/>
        <Intro/>
        <Skills skills={skills}/>
        <Works/>
        <Contact/>
        <Footer/>
      </div>
  );
}
export default App
