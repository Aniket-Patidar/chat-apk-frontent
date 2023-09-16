import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { setUserInfo } from "../../userSclice/userSclice";
import Main from "@/components/Main";

const Index = () => {
  const {userInfo} = useSelector((state) => state.userReducer);
  const dispatch = useDispatch();
  return <Main />
};

export default Index;
