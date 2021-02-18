import { AppProps } from 'next/app'
import React from 'react'
import '../styles/globals.css'
import Head from 'next/head'
import { Provider } from 'react-redux'
import 'bootstrap/dist/css/bootstrap.min.css'
import store from '../store/store'
function App({ Component, pageProps }: AppProps) {
  React.useEffect(() => {
    const jssStyles = document.querySelector('#jss-server-side')
    if (jssStyles && jssStyles.parentNode) {
      jssStyles.parentNode.removeChild(jssStyles)
    }
  }, [])
  return (
    <Provider store={store}>
      <Head>
        <meta
          name='viewport'
          content='width=device-width, initial-scale=1, shrink-to-fit=no'
        />
        <meta name='Description' content='movie-zz provides movies' />
      </Head>
      <Component {...pageProps} />
    </Provider>
  )
}

export default App
