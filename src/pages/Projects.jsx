import React from "react";
import chatty_pc from "../assets/chatty_pc.png";
import chatty_mobile from "../assets/chatty_mobile.png";
import chatty_mobile2 from "../assets/chatty_mobile2.png";
import ngaf_pc from "../assets/ngaf_pc.png";
import ngaf_mobile from "../assets/ngaf_mobile.png";
import ngaf_mobile2 from "../assets/ngaf_mobile2.png";
import ccv_pc from "../assets/ccv_pc.png";
import ccv_mobile from "../assets/ccv_mobile.png";
import ccv_mobile2 from "../assets/ccv_mobile2.png";
import { motion } from "framer-motion";
import { FaGithub, FaGlobe } from "react-icons/fa";

const Project = () => {
  const projects = [
    {
      title: "Chatty — Real-Time Chat Application",
      description:
        "A real-time chat application enabling instant messaging using persistent WebSocket connections, with a focus on low-latency communication and clean frontend–backend integration.",
      tech: ["React", "FastAPI", "WebSockets", "PostgreSQL", "TailwindCSS"],
      live: "https://chat-app-using-fast-api-web-sockets.vercel.app/",
      github:
        "https://github.com/kartavya21-dot/ChatApp-using-FastAPI-WebSockets",
      images: [chatty_mobile2, chatty_mobile, chatty_pc],
    },
    {
      title: "Product Catalog Website",
      description:
        "A full-stack product catalog platform for managing and displaying shop items with category-based organization, secure admin access, and media handling.",
      tech: ["React", "FastAPI", "ImageKit", "PostgreSQL", "TailwindCSS"],
      live: "https://new-generation-aluminium-fabricatio.vercel.app/",
      github:
        "https://github.com/kartavya21-dot/NewGenerationAluminium-Fabrication",
      images: [ngaf_mobile2, ngaf_mobile, ngaf_pc],
    },
    {
      title: "Portfolio Website",
      description:
        "A responsive and animated portfolio website built for a client, focusing on smooth user experience, clean design, and modern UI interactions.",
      tech: ["React", "Framer Motion", "TailwindCSS"],
      live: "https://www.chetancreativemind.com/",
      github:
        "https://github.com/kartavya21-dot/chetan_creative_mind_frontent",
      images: [ccv_mobile2, ccv_mobile, ccv_pc],
    },
  ];

  const sendTo = (link) => {
    console.log(link);
    window.location.href = link;
  };

  return (
    <>
      {/* Individual Project Sections */}
      {projects.map((project, index) => {
        const isOdd = index % 2 === 1;

        return (
          <section
            id="project"
            key={index}
            className="min-h-screen lg:h-screen bg-gradient-to-br from-pink-400 via-red-400 to-orange-500 snap-start overflow-hidden"
            style={{
              position: "relative",
              width: "100vw",
              zIndex: 1,
              backgroundColor: "#003153",
              backgroundImage:
                "linear-gradient(315deg, #003153 0%, #1B1B1B 74%)",
            }}
          >
            {/* Desktop Layout (lg and above) */}
            <div
              className="hidden lg:flex h-full"
              style={{
                flexDirection: isOdd ? "row-reverse" : "row",
              }}
            >
              {/* Images Section - Desktop */}
              <div className="w-6xl relative">
                <motion.img
                  initial={{ opacity: 0, x: isOdd ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: false, amount: 0. }}
                  transition={{ duration: 0.6 }}
                  className="phone-border absolute top-24 z-1 rounded-3xl w-60 transition-transform duration-900 hover:scale-120"
                  style={{ [isOdd ? "right" : "left"]: "900px" }}
                  src={project.images[0]}
                />
                <motion.img
                  initial={{ opacity: 0, x: isOdd ? 50 : -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: false, amount: 0.4 }}
                  transition={{ duration: 0.6 }}
                  className="phone-border absolute top-1/2 z-1 rounded-3xl w-60 transition-transform duration-900 hover:scale-120"
                  style={{ [isOdd ? "right" : "left"]: "40px" }}
                  src={project.images[1]}
                />
                <motion.img
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  whileHover={{ zIndex: 2 }}
                  viewport={{ once: false, amount: 0.4 }}
                  transition={{ duration: 0.6 }}
                  className="absolute top-1/4 rounded-3xl w-4xl transition-transform duration-900 hover:phone-border hover:scale-110"
                  style={{ [isOdd ? "right" : "left"]: "120px" }}
                  src={project.images[2]}
                />
              </div>

              {/* Content Section - Desktop */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: false, amount: 0.4 }}
                transition={{ duration: 0.5 }}
                className="w-3xl text-white flex flex-col align-middle justify-center gap-6"
                style={{ margin: isOdd ? "0 0 0 30px" : "0" }}
              >
                <h1 className="project-font text-4xl">{project.title}</h1>
                <p className="project-font">{project.description}</p>
                <div className="flex w-100 gap-4 flex-wrap">
                  {project.tech.map((t, i) => (
                    <div
                      key={i}
                      className="project-font w-max border border-white rounded-3xl cursor-default transition-transform duration-500 hover:scale-110"
                      style={{ padding: "10px" }}
                    >
                      {t}
                    </div>
                  ))}
                </div>
                <div
                  className="flex justify-start gap-20"
                  style={{ marginTop: "10px" }}
                >
                  <div
                    className="group flex border items-center border-white rounded-4xl gap-8 cursor-pointer transition-transform duration-500 hover:bg-white hover:scale-120"
                    style={{ padding: "15px", paddingRight: "25px" }}
                    onClick={() => sendTo(project.github)}
                  >
                    <FaGithub
                      className="transition-transform duration-500 group-hover:text-black"
                      size={"2.3rem"}
                    />
                    <p className="project-font group-hover:text-black">
                      Github
                    </p>
                  </div>
                  <div
                    className="group flex border items-center border-white rounded-4xl gap-5 cursor-pointer transition-transform duration-500 hover:bg-white hover:scale-120"
                    style={{ padding: "15px", paddingRight: "25px" }}
                    onClick={() => sendTo(project.live)}
                  >
                    <FaGlobe
                      className="transition-transform cursor-pointer duration-500 group-hover:text-black"
                      size={"2.3rem"}
                    />
                    <p className="project-font group-hover:text-black">
                      Visit
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Mobile/Tablet Layout (below lg) */}
            <div className="lg:hidden flex flex-col py-12 px-6 md:px-12 gap-8">
              {/* Project Image - Mobile/Tablet */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.3 }}
                transition={{ duration: 0.6 }}
                className="w-full flex justify-center"
              >
                <img
                  src={project.images[2]}
                  alt={project.title}
                  className="rounded-2xl w-full max-w-2xl shadow-2xl"
                />
              </motion.div>

              {/* Content Section - Mobile/Tablet */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.3 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-white flex flex-col gap-6"
              >
                <h1 className="project-font text-3xl md:text-4xl font-bold">
                  {project.title}
                </h1>
                <p className="project-font text-base md:text-lg leading-relaxed">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex gap-3 flex-wrap">
                  {project.tech.map((t, i) => (
                    <div
                      key={i}
                      className="project-font px-4 py-2 border border-white rounded-full text-sm md:text-base"
                    >
                      {t}
                    </div>
                  ))}
                </div>

                {/* Buttons */}
                <div className="flex gap-4 flex-wrap mt-4">
                  <div
                    className="group flex border items-center border-white rounded-full gap-3 px-6 py-3 cursor-pointer transition-all duration-300 hover:bg-white"
                    onClick={() => sendTo(project.github)}
                  >
                    <FaGithub
                      className="transition-colors duration-300 group-hover:text-black"
                      size={"1.5rem"}
                    />
                    <p className="project-font text-sm md:text-base group-hover:text-black">
                      Github
                    </p>
                  </div>
                  <div
                    className="group flex border items-center border-white rounded-full gap-3 px-6 py-3 cursor-pointer transition-all duration-300 hover:bg-white"
                    onClick={() => sendTo(project.live)}
                  >
                    <FaGlobe
                      className="transition-colors duration-300 group-hover:text-black"
                      size={"1.5rem"}
                    />
                    <p className="project-font text-sm md:text-base group-hover:text-black">
                      Visit
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute -top-20 -right-20 w-80 h-80 bg-yellow-400/10 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-20 -left-20 w-96 h-96 bg-pink-400/10 rounded-full blur-3xl"></div>
          </section>
        );
      })}
    </>
  );
};

export default Project;