import { Grid, makeStyles, ThemeProvider } from "@material-ui/core";
import Head from "next/head";
import React from "react";
import { theme } from "./index";
import RomAppBar from "../components/appbar";
import BrandsList from "../components/brands";
import DeviceInfo from "../components/device";
import DevicesList from "../components/devices";
import { useStore } from "../store/devices/store";
import BackgroundWrapper from "./backgroundWrapper";
import clsx from "clsx";

const useStyles = makeStyles((theme) => ({
  brandsGrid: {
    [theme.breakpoints.up("sm")]: {
      paddingRight: "32px",
    },
    [theme.breakpoints.down("sm")]: {
      width: '100%'
    }
  },
  wrapper: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    [theme.breakpoints.down("sm")]: {
      flexDirection: 'column'
    }
  },
  devicesGrid: {
    width: '700px',
    [theme.breakpoints.down("sm")]: {
      width: '100%'
    }
  }
}));

const DownloadsPage = () => {
  const classes = useStyles();
  const store = useStore();

  return (
    <ThemeProvider theme={theme}>
      <BackgroundWrapper>
        <RomAppBar />
        <Head>
          <title>Downloads</title>
          <link rel="icon" href="/favicon.ico" />
          <link
            href="https://fonts.googleapis.com/css?family=Inter"
            rel="stylesheet"
          />
        </Head>

        <div className={classes.wrapper}>
          <Grid
            item
            className={classes.brandsGrid}
          >
            <BrandsList />
          </Grid>
          <Grid item  md={5} xl={8} className={classes.devicesGrid}>
            {store.selectedDevice == null ? (
              <DevicesList />
            ) : (
              <DeviceInfo device={store.selectedDevice} />
            )}
          </Grid>
          </div>
      </BackgroundWrapper>
    </ThemeProvider>
  );
};

export default DownloadsPage;
