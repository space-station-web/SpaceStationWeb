import type { AppProps } from "next/app";
import { RecoilRoot } from "recoil";

import { Global } from "@emotion/react";
import Footer from "../src/components/commons/layout/Footer/Footer";
import Layout from "../src/components/commons/layout/Layout.container";
import { globalStyles } from "../src/components/commons/styles/globalStyles";

export default function App({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <>
      <Global styles={globalStyles} />
      <RecoilRoot>
        <Layout>
          <Component {...pageProps} />
          <Footer />
        </Layout>
      </RecoilRoot>
    </>
  );
}
