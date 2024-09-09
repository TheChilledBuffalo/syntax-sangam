import React from "react";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-3xl text-black bg-blue-950">
      {children}
    </div>
  );
};

export default layout;
