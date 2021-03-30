import Head from "next/head";
import RomAppBar from "../components/appbar";
import BrandsList from "../components/brands";
import { Grid } from "@material-ui/core";
import styles from "../styles/Home.module.css";
import { config } from "../config";
import { store } from "../store/rootStore";
import { Provider } from "react-redux";

export default function Home() {
  return (
    <Provider store={store}>
      <div className={styles.root}>
        <Head>
          <title>{config.name}</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <main>
          <Grid container direction="column">
            <Grid item>
              <RomAppBar />
            </Grid>
            <Grid item>
              <Grid container direction="row" justify="space-around">
                <Grid item>
                  <BrandsList />
                </Grid>
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
    </Provider>
  );
}
