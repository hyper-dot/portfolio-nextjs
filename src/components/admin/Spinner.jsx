import React from "react";

const Spinner = () => {
  return (
    <div className="w-full">
      <div className="flex justify-center items-center h-screen">
        <div className="animate-spin rounded-full h-10 w-10 border-t-4 border-blue-500"></div>
      </div>
    </div>
  );
};

export default Spinner;
