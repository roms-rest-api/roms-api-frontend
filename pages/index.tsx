import Head from "next/head";
import RomAppBar from "../components/appbar";
import BrandsList from "../components/brands";
import DevicesList from "../components/devices";
import DeviceInfo from "../components/device";
import { Grid } from "@material-ui/core";
import styles from "../styles/Home.module.css";
import { config } from "../config";
import { useStore } from "../store/devices/store";

export default function Home() {
  const store = useStore();

  return (
    <div className={styles.root}>
      <Head>
        <title>{config.name}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Grid item>
          <RomAppBar />
        </Grid>
        <Grid item>
          <Grid container spacing={8} justify="center">
            <Grid item xs={2}>
              <BrandsList />
            </Grid>
            <Grid item xs={8}>
              {store.selectedDevice == null ? (
                <DevicesList />
              ) : (
                <DeviceInfo device={store.selectedDevice} />
              )}
            </Grid>
          </Grid>
        </Grid>
      </main>

      {/* <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a>
      </footer> */}
    </div>
  );
}
