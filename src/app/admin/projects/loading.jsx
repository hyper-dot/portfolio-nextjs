import React from "react";
import Spinner from "@/components/admin/Spinner";

const loading = () => {
  return (
    <div className="w-full h-full flex justify-center items-center">
      <Spinner />
    </div>
  );
};

export default loading;
