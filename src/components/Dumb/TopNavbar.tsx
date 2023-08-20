import React from "react";

interface TopNavbarProps {
  headingText: string;
}

export const TopNavbar: React.FC<TopNavbarProps> = ({ headingText }) => {
  return (
    <div className="tracking-wider h-14 w-full bg-neutral-950 text-zinc-100 text-xl flex items-center pl-2   mb-2">
      {headingText}
    </div>
  );
};
