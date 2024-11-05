import React, { useEffect, useRef, useState } from "react";
import Typewriter from "typewriter-effect";
import { motion } from "framer-motion";
import Typography from "_components/Typography"; // Assuming you have a Typography component
import Navbar from "_components/Navbar"; // Assuming you have a Navbar component

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

  // Function to check visibility of sections on scroll
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

        // Check if the section is visible in the viewport
        if (elementTop <= windowHeight && elementTop >= 0) {
          setVisible(true);
        } else {
          setVisible(false);
        }
      }
    });
  };

  // Hook to track scroll and update visibility
  useEffect(() => {
    window.addEventListener("scroll", checkVisibility);
    checkVisibility(); // Call it initially when the page loads

    return () => {
      window.removeEventListener("scroll", checkVisibility);
    };
  }, []);

  // Scroll to section function
  const scrollToSection = (ref: React.RefObject<HTMLDivElement>) => {
    if (ref.current) {
      window.scrollTo({
        top: ref.current.offsetTop,
        behavior: "smooth",
      });
    }
  };

  return (
    <header className="bg-custom-grey">
      <Navbar
        scrollToSection={scrollToSection}
        aboutMeRef={aboutMeRef}
        experienceRef={experienceRef}
        projectsRef={projectsRef}
        skillsRef={skillsRef}
        contactRef={contactRef}
      />

      {/* Introduction Section */}
      <div className="flex items-center justify-center mt-48">
        <div className="p-12 text-center">
          <Typography
            variant="title"
            weight="bold"
            align="center"
            className="text-custom-5 text-xl sm:text-2xl md:text-4xl"
          >
            My name is <strong>Hermes Gabriel</strong>
          </Typography>

          <div className="flex items-center mt-4 text-custom-5 gap-3 justify-center">
            <Typography
              className="max-w-[520px] text-sm sm:text-base md:text-xl"
              variant="subtitle"
              weight="normal"
              align="center"
            >
              And I am a
            </Typography>
            <div className="text-white font-bold max-w-[520px] text-sm sm:text-base md:text-xl">
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
        className=" text-custom-3 flex flex-col md:flex-row justify-center items-center text-center md:text-left box"
      >
        <div className="flex-1 p-12 order-1 md:order-2 pt-36">
          <Typography
            variant="title"
            weight="bold"
            align="center"
            className="text-custom-5 mb-6 text-xl sm:text-2xl md:text-3xl"
          >
            About Me
          </Typography>
          <Typography
            variant="body"
            weight="normal"
            align="center"
            className="leading-8 text-sm sm:text-base md:text-lg"
          >
            I&apos;m 21 years old, born in{" "}
            <strong className="cursor-default hover:text-green-500 transition-colors duration-300">
              Brazil
            </strong>
            . Currently, I&apos;m pursuing a degree in Information Systems at
            Montes Claros State University. I have a deep passion for web
            development, starting in front-end, but I found my true calling in
            back-end development. My interest in programming and development
            began when I was a child. Throughout my life, I&apos;ve always been
            passionate about technology and games, which has significantly
            contributed to my growth and knowledge in programming.
          </Typography>
        </div>
      </motion.div>

      {/* Section "Experience" */}
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
          className="text-custom-5 text-xl sm:text-2xl md:text-3xl"
        >
          Experience
        </Typography>
        <Typography
          variant="body"
          weight="normal"
          align="center"
          className="p-12  text-sm sm:text-base md:text-lg"
        >
          I have worked on a variety of projects, primarily focusing on
          full-stack development. My experience includes building web
          applications, working with APIs, and managing databases.
        </Typography>
      </motion.div>

      {/* Section "Projects" */}
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
          className="text-custom-5 text-xl sm:text-2xl md:text-3xl"
        >
          Projects
        </Typography>
        <Typography
          variant="body"
          weight="normal"
          align="center"
          className="p-12  text-sm sm:text-base md:text-lg"
        >
          I have contributed to several open-source projects and have built my
          own projects. Some of these are live on GitHub, and others are
          available for demo upon request.
        </Typography>
      </motion.div>

      {/* Section "Skills" */}
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
          className="text-custom-5 text-xl sm:text-2xl md:text-3xl"
        >
          Skills
        </Typography>
        <Typography
          variant="body"
          weight="normal"
          align="center"
          className="p-12 text-sm sm:text-base md:text-lg"
        >
          I am proficient in a wide range of technologies including JavaScript,
          React, Node.js, Express, MongoDB, and more. I am always looking to
          expand my knowledge and tackle new challenges.
        </Typography>
      </motion.div>

      {/* Section "Contact" */}
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
          className="text-custom-5 text-xl sm:text-2xl md:text-3xl"
        >
          Contact
        </Typography>
        <Typography
          variant="body"
          weight="normal"
          align="center"
          className="p-12  text-sm sm:text-base md:text-lg"
        >
          Feel free to reach out to me via email or LinkedIn for any
          opportunities, collaboration, or questions.
        </Typography>
      </motion.div>
    </header>
  );
};

export default HomePage;
