import { useEffect } from "react";
import "../styles/globals.css";
import { StoreProvider } from "../utils/redux/Store";

function MyApp({ Component, pageProps }) {
  return (
    <StoreProvider>
      <Component {...pageProps} />
    </StoreProvider>
  );
}

export default MyApp;
