import Head from "next/head";
import Layout from "./layout";
import "@/styles/global.scss"
import ErrorBoundary from "@/components/ErrorBoundry";


export default function App({ Component, pageProps }) {

  return (
    <>
      <Head>
        <title>Posts App</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />

      </Head>
      <ErrorBoundary>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ErrorBoundary>
    </>
  )
}
