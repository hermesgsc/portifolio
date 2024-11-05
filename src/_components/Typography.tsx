// src/components/Typography.tsx
import React from "react";

// Definição dos tipos para as props do componente Typography
interface TypographyProps {
  children: React.ReactNode;
  variant?: "title" | "subtitle" | "body" | "caption"; // Tipos possíveis para o variant
  size?: "small" | "medium" | "large"; // Tipos possíveis para o tamanho
  weight?: "normal" | "bold" | "light"; // Tipos possíveis para o peso da fonte
  align?: "left" | "center" | "right"; // Tipos possíveis para o alinhamento
  className?: string; // Classe adicional para customização
}

const Typography: React.FC<TypographyProps> = ({
  children,
  variant = "body", // Valor padrão 'body'
  weight = "normal", // Valor padrão 'normal'
  align = "left", // Valor padrão 'left'
  className = "", // Valor padrão ''
}) => {
  // Mapeando as variantes para as classes do Tailwind
  const variantClasses: { [key: string]: string } = {
    title: "text-4xl font-extrabold",
    subtitle: "text-2xl font-semibold",
    body: "text-base font-normal",
    caption: "text-sm font-light",
  };

  // Mapeando os tamanhos para as classes do Tailwind

  // Mapeando os pesos para as classes do Tailwind
  const weightClasses: { [key: string]: string } = {
    normal: "font-normal",
    bold: "font-bold",
    light: "font-light",
  };

  // Mapeando os alinhamentos para as classes do Tailwind
  const alignClasses: { [key: string]: string } = {
    left: "text-left",
    center: "text-center",
    right: "text-right",
  };

  // Combinando todas as classes
  const classes = [
    variantClasses[variant] || variantClasses.body, // Valor padrão 'body'
    weightClasses[weight] || weightClasses.normal, // Valor padrão 'normal'
    alignClasses[align] || alignClasses.left, // Valor padrão 'left'
    className, // Classe extra
  ].join(" ");

  return <div className={classes}>{children}</div>;
};

export default Typography;
