import {
  AppBar,
  makeStyles,
  Toolbar,
  Typography,
} from "@material-ui/core";
import React from "react";
import Link from "next/link";
import { config } from "../config";
import clsx from "clsx";

const useStyles = makeStyles((theme) => ({
  root: {
    margin: "20px auto",
  },
  toolbar: {
    paddingLeft: "32px",
    display: "flex",
    alignItems: "center",
    flex: 1,
  },
  commonAppBar: {
    color: config.titleFontColor,
    fontFamily: "Inter",
    fontWeight: "bold",
  },
  downloadsTitle: {
    cursor: "pointer",
    marginLeft: "2rem",
    fontSize: "24px",
  },
  title: {
    cursor: "pointer",
    color: config.titleFontColor,
    fontSize: "26px",
  },
}));

const RomAppBar = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static" color="transparent" elevation={0}>
        <Toolbar variant="dense" className={classes.toolbar}>
          <Link href="/">
            <Typography
              variant="h6"
              className={clsx(classes.commonAppBar, classes.title)}
            >
              {config.name}
            </Typography>
          </Link>
          <Link href="/downloads">
            <Typography
              className={clsx(classes.commonAppBar, classes.downloadsTitle)}
            >
              Downloads
            </Typography>
          </Link>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default RomAppBar;
