/* eslint-disable */

import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { Icon } from "@iconify/react";
import Typography from "./Typography";

interface EncryptButtonProps {
  targetText?: string;
  cyclesPerLetter?: number;
  shuffleTime?: number;
  chars?: string;
  onClick?: () => void;
}

const EncryptButton: React.FC<EncryptButtonProps> = ({
  targetText = "Know me",
  cyclesPerLetter = 2,
  shuffleTime = 50,
  chars = "!@#$%^&*():{};|,.<>/?",
  onClick,
}) => {
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const [text, setText] = useState<string>(targetText);

  const scramble = () => {
    let pos = 0;

    intervalRef.current = setInterval(() => {
      const scrambled = targetText
        .split("")
        .map((char, index) => {
          if (pos / cyclesPerLetter > index) {
            return char;
          }

          const randomCharIndex = Math.floor(Math.random() * chars.length);
          return chars[randomCharIndex];
        })
        .join("");

      setText(scrambled);
      pos++;

      if (pos >= targetText.length * cyclesPerLetter) {
        stopScramble();
      }
    }, shuffleTime);
  };

  const stopScramble = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
    setText(targetText);
  };

  return (
    <motion.button
      whileHover={{ scale: 1.025 }}
      whileTap={{ scale: 0.975 }}
      onMouseEnter={scramble}
      onMouseLeave={stopScramble}
      onClick={onClick} // Pass the onClick prop here
      className="group relative overflow-hidden rounded-lg border-[1px] border-neutral-500 bg-neutral-700 px-4 py-2 font-mono font-medium uppercase text-neutral-300 transition-colors hover:text-custom-5"
    >
      <div className="relative z-10 flex items-center gap-2">
        <Typography>{text}</Typography>
        <Icon
          className="hover:text-custom-5"
          icon="line-md:chevron-small-down"
          width="24"
          height="24"
        />
      </div>
      <motion.span
        initial={{ y: "100%" }}
        animate={{ y: "-100%" }}
        transition={{
          repeat: Infinity,
          repeatType: "mirror",
          duration: 1,
          ease: "linear",
        }}
        className="duration-300 absolute inset-0 z-0 scale-125 bg-gradient-to-t from-indigo-400/0 from-40% via-custom-5 to-indigo-400/0 to-60% opacity-0 transition-opacity group-hover:opacity-100"
      />
    </motion.button>
  );
};

interface ButtonProps {
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({ onClick }) => {
  return (
    <div className="grid min-h-[200px] place-content-center p-4">
      <EncryptButton onClick={onClick} />
    </div>
  );
};

export default Button;
