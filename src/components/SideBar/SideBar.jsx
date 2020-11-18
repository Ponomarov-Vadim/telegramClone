import React from "react";

import { withStyles } from "@material-ui/core/styles";
import { Grid, Input, InputAdornment } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";

import ChatCard from "../ChatCard/ChatCard";

const StyledGrid = withStyles({
  root: {
    padding: "6px 0",
    "& > div:not(:last-child)": { marginBottom: "6px" },
  },
})((props) => (
  <Grid container justify="flex-start" direction="column" {...props} />
));

const StyledInput = withStyles({
  root: {
    position: "fixed",
    top: "68px",
    width: "18%",
    maxWidth: "270px",
  },
  underline: {
    "div:before": {width: "80%"},
    "div:after": {width: "80%"},
  }, 
})((props)=>(
  <Input   
  id="searchInput"
  startAdornment={
    <InputAdornment position="start">
      <SearchIcon />
    </InputAdornment>
  }
    {...props}
  />
));

const SideBar = () => {
  return (
    <>
      <StyledInput />
      <StyledGrid>
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15].map((item) => (
          <Grid key={item} item xs={12}>
            <ChatCard key={item} />
          </Grid>
        ))}
      </StyledGrid>
    </>
  );
};

export default SideBar;
