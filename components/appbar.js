import { AppBar, Toolbar, Typography, withStyles } from "@material-ui/core";
import React from "react";
import { config } from '../config.ts'

const useStyles = (theme) => ({
  root: {
    margin: "40px auto",
    width: "1440px",
  },
  toolbar: {
    paddingLeft: "32px",
  },
});

class RomAppBar extends React.Component {
  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <AppBar position="static" color="transparent" elevation={0}>
          <Toolbar variant="dense" className={classes.toolbar}>
            <Typography variant="h6" className={classes.title}>
              {config.name}
            </Typography>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

export default withStyles(useStyles)(RomAppBar);
