import React, { useCallback, useRef, useState, useEffect } from "react";
import Canvas from "./componenet/Canvas";
import Hero from "./pages/Hero";
import About from "./pages/About";
import Skills from "./pages/Skills";
import Project from "./pages/Projects";
import Experience from "./pages/Experience";
import Contact from "./pages/Contact";

const App = () => {
  const colors = useRef([
  "#FFB3BA", // Pastel Pink
  "#FFDFBA", // Pastel Peach
  "#FFFFBA", // Pastel Yellow
  "#BAFFC9", // Pastel Mint
  "#BAE1FF", // Pastel Blue
]);
  const [dots, setDots] = useState([]);
  const [canvasOpacity, setCanvasOpacity] = useState(1);

  const generateDots = useCallback((width, height) => {
    const newDots = [];
    for (let i = 0; i < width / 6; i++) {
      newDots.push({
        x: Math.random() * width,
        y: Math.random() * height,
        color: colors.current[Math.floor(Math.random() * colors.current.length)],
      });
    }
    setDots(newDots);
  }, []);

  useEffect(() => {

    generateDots(window.innerWidth, window.innerHeight);
    if(window.innerWidth >= 1000){return;}
    // Handle scroll to fade out canvas
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      
      // Fade out canvas as user scrolls down the first section
      const opacity = Math.max(0, 1 - scrollY / windowHeight);
      setCanvasOpacity(opacity);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [generateDots]);

  return (
    <div className="h-screen overflow-y-auto snap-y snap-mandatory">
      {/* Fixed Canvas Background - only visible on hero */}
      <div style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100dvw",
        height: "100dvh",
        zIndex: 0,
        backgroundColor: "white",
        opacity: canvasOpacity,
        pointerEvents: canvasOpacity > 0 ? "auto" : "none",
        boxShadow: "inset 0px 0px 80px 40px rgba(0,0,0,0.41)",
        // background: "radial-gradient(circle, rgba(255, 255, 255, 1) 0%, rgba(220, 224, 222, 1) 82%, rgba(158, 158, 158, 1) 100%)"
      }}>
        <Canvas dots={dots} />
      </div>
      <Hero/>
      <About/>
      <Project/>
      <Experience/>
      <Skills/>
      <Contact/>
    </div>
  );
};

export default App;