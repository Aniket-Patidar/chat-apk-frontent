import { calculateTime } from "@/utils/CalculateTime";
import React, { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import MessageStatus from "../common/MessageStatus";

function ChatContainer() {
  const { userInfo, CurrentChatUser, chat } = useSelector(
    (state) => state.userReducer
  );
  const dispatch = useDispatch();
  const chatbox = useRef();

  useEffect(() => {
      chatbox?.current?.lastChild?.scrollIntoView({ behavior: 'smooth' });
  }, [userInfo, CurrentChatUser, chat]);

  return (
    <div className="w-full h-[80vh] relative flex-grow  overflow-auto custom-scrollbar">
      <div>
        <div className="text-white  flex flex-col px-10 " ref={chatbox}>
          {chat?.map((msg, index) => {
            console.log(msg, userInfo._id);
            return (
              <div
                key={msg + index}
                className={`w-full flex items-center  ${
                  msg.sender?._id == userInfo._id
                    ? msg.sender?._id == userInfo._id
                      ? "justify-end"
                      : "justify-start"
                    : msg.sender == userInfo._id
                    ? "justify-end"
                    : "justify-start"
                }`}
              >
                <div
                  className={`px-2 py-5 text-sm rounded-md flex-2 w-fit mb-5 items-center max-w-[45%] ${
                    msg.sender?._id == userInfo._id
                      ? msg.sender?._id == userInfo._id
                        ? "bg-input-background"
                        : "bg-outgoing-background"
                      : msg.sender == userInfo._id
                      ? "bg-input-background"
                      : "bg-outgoing-background"
                  }`}
                >
                  <span>{msg?.message}</span>
                  <div className="flex gap-1 items-end text-right">
                    <span className="text-bubble-meta text-[11px] text-sm w-full">
                      {calculateTime(msg.createdAt)}
                    </span>
                    <span className="">
                      {msg?.sender?._id === userInfo?._id && (
                        <MessageStatus MessageStatus={msg?.messageStatus} />
                      )}
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default ChatContainer;

{
  /* <div className="bg-chat-background bg-fixed  h-full w-full opacity-5 fixed left-0 top-0">
<div className="flex w-full">
  <div className="flex flex-col justify-end w-full gap-1 overflow-auto  ">
    
  </div>
</div>
</div> */
}
