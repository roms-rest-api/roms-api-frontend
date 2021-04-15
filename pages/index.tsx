import React from "react";
import Head from "next/head";
import RomAppBar from "../components/appbar";
import { config } from "../config";
import PromoLogo from "../components/promologo";
import { createMuiTheme, ThemeProvider } from "@material-ui/core";
import BackgroundWrapper from "./backgroundWrapper";

const theme = createMuiTheme({
  typography: {
    fontFamily: [
      "Inter",
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(","),
      allVariants: {
        color: "white"
      },
  },
});

export default function Home() {
  return (
    <ThemeProvider theme={theme}>
      <BackgroundWrapper>
        <Head>
          <title>{config.name}</title>
          <link rel="icon" href="/favicon.ico" />
          <link
            href="https://fonts.googleapis.com/css?family=Inter"
            rel="stylesheet"
          />
        </Head>

        <main>
          <RomAppBar />
          <PromoLogo />
        </main>
      </BackgroundWrapper>
    </ThemeProvider>
  );
}

export { theme };
