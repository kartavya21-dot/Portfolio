import React from "react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <section
      id="about"
      className="h-screen snap-start flex items-center justify-center overflow-hidden py-16 sm:py-20 px-4"
      style={{
        position: "relative",
        width: "100dvw",
        zIndex: 1,
        backgroundImage: "linear-gradient(315deg, #003153 0%, #1B1B1B 74%)",
      }}
    >
      {/* Main Content Container */}
      <motion.div
        className="max-w-6xl mx-auto w-full px-4 sm:px-8 md:px-16"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.2 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="flex flex-col items-center md:items-start gap-10 sm:gap-12">
          {/* Header */}
          <div style={{alignSelf: "start", marginLeft:"1rem"}}>
            <motion.h2
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="project-font text-5xl font-bold text-white mb-4"
            >
              Who I Am
            </motion.h2>
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: "80px" }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="h-1 bg-gradient-to-r from-white to-white/30 rounded-full"
            />
          </div>

          {/* Description */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            style={{
              background: "rgba(255, 255, 255, 0.04)",
              backdropFilter: "blur(10px)",
              WebkitBackdropFilter: "blur(10px)",
              border: "1px solid rgba(255, 255, 255, 0.12)",
              padding: "0.6rem",
              marginTop: "-2rem",
              marginLeft: "0.3rem",
              alignSelf: "start"
            }}
            className="w-90 md:w-auto"
          >
            <p className="project-font text-sm md:text-xl lg:text-2xl leading-relaxed text-white/90">
              I am a full-stack developer with a strong focus on building{" "}
              <span className="text-white font-semibold">clean, functional web applications</span>.
              I enjoy working close to the fundamentals — understanding how systems communicate,
              how data flows, and how user interactions translate into backend logic.
            </p>
          </motion.div>

          {/* How I Work */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h3 className="project-font text-xl sm:text-3xl md:text-4xl font-semibold text-white mb-6" style={{alignSelf: "start", marginLeft:"0.4rem"}}>
              How I Work
            </h3>

            <div
              style={{
                background: "rgba(255, 255, 255, 0.05)",
                backdropFilter: "blur(12px)",
                WebkitBackdropFilter: "blur(12px)",
                border: "1px solid rgba(255, 255, 255, 0.15)",
                padding: "1rem"
              }}
              className="p-8 w-90 md:w-auto rounded-2xl"
            >
              <ul className="space-y-5">
                {["Break problems into small, testable components","Design backend logic before building the UI","Focus on clarity, correctness, and maintainability"].map((item, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="flex gap-4 text-sm sm:text-base md:text-lg text-white/90"
                  >
                    <span className="text-white">→</span>
                    <span className="project-font">{item}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* Footer Note */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="pl-4 border-l-2 border-white/30"
          >
            <p className="project-font text-xs text-white/60 italic">
              Outside of coding, I practice origami and sketching — habits that reinforce patience and attention to detail.
            </p>
          </motion.div>
        </div>
      </motion.div>

      {/* Decorative Blobs */}
      <div className="absolute top-1/4 right-1/4 w-64 sm:w-80 md:w-96 h-64 sm:h-80 md:h-96 bg-white/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 left-1/4 w-72 sm:w-96 md:w-[500px] h-72 sm:h-96 md:h-[500px] bg-white/5 rounded-full blur-3xl pointer-events-none" />
    </section>
  );
};

export default About;