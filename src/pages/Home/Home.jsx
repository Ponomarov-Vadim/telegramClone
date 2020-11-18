import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Menu,
  MenuItem,
  ListItemIcon,
  ListItemText,
  Container,
  Grid,
} from "@material-ui/core";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import {
  Menu as MenuIcon,
  Settings as SettingsIcon,
  Info as InfoIcon,
  Chat as ChatIcon,
  Contacts as ContactsIcon,
} from "@material-ui/icons";

import ChatsArea from "../../components/ChatsArea/ChatsArea";
import SideBar from "../../components/SideBar/SideBar";

// import api from "../../services/api";

const StyledMenu = withStyles({
  paper: {
    padding: 0,
    border: "2px solid black",
    width: "18%",
    "& > ul": {
      padding: 0,
    },
  },
})((props) => (
  <Menu
    elevation={0}
    getContentAnchorEl={null}
    anchorOrigin={{
      vertical: "bottom",
      horizontal: "center",
    }}
    transformOrigin={{
      vertical: "top",
      horizontal: "center",
    }}
    style={{ left: "12px" }}
    {...props}
  />
));

const StyledMenuItem = withStyles((theme) => ({
  root: {
    paddingLeft: "14%",
    "&:focus": {
      backgroundColor: theme.palette.primary.main,
      "& .MuiListItemIcon-root, & .MuiListItemText-primary": {
        color: theme.palette.common.white,
      },
    },
  },
}))(MenuItem);

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width: "80vw",
    maxWidth: "1200px",
    border: "2px solid black",
    margin: "0 auto",
  },
  menuButton: {
    width: "20%",
  },
  icon: {
    marginLeft: theme.spacing(2),
  },
  toolBar: {
    padding: 0,
  },
}));

const Home = () => {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (e) => {
    setAnchorEl(e.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar variant="dense" className={classes.toolBar}>
          <IconButton
            edge="end"
            className={classes.menuButton}
            onClick={handleClick}
            color="inherit"
            aria-label="menu"
            aria-controls="customized-menu"
            aria-haspopup="true"
            variant="contained"
          >
            <MenuIcon />
            <Typography className={classes.icon} variant="h6" color="inherit">
              Messenger
            </Typography>
          </IconButton>
          <StyledMenu
            id="customized-menu"
            className={classes.menuList}
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            <StyledMenuItem>
              <ListItemIcon>
                <ChatIcon fontSize="small" />
              </ListItemIcon>
              <ListItemText primary="New chat" />
            </StyledMenuItem>
            <StyledMenuItem>
              <ListItemIcon>
                <ContactsIcon fontSize="small" />
              </ListItemIcon>
              <ListItemText primary="Contacts" />
            </StyledMenuItem>
            <StyledMenuItem>
              <ListItemIcon>
                <SettingsIcon fontSize="small" />
              </ListItemIcon>
              <ListItemText primary="Settings" />
            </StyledMenuItem>
            <StyledMenuItem>
              <ListItemIcon>
                <InfoIcon fontSize="small" />
              </ListItemIcon>
              <ListItemText primary="About" />
            </StyledMenuItem>
          </StyledMenu>
        </Toolbar>
      </AppBar>
      <Container style={{ padding: 0 }}>
        <Grid item xs={12}>
          <Grid container justify="space-around">
            <Grid
              key="ChatsList"
              item
              xs={3}
              style={{
                borderRight: "2px solid black",
                padding: "44px 6px 6px",
                height: "89.7vh",
                overflowY: "scroll",
              }}
            >
              <SideBar />
            </Grid>
            <Grid
              key="Chats"
              item
              xs={9}
              style={{
                padding: "6px",
                height: "90vh",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                position: "relative",
              }}
            >
              <ChatsArea />
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default Home;
