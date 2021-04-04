import {
  AppBar,
  makeStyles,
  Toolbar,
  Typography,
} from "@material-ui/core";
import React from "react";
import { config } from "../config";

const useStyles = makeStyles((theme) => ({
  root: {
    margin: "20px auto",
  },
  toolbar: {
    paddingLeft: "32px",
  },
}));

const RomAppBar = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static" color="transparent" elevation={0}>
        <Toolbar variant="dense" className={classes.toolbar}>
          <Typography variant="h6">{config.name}</Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default RomAppBar;
