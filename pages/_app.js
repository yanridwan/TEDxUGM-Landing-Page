import Head from "next/head";
import NextNProgress from "nextjs-progressbar";

import GlobalStyle from "../styles/Globalstyle";

export default function MyApp({ Component, pageProps }) {
  // Use the layout defined at the page level, if available
  const getLayout = Component.getLayout || ((page) => page);

  return getLayout(
    <>
      <Head>
        <title>TEDx UGM</title>
        <meta
          name="description"
          content="Official Website of TEDx UGM 2022. x = independently organized event. In the spirit of ideas worth spreading, TEDx is a program of local,
          self-organized events that bring people together to share a TED-like
          experience. At a TEDx event, TED Talks video and live speakers combine
          to spark deep discussion and connection."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
      </Head>

      <GlobalStyle />
      <NextNProgress color="var(--color-red)" height={3} />
      <Component {...pageProps} />
    </>
  );
}
