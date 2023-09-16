import React from "react";
import Avatar from "../common/Avatar";
import { FiPhoneCall } from "react-icons/fi";
import { AiOutlineSearch } from "react-icons/ai";
import { BsThreeDotsVertical } from "react-icons/bs";
import { FaVideo } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";

function ChatHeader() {
  const { userInfo, CurrentChatUser } = useSelector(
    (state) => state.userReducer
  );

  const dispatch = useDispatch();
  return (
    <div className="h-16 px-4 py-3 flex justify-between items-center bg-panel-header-background z-10 ">
      <div className="flex items-center justify-center gap-6">
        <Avatar src={CurrentChatUser?.avatar} h={40} w={40} />
        <div className="flex flex-col">
          <span className="text-primary-strong">{CurrentChatUser?.name}</span>
          <span className="text-secondary text-sm">online</span>
        </div>
      </div>
      <div className="flex gap-6">
        <FiPhoneCall className="text-panel-header-icon cursor-pointer text-xl"></FiPhoneCall>
        <FaVideo className="text-panel-header-icon cursor-pointer text-xl"></FaVideo>
        <AiOutlineSearch className="text-panel-header-icon cursor-pointer text-xl"></AiOutlineSearch>
        <BsThreeDotsVertical className="text-panel-header-icon cursor-pointer text-xl"></BsThreeDotsVertical>
      </div>
    </div>
  );
}

export default ChatHeader;
