import React, { ReactNode } from "react";

interface AppPlacementProps {
  children: ReactNode;
}

const AppPlacement: React.FC<AppPlacementProps> = ({ children }) => {
  return (
    <div className="h-screen w-screen bg-zinc-100 flex justify-center">
      {children}
    </div>
  );
};

export default AppPlacement;
