import React, { Fragment } from "react";
import {
  AppBar,
  Switch,
  Toolbar,
  Typography,
} from "@material-ui/core";

// Style
import useStyles from "./navbar.style";

// Icons
import Brightness7Icon from "@material-ui/icons/Brightness7";
import Brightness3Icon from "@material-ui/icons/Brightness3";

const NavBar = () => {
  const classes = useStyles();

  return (
    <Fragment>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h4" className={classes.logo}>
            Dev Jobs
          </Typography>
          <Toolbar className={classes.switch}>
            <Brightness7Icon />
            <Switch />
            <Brightness3Icon />
          </Toolbar>
        </Toolbar>
      </AppBar>
    </Fragment>
  );
};

export default NavBar;
