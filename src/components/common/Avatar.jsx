import Image from "next/image";
import React from "react";

function Avatar({ src, h, w }) {
  return (
    <div>
      <Image className={`rounded-full w-[${w}px] h-[${h}px]`} src={src} height={h} width  ={w} alt="alt"></Image>
    </div>
  );
}

export default Avatar;
