import React from "react";

import MessagesArea from '../MessagesArea/MessagesArea';

const ChatsArea = () => {
  const openChat = true;
  return openChat ?
   <MessagesArea /> :
   <div>No one chat is open</div>;
};

export default ChatsArea;
