import Navbar from "@/components/Navbar";
import "@/styles/globals.css";
import { Montserrat } from "next/font/google";
import Head from "next/head";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-mont",
});

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Abdallah Massri Portfolio</title>
        <meta
          name="description"
          content="Welcome to Abdallah Massri portfolio. Explore my projects, skills, and professional experience in web development and software engineering."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/myLogo.png" />
      </Head>
      <main
        className={`${montserrat.variable} font-mont bg-light w full min-h-screen`}
      >
        <Navbar></Navbar>
        <Component {...pageProps} />
      </main>
    </>
  );
}
