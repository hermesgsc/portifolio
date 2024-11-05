import React, { useState } from "react";
import { Icon } from "@iconify/react"; // Assuming you are using iconify for icons
import Typography from "_components/Typography"; // Assuming you have a Typography component

interface NavbarProps {
  scrollToSection: (ref: React.RefObject<HTMLDivElement>) => void;
  aboutMeRef: React.RefObject<HTMLDivElement>;
  experienceRef: React.RefObject<HTMLDivElement>;
  projectsRef: React.RefObject<HTMLDivElement>;
  skillsRef: React.RefObject<HTMLDivElement>;
  contactRef: React.RefObject<HTMLDivElement>;
}

const Navbar: React.FC<NavbarProps> = ({
  scrollToSection,
  aboutMeRef,
  experienceRef,
  projectsRef,
  skillsRef,
  contactRef,
}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Toggle the menu in mobile view
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-custom-grey p-4 w-full">
      <div className="flex justify-between items-center">
        <div className="text-xl text-white sm:hidden">Hermes dev</div>

        <ol className="justify-center space-x-12 text-custom-3 hidden md:flex w-full">
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

        {/* Hamburger Menu for Mobile */}
        <button
          onClick={toggleMenu}
          className="md:hidden text-white relative z-10"
        >
          <div
            className={`w-6 h-1 bg-white my-1 rounded transition-all duration-300 ${
              isMenuOpen ? "rotate-45 translate-y-2" : ""
            }`}
          ></div>
          <div
            className={`w-6 h-1 bg-white my-1 rounded transition-all duration-300 ${
              isMenuOpen ? "opacity-0" : ""
            }`}
          ></div>
          <div
            className={`w-6 h-1 bg-white my-1 rounded transition-all duration-300 ${
              isMenuOpen ? "-rotate-45 -translate-y-2" : ""
            }`}
          ></div>
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden bg-custom-grey w-full fixed top-0 left-0 p-4 transition-all duration-300 ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <ol className="space-y-4 text-custom-3">
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
          <div className="flex justify-center space-x-4 mt-4">
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
      </div>
    </nav>
  );
};

export default Navbar;
