import React from "react";
import Typewriter from "typewriter-effect";

const HomePage: React.FC = () => (
  <header className="bg-custom-1 flex items-center justify-center ">
    <div className="p-12 text-center">
      <h1 className="text-3xl font-bold text-custom-5">
        My name is Hermes Gabriel
      </h1>
      <div className="flex items-center mt-4 text-custom-5 gap-3 justify-center">
        <p className="text-xl">And i am a </p>
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
  </header>
);

export default HomePage;
