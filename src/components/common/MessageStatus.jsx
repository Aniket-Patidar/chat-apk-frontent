import React from "react";
import { BsCheck, BsCheckAll } from "react-icons/bs";

function MessageStatus({ MessageStatus }) {
  return (
    <>
      {MessageStatus == "send" && <BsCheck className="text-lg"></BsCheck>}
      {MessageStatus == "delivered" && (<BsCheckAll className="text-lg"></BsCheckAll>)}
      {MessageStatus == "read" && <BsCheckAll className="text-lg text-icon-ack"></BsCheckAll>}
    </>
  );
}

export default MessageStatus;
