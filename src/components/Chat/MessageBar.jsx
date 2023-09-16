import React, { useState } from "react";
import { BsEmojiAngry } from "react-icons/bs";
import { IoMdAttach } from "react-icons/io";
import { RiSendPlaneFill } from "react-icons/ri";
import { HiMicrophone } from "react-icons/hi";
import axios from "axios";
import { SEND_MESSAGE_ROUTE } from "@/utils/ApiRoutes";
import { useDispatch, useSelector } from "react-redux";
import { setNewChat } from "../../../userSclice/userSclice";

function MessageBar() {
  const { userInfo, socket, CurrentChatUser } = useSelector(
    (state) => state.userReducer
  );
  const [message, setMessage] = useState();
  const dispatch = useDispatch();
  async function handelSendMessage() {
    try {
      const data = await axios.post(SEND_MESSAGE_ROUTE, {
        message,
        to: CurrentChatUser._id,
        from: userInfo._id,
      });
      socket.current.emit("send-msg", {
        message: message,
        to: CurrentChatUser._id,
        from: userInfo._id,
      });
      dispatch(setNewChat(data?.data?.message))
      setMessage("");
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <div className="bg-panel-header-background h-20 px-4 flex items-center gap-6 relative">
      <>
        <div className="flex gap-6">
          <BsEmojiAngry
            className="text-panel-header-icon cursor-pointer text-xl"
            title="emoji"
          />
          <IoMdAttach
            className="text-panel-header-icon cursor-pointer text-xl"
            title="emoji"
          />
        </div>
        <div className="w-full rounded-lg h-10 flex items-center ">
          <input
            onChange={(e) => setMessage(e.target.value)}
            value={message}
            type="text"
            name=""
            id=""
            placeholder="Type a message"
            className="bg-input-background text-sm  focus:outline-none text-white rounded-lg px-5 py-4 w-full "
          />
        </div>
      </>

      <div className="flex items-center justify-center">
        <button onClick={handelSendMessage}>
          <RiSendPlaneFill
            className="text-panel-header-icon cursor-pointer text-xl"
            title="send msg"
          />
          {/* <HiMicrophone className="text-panel-header-icon cursor-pointer text-xl" title="record"/> */}
        </button>
      </div>
    </div>
  );
}

export default MessageBar;
