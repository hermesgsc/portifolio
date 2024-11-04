import React, { useEffect, useRef, useState } from "react";
import Typewriter from "typewriter-effect";
import { Icon } from "@iconify/react";
import { motion } from "framer-motion";

const HomePage: React.FC = () => {
  const aboutMeRef = useRef<HTMLDivElement>(null);
  const experienceRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);
  const skillsRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);

  const [aboutMeVisible, setAboutMeVisible] = useState(false);
  const [experienceVisible, setExperienceVisible] = useState(false);
  const [projectsVisible, setProjectsVisible] = useState(false);
  const [skillsVisible, setSkillsVisible] = useState(false);
  const [contactVisible, setContactVisible] = useState(false);

  const checkVisibility = () => {
    const elements = [
      { ref: aboutMeRef, setVisible: setAboutMeVisible },
      { ref: experienceRef, setVisible: setExperienceVisible },
      { ref: projectsRef, setVisible: setProjectsVisible },
      { ref: skillsRef, setVisible: setSkillsVisible },
      { ref: contactRef, setVisible: setContactVisible },
    ];

    elements.forEach(({ ref, setVisible }) => {
      if (ref.current) {
        const elementTop = ref.current.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        if (elementTop <= windowHeight && elementTop >= 0) {
          setVisible(true);
        } else {
          setVisible(false);
        }
      }
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", checkVisibility);

    checkVisibility();

    return () => {
      window.removeEventListener("scroll", checkVisibility);
    };
  }, []);

  return (
    <header className="bg-custom-grey">
      <nav className="bg-custom-grey p-4 w-full">
        <ol className="flex justify-center space-x-12 text-custom-3">
          <li className="hover:text-custom-5 transition-colors duration-300 cursor-pointer">
            About me
          </li>
          <li className="hover:text-custom-5 transition-colors duration-300 cursor-pointer">
            Experience
          </li>
          <li className="hover:text-custom-5 transition-colors duration-300 cursor-pointer">
            Projects
          </li>
          <li className="hover:text-custom-5 transition-colors duration-300 cursor-pointer">
            Skills
          </li>
          <li className="hover:text-custom-5 transition-colors duration-300 cursor-pointer">
            Contact
          </li>
          <div className="flex space-x-2">
            <a
              href="https://github.com/hermesgsc"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-custom-5 transition-colors duration-300 cursor-pointer"
            >
              <Icon icon="mdi:github" width="26" height="26" />
            </a>
            <a
              href="https://www.linkedin.com/in/hermes-gabriel-78410b232/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-custom-5 transition-colors duration-300 cursor-pointer"
            >
              <Icon icon="mdi:linkedin" width="26" height="26" />
            </a>
          </div>
        </ol>
      </nav>

      <div className="flex items-center justify-center mt-40 mb-40">
        <div className="p-12 text-center">
          <h1 className="text-3xl font-bold text-custom-5">
            My name is Hermes Gabriel
          </h1>
          <div className="flex items-center mt-4 text-custom-5 gap-3 justify-center">
            <p className="text-xl">And I am a </p>
            <div className="text-white text-xl font-bold">
              <Typewriter
                options={{
                  strings: [
                    "Software developer",
                    "Back-end developer",
                    "Front-end developer",
                  ],
                  autoStart: true,
                  loop: true,
                }}
              />
            </div>
          </div>
        </div>
      </div>

      <motion.div
        ref={aboutMeRef}
        initial={{ opacity: 0, x: -100 }}
        animate={
          aboutMeVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: -100 }
        }
        transition={{ duration: 0.5 }}
        className="text-custom-3 flex justify-center flex-col items-center text-center box"
      >
        <h1 className="text-2xl font-bold text-custom-5">About me</h1>
        <p className="text-xl p-12 px-64">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quia fugiat
          maxime incidunt tempore, facilis quam illo asperiores nihil quae
          libero laborum unde vero, velit a voluptatem aspernatur earum nemo
          exercitationem.
        </p>
      </motion.div>

      <motion.div
        ref={experienceRef}
        initial={{ opacity: 0, x: -100 }}
        animate={
          experienceVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: -100 }
        }
        transition={{ duration: 0.5 }}
        className="text-custom-3 flex justify-center flex-col items-center text-center box"
      >
        <h1 className="text-2xl font-bold text-custom-5">Experience</h1>
        <p className="text-xl p-12 px-64">
          I have worked on a variety of projects, primarily focusing on
          full-stack development. My experience includes building web
          applications, working with APIs, and managing databases.
        </p>
      </motion.div>

      <motion.div
        ref={projectsRef}
        initial={{ opacity: 0, x: -100 }}
        animate={
          projectsVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: -100 }
        }
        transition={{ duration: 0.5 }}
        className="text-custom-3 flex justify-center flex-col items-center text-center box"
      >
        <h1 className="text-2xl font-bold text-custom-5">Projects</h1>
        <p className="text-xl p-12 px-64">
          I have contributed to several open-source projects and have built my
          own projects. Some of these are live on GitHub, and others are
          available for demo upon request.
        </p>
      </motion.div>

      <motion.div
        ref={skillsRef}
        initial={{ opacity: 0, x: -100 }}
        animate={skillsVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: -100 }}
        transition={{ duration: 0.5 }}
        className="text-custom-3 flex justify-center flex-col items-center text-center box"
      >
        <h1 className="text-2xl font-bold text-custom-5">Skills</h1>
        <p className="text-xl p-12 px-64">
          I am proficient in a wide range of technologies including JavaScript,
          TypeScript, Node.js, React, Express, MongoDB, and SQL.
        </p>
      </motion.div>

      <motion.div
        ref={contactRef}
        initial={{ opacity: 0, x: -100 }}
        animate={
          contactVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: -100 }
        }
        transition={{ duration: 0.5 }}
        className="text-custom-3 flex justify-center flex-col items-center text-center box"
      >
        <h1 className="text-2xl font-bold text-custom-5">Contact</h1>
        <p className="text-xl p-12 px-64">
          Feel free to get in touch with me through the following platforms:
          <ul>
            <li>Email: example@example.com</li>
            <li>
              GitHub:{" "}
              <a href="https://github.com/hermesgsc">
                https://github.com/hermesgsc
              </a>
            </li>
            <li>
              LinkedIn:{" "}
              <a href="https://www.linkedin.com/in/hermes-gabriel-78410b232/">
                LinkedIn
              </a>
            </li>
          </ul>
        </p>
      </motion.div>

      <footer className="bg-custom-grey text-center py-6 mt-20">
        <div className="flex justify-center space-x-6">
          <a
            href="https://github.com/hermesgsc"
            target="_blank"
            rel="noopener noreferrer"
            className="text-custom-3 hover:text-custom-5 transition-colors duration-300"
          >
            <Icon icon="mdi:github" width="30" height="30" />
          </a>
          <a
            href="https://www.linkedin.com/in/hermes-gabriel-78410b232/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-custom-3 hover:text-custom-5 transition-colors duration-300"
          >
            <Icon icon="mdi:linkedin" width="30" height="30" />
          </a>
        </div>
        <p className="text-custom-3 mt-4">
          &copy; {new Date().getFullYear()} Hermes Gabriel. All Rights Reserved.
        </p>
      </footer>
    </header>
  );
};

export default HomePage;
