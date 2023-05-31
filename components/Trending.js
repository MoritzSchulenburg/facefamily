import React from "react";
import { FiSearch } from "react-icons/fi";
import TrendingList from "./TrendingList";

const Trending = () => {
  return (
    <div className="hidden lg:block w-[350px] mt-2">
      <div className="sticky top-0 bg-[#43726D] flex justify-between font-medium text-white text-[30px] px-4 py-2">
        <h1>Events</h1>
      </div>

      <div className="bg-[#6EA494] flex gap-2 rounded-full py-2 px-4 text-white items-center text-[20px] sticky top-20 z-10">
        <FiSearch />
        <input
          className="bg-transparent w-[100%] outline-none text-white placeholder-white text-opacity-90"
          type="text"
          placeholder="Search Events "
        />
      </div>

      <div className="bg-[#6EA494] rounded-[20px] text-white sticky top-40 mt-4 px-4 py-4">
        <h1 className="text-[20px] font-medium">Next Family Events</h1>
        <TrendingList />
        <TrendingList />
      </div>
    </div>
  );
};

export default Trending;
