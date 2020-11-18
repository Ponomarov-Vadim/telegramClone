import React from "react";

import { Avatar, TextField, Button, Grid } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";

const StyledInput = withStyles({
  root: {
    width: "90%",
  },
})((props) =>  <TextField
id="standard-multiline-static"
multiline
rows={4}
 {...props} />);

const WriteArea = () => {
  return (
    <Grid container justify="space-around" alignItems="center" style={{ position: "relative" }}>
      <Grid item xs={1}>
        <Avatar alt="user" src="../../../public/static/favicon.ico" />
      </Grid>
      <Grid item xs={8}>
        <StyledInput />
      </Grid>
      <Grid item xs={1}>
        <Avatar alt="user" src="../../../public/static/favicon.ico" />
      </Grid>
      <Grid item xs={8} style={{ textAlign:"end"}}>
      <Button
        color="primary"
      >
        Send
      </Button>
      </Grid>
    </Grid>
  );
};

export default WriteArea;
