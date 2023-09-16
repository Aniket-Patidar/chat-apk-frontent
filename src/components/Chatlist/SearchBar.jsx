import React from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { BiFilter, BiSolidMessageMinus } from "react-icons/bi";

function SearchBar() {
  return (
    <div className="bg-search-input-container-background flex py-3 px-5 items-center justify-between text-white">
        <div className="flex justify-between items-center bg-panel-header-background p-1 w-full rounded-lg">
        <div className="flex items-center  justify-between gap-2 ">
        <AiOutlineSearch
            className="text-panel-header-icon cursor-pointer text-lg"
            title="new chat"
          ></AiOutlineSearch>
          <input className="bg-transparent text-sm focus:outline-none text-white w-full " type="text" placeholder="search or start new chart" />
        </div>
      
        </div>
        <div className="pr-5 pl-3">
          <BiFilter></BiFilter>
        </div>
      </div>
  );
}

export default SearchBar;
