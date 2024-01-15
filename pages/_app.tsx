import MainLayot from "../src/components/layout/main-layout";
import type { AppProps } from "next/app";
import '../styles/globals.css';
import '../styles/general.sass';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <MainLayot>
      <Component {...pageProps} />
    </MainLayot>
  );
}
