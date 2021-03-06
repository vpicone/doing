import App, { Container } from "next/app";
import React from "react";
import { ThemeProvider } from "styled-components";
import { theme } from "../components/theme";
import Layout from "../components/Layout";

class MyApp extends App {
  static async getInitialProps({ Component, router, ctx }) {
    let pageProps = {};
    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }
    return { pageProps, router };
  }

  render() {
    const { Component, pageProps, router } = this.props;
    return (
      <Container>
        <ThemeProvider theme={theme}>
          <Layout path={router.pathname}>
            <Component {...pageProps} router={router} />
          </Layout>
        </ThemeProvider>
        <style jsx global>{`
          :root {
            --thin: "wght" 100, "wdth" 100;
            --extra-light: "wght" 200, "wdth" 100;
            --light: "wght" 300, "wdth" 100;
            --regular: "wght" 400, "wdth" 100;
            --text: "wght" 450, "wdth" 100;
            --medium: "wght" 500, "wdth" 100;
            --semi-bold: "wght" 600, "wdth" 100;
            --bold: "wght" 700, "wdth" 100;
            --thin-condensed: "wght" 100, "wdth" 85;
            --extra-light-condensed: "wght" 200, "wdth" 85;
            --light-condensed: "wght" 300, "wdth" 85;
            --regular-condensed: "wght" 400, "wdth" 85;
            --text-condensed: "wght" 450, "wdth" 85;
            --medium-condensed: "wght" 500, "wdth" 85;
            --semi-bold-condensed: "wght" 600, "wdth" 85;
            --bold-condensed: "wght" 700, "wdth" 85;
          }

          @font-face {
            font-family: Plex;
            src: url("/static/roman.woff2") format("woff2-variations"),
              url("/static/roman.woff2") format("woff2");
            font-style: normal;
            font-display: fallback;
            font-stretch: 85% 100%;
            font-weight: 100 700;
          }

          @font-face {
            font-family: Plex;
            src: url("/static/italic.woff2") format("woff2-variations"),
              url("/static/italic.woff2") format("woff2");
            font-style: italic;
            font-display: fallback;
            font-stretch: 85% 100%;
            font-weight: 100 700;
          }

          * {
            -webkit-font-smoothing: antialiased;
            -moz-osx-font-smoothing: grayscale;
          }

          body,
          html {
            overflow-x: hidden;
            margin: 0;
            padding: 0;
            background-color: rgb(255, 107, 124);
          }

          body {
            font-family: Plex, system-ui, sans-serif;
            font-style: normal;
            line-height: 1.5;
            min-height: 100vh;
            background: linear-gradient(rgb(255, 107, 124), #fb4b53);
          }

          h1,
          h2,
          h3,
          h4,
          h5,
          h6 {
            font-style: normal;
            line-height: 1.25;
            letter-spacing: 0.05em;
          }
        `}</style>
      </Container>
    );
  }
}

export default MyApp;
