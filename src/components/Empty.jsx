import Image from "next/image";
import React from "react";

function Empty() {
  return <div className="border-b-conversation-border bottom-1 h-[100vh] w-full flex-col bg-panel-header-background flex items-center justify-center">
    <Image src="/whatsapp.gif" width={300} height={300}></Image>
  </div>;
}

export default Empty;
