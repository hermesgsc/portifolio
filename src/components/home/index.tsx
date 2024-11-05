import React, { useEffect, useRef, useState } from "react";
import Typewriter from "typewriter-effect";
import { Icon } from "@iconify/react";
import { motion } from "framer-motion";
import Typography from "_components/Typography";

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

  // Função para verificar a visibilidade das seções
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

        // Verifica se a seção está visível na tela
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
    checkVisibility(); // Chama a função ao carregar a página

    return () => {
      window.removeEventListener("scroll", checkVisibility);
    };
  }, []);

  const scrollToSection = (ref: React.RefObject<HTMLDivElement>) => {
    ref.current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <header className="bg-custom-grey">
      {/* Menu de Navegação */}
      <nav className="bg-custom-grey p-4 w-full">
        <ol className="flex justify-center space-x-12 text-custom-3">
          <li
            className="hover:text-custom-5 transition-colors duration-300 cursor-pointer"
            onClick={() => scrollToSection(aboutMeRef)}
          >
            <Typography variant="body" weight="normal" align="center">
              About me
            </Typography>
          </li>
          <li
            className="hover:text-custom-5 transition-colors duration-300 cursor-pointer"
            onClick={() => scrollToSection(experienceRef)}
          >
            <Typography variant="body" weight="normal" align="center">
              Experience
            </Typography>
          </li>
          <li
            className="hover:text-custom-5 transition-colors duration-300 cursor-pointer"
            onClick={() => scrollToSection(projectsRef)}
          >
            <Typography variant="body" weight="normal" align="center">
              Projects
            </Typography>
          </li>
          <li
            className="hover:text-custom-5 transition-colors duration-300 cursor-pointer"
            onClick={() => scrollToSection(skillsRef)}
          >
            <Typography variant="body" weight="normal" align="center">
              Skills
            </Typography>
          </li>
          <li
            className="hover:text-custom-5 transition-colors duration-300 cursor-pointer"
            onClick={() => scrollToSection(contactRef)}
          >
            <Typography variant="body" weight="normal" align="center">
              Contact
            </Typography>
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

      {/* Introdução */}
      <div className="flex items-center justify-center mt-48">
        <div className="p-12 text-center">
          <Typography
            variant="title"
            weight="bold"
            align="center"
            className="text-custom-5"
          >
            My name is <strong>Hermes Gabriel</strong>
          </Typography>
          <div className="flex items-center mt-4 text-custom-5 gap-3 justify-center">
            <Typography variant="subtitle" weight="normal" align="center">
              And I am a
            </Typography>
            <div className="text-white text-2xl font-bold">
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

      {/* Seção "About Me" */}
      <section id="about-me" ref={aboutMeRef} className="p-6 m-32">
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={
            aboutMeVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: -100 }
          }
          transition={{ duration: 0.5 }}
          className="text-custom-3 flex flex-col md:flex-row justify-center items-center text-center md:text-left box"
        >
          <div className="flex-1 order-2 md:order-1 flex justify-center items-center mb-8 md:mb-0">
            <img
              src="https://media.licdn.com/dms/image/v2/D4D03AQHAiCeAMl_VLA/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1695060086524?e=1736380800&v=beta&t=i9VFNajnymZQcxUD7QjQysg_Ryc97zyuNFP_L0fwVhg"
              alt="Profile"
              className="w-72 h-72 rounded-full"
            />
          </div>

          <div className="flex-1 p-12 order-1 md:order-2">
            <Typography
              variant="title"
              weight="bold"
              align="center"
              className="text-custom-5 mb-6"
            >
              About me
            </Typography>
            <Typography
              variant="body"
              weight="normal"
              align="left"
              className="leading-8"
            >
              I&apos;m 21 years old, born in{" "}
              <strong className="cursor-default hover:text-green-500 transition-colors duration-300">
                Brazil
              </strong>
              . Currently, I&apos;m pursuing a degree in Information Systems at
              Montes Claros State University. I have a deep passion for web
              development, starting in front-end, but I found my true calling in
              back-end development. My interest in programming and development
              began when I was a child. Throughout my life, I&apos;ve always
              been passionate about technology and games, which has
              significantly contributed to my growth and knowledge in
              programming.
            </Typography>
          </div>
        </motion.div>
      </section>

      {/* Seção "Experience" */}
      <motion.div
        ref={experienceRef}
        initial={{ opacity: 0, x: -100 }}
        animate={
          experienceVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: -100 }
        }
        transition={{ duration: 0.5 }}
        className="text-custom-3 flex justify-center flex-col items-center text-center box"
      >
        <Typography
          variant="title"
          weight="bold"
          align="center"
          className="text-custom-5"
        >
          Experience
        </Typography>
        <Typography
          variant="body"
          weight="normal"
          align="center"
          className="p-12 px-64"
        >
          I have worked on a variety of projects, primarily focusing on
          full-stack development. My experience includes building web
          applications, working with APIs, and managing databases.
        </Typography>
      </motion.div>

      {/* Seção "Projects" */}
      <motion.div
        ref={projectsRef}
        initial={{ opacity: 0, x: -100 }}
        animate={
          projectsVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: -100 }
        }
        transition={{ duration: 0.5 }}
        className="text-custom-3 flex justify-center flex-col items-center text-center box"
      >
        <Typography
          variant="title"
          weight="bold"
          align="center"
          className="text-custom-5"
        >
          Projects
        </Typography>
        <Typography
          variant="body"
          weight="normal"
          align="center"
          className="p-12 px-64"
        >
          I have contributed to several open-source projects and have built my
          own projects. Some of these are live on GitHub, and others are
          available for demo upon request.
        </Typography>
      </motion.div>

      {/* Seção "Skills" */}
      <motion.div
        ref={skillsRef}
        initial={{ opacity: 0, x: -100 }}
        animate={skillsVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: -100 }}
        transition={{ duration: 0.5 }}
        className="text-custom-3 flex justify-center flex-col items-center text-center box"
      >
        <Typography
          variant="title"
          weight="bold"
          align="center"
          className="text-custom-5"
        >
          Skills
        </Typography>
        <Typography
          variant="body"
          weight="normal"
          align="center"
          className="p-12 px-64"
        >
          I am proficient in a wide range of technologies including JavaScript,
          React, Node.js, Express, MongoDB, and more. I am always looking to
          expand my knowledge and tackle new challenges.
        </Typography>
      </motion.div>

      {/* Seção "Contact" */}
      <motion.div
        ref={contactRef}
        initial={{ opacity: 0, x: -100 }}
        animate={
          contactVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: -100 }
        }
        transition={{ duration: 0.5 }}
        className="text-custom-3 flex justify-center flex-col items-center text-center box"
      >
        <Typography
          variant="title"
          weight="bold"
          align="center"
          className="text-custom-5"
        >
          Contact
        </Typography>
        <Typography
          variant="body"
          weight="normal"
          align="center"
          className="p-12 px-64"
        >
          Feel free to reach out to me via email or LinkedIn for any
          opportunities, collaboration, or questions.
        </Typography>
      </motion.div>
    </header>
  );
};

export default HomePage;
