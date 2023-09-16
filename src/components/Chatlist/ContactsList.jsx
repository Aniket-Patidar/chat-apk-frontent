import React, { useEffect, useState } from "react";
import { IoMdArrowBack } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import { getallChat } from "../../../userSclice/userSclice";
import { AiOutlineSearch } from "react-icons/ai";
import axios from "axios";
import { GETALL_USER_ROUTE } from "@/utils/ApiRoutes";
import ChatLIstItem from "./ChatLIstItem";

function ContactsList() {
  const { userInfo, allChat } = useSelector((state) => state.userReducer);
  const dispatch = useDispatch();
  const [Users, setUsers] = useState([]);
  useEffect(() => {
    async function AllUser() {
      const {
        data: { users },
      } = await axios.get(GETALL_USER_ROUTE);
      setUsers(users);
    }
    AllUser();
  }, []);

  return (
    <div className="w-full h-[100vh] overflow-auto px-5 py-5">
      <nav className="text-white flex  items-center py-4 justify-start gap-2">
        <IoMdArrowBack
          className="cursor-pointer"
          onClick={() => dispatch(getallChat(false))}
        ></IoMdArrowBack>
        <p>All Contract</p>
      </nav>
      <div className="text-white">
        <div className="flex items-center  justify-between gap-2 ">
          <AiOutlineSearch
            className="text-panel-header-icon cursor-pointer text-lg"
            title="new chat"
          ></AiOutlineSearch>
          <input
            className="bg-transparent text-sm focus:outline-none text-white w-full "
            type="text"
            placeholder="search or start new chart"
          />
        </div>
      </div>

      <div className="flex flex-col mt-5  text-white">
        {Object.entries(Users).map(([initial, userList]) => {
          return (
            <div key={Date.now() + initial}>
              <div className="text-teal-light pl-10 py-5 ">{initial}</div>
              {userList.map((u) => {
                return <ChatLIstItem isContractPage={true} data={u} key={Date.now()}/>
              })}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default ContactsList;
