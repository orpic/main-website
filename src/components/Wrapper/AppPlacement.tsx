import React, { ReactNode } from "react";

interface AppPlacementProps {
  children: ReactNode;
}

const AppPlacement: React.FC<AppPlacementProps> = ({ children }) => {
  return (
    <div className="h-screen w-screen bg-neutral-900 text-stone-100 ">
      {children}
    </div>
  );
};

export default AppPlacement;
