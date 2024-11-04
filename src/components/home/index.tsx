import React from "react";
import Typewriter from "typewriter-effect";
import { Icon } from "@iconify/react";

const HomePage: React.FC = () => (
  <header className="bg-custom-grey">
    <nav className="bg-custom-grey bg-opacity-50 backdrop-blur-lg p-4 items-center">
      <ol className="flex justify-center space-x-12 text-custom-3">
        <li className="hover:text-custom-5 transition-colors duration-300 cursor-pointer">
          About me
        </li>
        <li className="hover:text-custom-5 transition-colors duration-300 cursor-pointer">
          Projects
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

    <div className="flex items-center justify-center">
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
  </header>
);

export default HomePage;
