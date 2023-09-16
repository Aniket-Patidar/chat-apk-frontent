import React from "react";
import Avatar from "../common/Avatar";
import { useDispatch, useSelector } from "react-redux";
import { BiSolidMessageMinus } from "react-icons/bi";
import { BsThreeDotsVertical } from "react-icons/bs";
import { getallChat } from "../../../userSclice/userSclice";
function ChatListHeader() {
  const { userInfo, allChat } = useSelector((state) => state.userReducer);
  const dispatch = useDispatch();
  return (
    <div className="h-16  px-5 py-3  justify-between items-center flex">
      <div className="cursor-pointer">
        <Avatar src={userInfo?.avatar} w={40} h={40} />
      </div>
      <div className="flex gap-6 text-white text-2xl">
        <BiSolidMessageMinus
          onClick={() => dispatch(getallChat(true))}
          className="text-panel-header-icon cursor-pointer text-xl"
          title="new chat"
        ></BiSolidMessageMinus>
        <BsThreeDotsVertical
          title="menu"
          className="text-panel-header-icon cursor-pointer text-xl"
        ></BsThreeDotsVertical>
      </div>
    </div>
  );
}

export default ChatListHeader;
