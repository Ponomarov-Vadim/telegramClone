import { Avatar, Typography, Grid } from "@material-ui/core";
import React, { useState } from "react";

const chatData = [
  {
    userId: 1,
    userName: "Anton",
    userIco: "png",
    date: Date.now(),

    message: "Text 1",
  },
  {
    userId: 1,
    userName: "Anton",
    userIco: "png",
    date: Date.now(),

    message: "Text 2",
  },
  {
    userId: 2,
    userName: "Grisha",
    userIco: "png",
    date: Date.now(),

    message: "Text 1",
  },
  {
    userId: 1,
    userName: "Anton",
    userIco: "png",
    date: Date.now(),

    message: "Text 3",
  },
  {
    userId: 2,
    userName: "Grisha",
    userIco: "png",
    date: Date.now(),

    message: "Text 2",
  },
  {
    userId: 1,
    userName: "Anton",
    userIco: "png",
    date: Date.now(),

    message: "Text 4",
  },
  {
    userId: 1,
    userName: "Anton",
    userIco: "png",
    date: Date.now(),

    message: "Text 5",
  },
  {
    userId: 2,
    userName: "Grisha",
    userIco: "png",
    date: Date.now(),

    message: "Text 3",
  },
  {
    userId: 2,
    userName: "Grisha",
    userIco: "png",
    date: Date.now(),

    message: "Text 4",
  },
];

const UserInfo = ({ item }) => (
  <>
    <Grid key="Avatar" item xs={2}>
      <Avatar alt="user" src="../../../public/static/favicon.ico" />
    </Grid>
    <Grid key="UserName" item xs={6}>
      <Typography>{item.userName}</Typography>
    </Grid>
  </>
);

const Chat = () => {
  let visibleUserInfo = true;
  return (
    <div>
      {chatData.map((item, i, arr) => {
        if (i >= 1) visibleUserInfo = arr[i - 1].userId !== item.userId;
        return (
          <Grid container justify="flex-start" alignItems="center" key={i} style={{padding:"6px 0", position: "relative"}}>
            {i >= 1 ? (
              visibleUserInfo && <UserInfo item={item} />
            ) : (
              <UserInfo item={item} />
            )}
            <Grid
              key="Date"
              item
              xs={visibleUserInfo ? 4 : 2}
              style={{  position: "absolute", right: "0" }}
            >
              <Typography>{item.date}</Typography>
            </Grid>
            <Grid key="Message" item xs={visibleUserInfo ? 12 : 10}>
              <Typography>{item.message}</Typography>
            </Grid>
          </Grid>
        );
      })}
    </div>
  );
};

export default Chat;
