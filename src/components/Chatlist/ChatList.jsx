import React from "react";
import ChatListHeader from "./ChatListHeader";
import SearchBar from "./SearchBar";
import List from "./List";
import { useDispatch, useSelector } from "react-redux";
import ContactsList from "./ContactsList";

function ChatList() {
  const { userInfo, allChat } = useSelector((state) => state.userReducer);
  const dispatch = useDispatch();
  return (
    <div className="bg-panel-header-background flex flex-col max-h-screen z-20 border-r bottom-1/2">
      {allChat ? (
        <ContactsList></ContactsList>
      ) : (
        <>
          <ChatListHeader />
          <SearchBar />
          <List />
        </>
      )}
    </div>
  );
}

export default ChatList;
