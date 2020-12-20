import Head from 'next/head'
import { GlobalStyles } from '../../styles/globals'


function MyApp({ Component, pageProps }) {
  const robotoFontUrl = `https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap`

  return ( 
    <>
      <Head>
        <title>Tesla clone</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href={robotoFontUrl} rel="stylesheet" />
      </Head>

      <Component {...pageProps} />

      <GlobalStyles />
    </>
  )
}

export default MyApp
