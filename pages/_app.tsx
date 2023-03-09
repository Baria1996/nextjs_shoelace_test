import "@/styles/globals.css";
import "@/styles/style.css";
import "@shoelace-style/shoelace/dist/themes/light.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
