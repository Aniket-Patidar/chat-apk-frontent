import React, { useEffect } from "react";
import Avatar from "../common/Avatar";
import { setCurrentChatUser } from "../../../userSclice/userSclice";
import { useDispatch, useSelector } from "react-redux";

function ChatLIstItem({ data, isContractPage = false }) {
  const { userInfo, allChat, CurrentChatUser } = useSelector(
    (state) => state.userReducer
  );
  const dispatch = useDispatch();

  const handleContractClick = (data) => {
    dispatch(setCurrentChatUser(data));
    console.log(CurrentChatUser);
  };

  return (
    <div
      onClick={() => handleContractClick(data)}
      className={`flex cursor-pointer items-center  hover:bg-background-default-hover`}
    >
      <div className="min-w-fit px-5 pt-3 pb-1">
        <Avatar w={30} h={30} src={data.avatar} />
      </div>
      <div className="min-h-full flex flex-col justify-center mt-3 pr-2 w-full  ">
        <div className="flex justify-between">
          <div>
            <span className="text-white">{data.name}</span>
          </div>
        </div>
        <div className="flex border-b border-conversation-border pb-2 pt-1 p3-2">
          <div className="flex justify-between  w-[full]">
            <span className="text-secondary line-clamp-1 text-sm">
              {data.dec || "\u00A0"}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ChatLIstItem;
