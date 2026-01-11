import React from "react";
import { motion } from "framer-motion";
import { SiGithub, SiLinkedin } from "react-icons/si";
import { MdEmail } from "react-icons/md";

const Contact = () => {
  const contacts = [
    {
      name: "Email",
      value: "kartavyasharma0987@gmail.com",
      icon: MdEmail,
      link: "mailto:kartavyasharma0987@gmail.com",
      color: "text-red-400",
    },
    {
      name: "GitHub",
      value: "github.com/kartavya21-dot",
      icon: SiGithub,
      link: "https://github.com/kartavya21-dot",
      color: "text-gray-300",
    },
    {
      name: "LinkedIn",
      value: "inkedin.com/in/kartavyasharma3",
      icon: SiLinkedin,
      link: "https://linkedin.com/in/kartavyasharma3",
      color: "text-blue-400",
    },
  ];

  return (
    <section
        id="contact"
      className="min-h-screen snap-start overflow-hidden py-20 flex justify-center"
      style={{
        position: "relative",
        width: "100vw",
        zIndex: 1,
        backgroundImage: "linear-gradient(315deg, #003153 0%, #1B1B1B 74%)",
      }}
    >
      <div className="mx-auto px-8 md:px-16 w-full flex flex-col justify-center">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.1 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-7xl font-bold text-white">
            Get In Touch
          </h2>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "96px" }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="h-1.5 border border-white bg-gradient-to-r from-white to-white/30 rounded-full"
            style={{marginLeft: "47rem"}}
          />
        </motion.div>

        {/* Content */}
        <div className="grid md:grid-cols-2 gap-16 items-center" style={{padding: "10rem"}}>
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="text-white space-y-6 max-w-xl"
          >
            <h3 className="text-3xl font-semibold">
              Let’s build something meaningful.
            </h3>
            <p className="text-lg text-white/80 leading-relaxed">
              I’m open to internships, entry-level roles, and collaborative
              projects. Feel free to reach out if you’d like to discuss ideas,
              opportunities, or just connect.
            </p>
          </motion.div>

          {/* Right Cards */}
          <div className="space-y-8">
            {contacts.map((contact, index) => {
              const Icon = contact.icon;
              return (
                <motion.a
                  key={index}
                  href={contact.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  whileHover={{ scale: 1.03, y: -4 }}
                  className="flex items-center gap-6 rounded-2xl border border-white/20 hover:border-white/40 transition-all duration-300 p-6"
                  style={{
                    background: "rgba(255, 255, 255, 0.05)",
                    backdropFilter: "blur(10px)",
                    WebkitBackdropFilter: "blur(10px)",
                    marginTop: "2rem",
                    padding: "1rem"
                  }}
                >
                  <Icon className={`text-3xl ${contact.color}`} />
                  <div>
                    <p className="text-lg font-medium text-white">
                      {contact.name}
                    </p>
                    <p className="text-white/70">{contact.value}</p>
                  </div>
                </motion.a>
              );
            })}
          </div>
        </div>
      </div>

      {/* Decorative Blobs */}
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-white/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 left-1/4 w-[500px] h-[500px] bg-white/5 rounded-full blur-3xl pointer-events-none" />
    </section>
  );
};

export default Contact;
