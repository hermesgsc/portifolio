/* eslint-disable */

import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { Icon } from "@iconify/react"; // Importa o componente Icon do Iconify

// Tipagem dos props para o componente EncryptButton
interface EncryptButtonProps {
  targetText?: string; // Texto a ser exibido no botão (default: "View more")
  cyclesPerLetter?: number; // Número de ciclos por letra para o efeito de scrambling (default: 2)
  shuffleTime?: number; // Tempo entre os ciclos de scramble (default: 50ms)
  chars?: string; // Conjunto de caracteres para a randomização (default: "!@#$%^&*():{};|,.<>/?")
}

const EncryptButton: React.FC<EncryptButtonProps> = ({
  targetText = "View more", // Texto padrão "View more"
  cyclesPerLetter = 2,
  shuffleTime = 50,
  chars = "!@#$%^&*():{};|,.<>/?",
}) => {
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const [text, setText] = useState<string>(targetText);

  // Função para embaralhar o texto
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

      // Parar o efeito quando atingir o número total de ciclos
      if (pos >= targetText.length * cyclesPerLetter) {
        stopScramble();
      }
    }, shuffleTime);
  };

  // Parar o efeito de scramble e voltar ao texto original
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
      className="group relative overflow-hidden rounded-lg border-[1px] border-neutral-500 bg-neutral-700 px-4 py-2 font-mono font-medium uppercase text-neutral-300 transition-colors hover:text-custom-5"
    >
      <div className="relative z-10 flex items-center gap-2">
        <span>{text} </span>{" "}
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

// Exemplo de como usar o EncryptButton
const Button: React.FC = () => {
  return (
    <div className="grid min-h-[200px] place-content-center p-4">
      {/* Usando o botão EncryptButton com valores padrão */}
      <EncryptButton />
    </div>
  );
};

export default Button;
