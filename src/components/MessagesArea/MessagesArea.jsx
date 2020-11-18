import { Grid } from "@material-ui/core";
import React from "react";
import Chat from "../Chat/Chat";
import WriteArea from "../WriteArea/WriteArea";

const MessagesArea = () => {
  return (
    <Grid
      container
      justify="space-between"
      alignContent="center"
      direction="column"
    >
      <Grid key="Chat" item xs={12} style={{
          border: "1px solid black",
          width: "100%",
          height: "80%",
            padding: "4%",
          position: "absolute",
          top: "0",
          left: "0",
          overflowY: "auto",
      }}>
        <Chat />
      </Grid>
      <Grid key="WriteArea" item xs={12} style={{
          border: "1px solid black",
          padding: " 2% 4%",


          width: "100%",
          height: "20%",
          position: "absolute",
          bottom: "0",
          left: "0"
      }}>
        <WriteArea />
      </Grid>
    </Grid>
  );
};

export default MessagesArea;
