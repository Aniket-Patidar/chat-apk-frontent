import React from "react";
import ChatContainer from "./ChatContainer";
import MessageBar from "./MessageBar";
import ChatHeader from "./ChatHeader";

function Chat() {
  return <div className="border-conversation-border bottom-l w-full bg-conversation-panel-background flex-col z-10 h-[100vh]">
    <ChatHeader></ChatHeader>
    <ChatContainer/>
    <MessageBar/>
  </div>;

}

export default Chat;
