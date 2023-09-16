import React, { useEffect, useRef, useState } from "react";
import ChatList from "./Chatlist/ChatList";
import Empty from "./Empty";
import { useDispatch, useSelector } from "react-redux";
import { onAuthStateChanged } from "firebase/auth";
import { firebaseAuth } from "@/utils/FirebaseConfig";
import axios from "axios";
import { CHECK_USER_ROUTE, GET_MESSAGE_ROUTE, HOST } from "@/utils/ApiRoutes";
import {
  setChat,
  setSocket,
  setUserInfo,
  setNewChat,
} from "../../userSclice/userSclice";
import { useRouter } from "next/router";
import Chat from "./Chat/Chat";
import { io } from "socket.io-client";

function Main() {
  const { userInfo, CurrentChatUser, chat } = useSelector(
    (state) => state.userReducer
  );
  const dispatch = useDispatch();
  const router = useRouter();
  const [redirectLogin, setRedirectLogin] = useState(false);
  const [socketEvent, setSocketEvent] = useState(false);

  useEffect(() => {
    if (redirectLogin) {
      return router.push("/login");
    }
  }, [redirectLogin]);

  onAuthStateChanged(firebaseAuth, async (currentUser) => {
    if (!currentUser) setRedirectLogin(true);
    if (!userInfo?.email && currentUser?.email) {
      var { data } = await axios.post(CHECK_USER_ROUTE, {
        email: currentUser?.email,
      });
      if (!data.status) {
        return router.push("/login");
      }
      dispatch(setUserInfo(data?.data));
    }
  });

  useEffect(() => {
    async function getMessages() {
      const { data } = await axios.get(
        `${GET_MESSAGE_ROUTE}/${userInfo?._id}/${CurrentChatUser?._id}`
      );
      dispatch(setChat(data?.messages));
    }
    if (CurrentChatUser?._id) {
      getMessages();
    }
  }, [CurrentChatUser]);

  /* socket */
  const socket = useRef();
  useEffect(() => {
    if (userInfo?._id) {
      socket.current = io(HOST);
      socket.current.emit("add-user", userInfo?._id);
      dispatch(setSocket(socket));
    }
  }, [userInfo?._id]);

  useEffect(() => {
    if (socket.current && !socketEvent) {
      socket.current.on("msg-recieve", (data) => {
        console.log("msg-recieve", data);
        dispatch(setNewChat(data));
      });
      setSocketEvent(true);
    }
  }, [socket.current]);

  return (
    <>
      <div className="grid grid-cols-main w-screen max-h-[100vh] max-w-full overflow-hidden">
        <ChatList />
        {CurrentChatUser ? <Chat></Chat> : <Empty />}
      </div>
    </>
  );
}
export default Main;
