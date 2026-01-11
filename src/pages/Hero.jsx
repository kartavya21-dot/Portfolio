import React from "react";

const Hero = () => {
  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  const downloadResume = () => {
    const link = document.createElement("a");
    link.href = "/Kartavya_Resume.pdf";
    link.download = "Kartavya_Sharma_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section className="h-screen snap-start relative z-10 flex flex-col items-center justify-center text-center px-6 sm:px-10">
      {/* Heading */}
      <h1 className="font-bold leading-tight text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl">
        Hello, I’m{" "}
        <span className="text-red-500 block sm:inline">Kartavya Sharma</span>
      </h1>

      {/* Subtitle */}
      <p className="mt-6 text-lg relative top-1  md:top-0 sm:text-xl md:text-2xl lg:text-3xl max-w-3xl">
        Full-Stack Developer{" "}
        <span className="text-blue-800">(React • FastAPI)</span>
        <br className="hidden sm:block" />
        Building real-time, scalable web applications
      </p>

      {/* Buttons */}
      <div className="relative top-5 flex flex-col sm:flex-row gap-4 sm:gap-6">
        <button
          onClick={() => scrollToSection("project")}
          className="glass-button text-base sm:text-lg md:text-xl font-semibold px-6 py-3"
        >
          View Projects
        </button>
        <button
          onClick={downloadResume}
          className="glass-button text-base sm:text-lg md:text-xl font-semibold px-6 py-3"
        >
          Download Resume
        </button>
      </div>
    </section>
  );
};

export default Hero;
