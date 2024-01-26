import type { AppProps } from "next/app";

import { Global } from "@emotion/react";
import { globalStyles } from "../src/components/commons/styles/globalStyles";
import Layout from "../src/components/commons/layout/Layout.container";

export default function App({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <>
      <Global styles={globalStyles} />
      <Layout>
        
          <Component {...pageProps} />
        
      </Layout>
    </>
  );
}
