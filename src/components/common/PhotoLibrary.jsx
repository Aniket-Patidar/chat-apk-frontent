import Image from "next/image";
import React from "react";
import { GrClose } from "react-icons/gr";

function PhotoLibrary({ setlibHidden, setImage }) {
  let options = [
    "/avatars/1.png",
    "/avatars/2.png",
    "/avatars/3.png",
    "/avatars/4.png",
    "/avatars/5.png",
    "/avatars/7.png",
    "/avatars/8.png",
  ];

  function handelLiberay(e) {
    setImage(e);
    setlibHidden(false);
  }

  return (
    <div className="w-[55vw] h-[55vh] bg-dropdown-background absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] p-5">
      <div className="text-right text-white flex justify-start">
        <GrClose className="text-white"></GrClose>
      </div>
      <div className=" flex  flex-wrap gap-5 items-center justify-center"></div>
      <div className="flex  flex-wrap gap-5 items-center justify-center">
        {options.map((e) => {
          return (
            <>
              <Image
                onClick={() => handelLiberay(e)}
                src={e}
                width={150}
                height={150}
              ></Image>
            </>
          );
        })}
      </div>
    </div>
  );
}

export default PhotoLibrary;
