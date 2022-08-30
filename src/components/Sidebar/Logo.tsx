import React from "react";

const Logo = () => {
  return (
    <div className="flex items-center mx-6">
      <div className="bg-blue-500 rounded-md w-[50px] h-[50px] text-white mr-3 flex items-center justify-center">
        LOGO
      </div>

      <div>
        <h1 className="font-semibold">Zunar</h1>
        <p className="text-gray-500 font-normal">Dashboard</p>
      </div>
    </div>
  );
};

export default Logo;
