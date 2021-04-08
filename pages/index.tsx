import React from "react";
import Head from "next/head";
import RomAppBar from "../components/appbar";
import BrandsList from "../components/brands";
import DevicesList from "../components/devices";
import DeviceInfo from "../components/device";
import { Box, Grid, makeStyles } from "@material-ui/core";
import styles from "../styles/Home.module.css";
import { config } from "../config";
import { useStore } from "../store/devices/store";

const useStyles = makeStyles((theme) => ({
  brandsGrid: {
    [theme.breakpoints.up('md')]: {
      paddingRight: '32px'
    }
  }
}));


export default function Home() {
  const store = useStore();
  const classes = useStyles();

  return (
    <div className={styles.root}>
      <Head>
        <title>{config.name}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <RomAppBar />
        <Grid container justify="center">
          <Grid item xs={12} sm={12} md={2} lg={2} xl={2} className={classes.brandsGrid}>
              <BrandsList />
          </Grid>
          <Grid item xl={8}>
            {store.selectedDevice == null ? (
              <DevicesList />
            ) : (
              <DeviceInfo device={store.selectedDevice} />
            )}
          </Grid>
        </Grid>
      </main>
    </div>
  );
}
