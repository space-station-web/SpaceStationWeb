import type { AppProps } from "next/app";

import { Global } from "@emotion/react";
import Layout from "../src/components/commons/layout/Layout.container";
import { globalStyles } from "../src/components/commons/styles/globalStyles";

export default function App({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <>
      <Global styles={globalStyles} />

      <div style={{ width: "100%", display: "flex", flexDirection: "column" }}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </div>
    </>
  );
}
