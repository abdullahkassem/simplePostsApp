import Head from "next/head";
import Layout from "./layout";
import "@/styles/global.scss"
import ErrorBoundary from "@/components/ErrorBoundry";

//loading font
import { Raleway } from 'next/font/google'
 
const myFont = Raleway({
  weight: '400',
  subsets: ['latin'],
})

export default function App({ Component, pageProps }) {
  // This will be wrapped around every page.

  return (
    <div className={myFont.className}>
      <Head>
        <title>Posts App</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />

      </Head>
      <ErrorBoundary>
        <Layout>
          <Component {...pageProps} />  
        </Layout>
      </ErrorBoundary>
    </div>
  )
}
