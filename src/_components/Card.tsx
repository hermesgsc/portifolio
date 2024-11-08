import React, { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  className?: string;
}

const Card: React.FC<CardProps> = ({ children }) => {
  return (
    <div className="bg-custom-grey-2 border-custom-grey-3  border p-6 rounded-2xl max-w-[1080px]">
      {children}
    </div>
  );
};

export default Card;
