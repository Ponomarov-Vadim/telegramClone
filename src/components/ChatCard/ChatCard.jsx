import React from "react";

import { Typography, Avatar } from "@material-ui/core";
  import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme)=> ({
    container: {
        padding: "8px",
        border: "1px solid black",
        borderRadius: "8px",
        display: 'flex',
        justifyContent: 'space-between',
        transition: 'background-color ease 200ms',
        cursor: 'pointer',
        '&:hover': {
            backgroundColor: '#a09ffa',            
        },
    },
    text: {
        margin: 'auto',
    },
    counter: {
        margin: 'auto 0',
        border: '1px solid black',
        borderRadius: '50%',
        height: '24px',
        width: '24px',
        textAlign: 'center',
    }
}))

const ChatCard = () => {
    const classes = useStyles();
  return (
    <div className={classes.container} >
      <Avatar alt='user' src='../../../public/static/favicon.ico'/>
      <Typography className={classes.text}>NameChats</Typography>
      <Typography className={classes.counter}>1</Typography>
    </div>
  );
};

export default ChatCard;
