import React from "react";
import SearchIcon from "@mui/icons-material/Search";

const AdminSearchBox = () => {
  return (
    <div className="flex items-center pl-3 bg-gray-200 rounded-lg w-[400px] max-w-full">
      <SearchIcon className="text-gray-400 mr-3" />
      <input
        className="bg-transparent py-2 flex-1 text-sm"
        placeholder="Tìm kiếm gì đó...."
      />

      <button className="h-full bg-blue-500 text-white block py-2 px-3 rounded-lg text-sm font-semibold">
        Tìm kiếm
      </button>
    </div>
  );
};

export default AdminSearchBox;
