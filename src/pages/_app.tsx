import { AppProps } from 'next/app'
import React from 'react'
import '../styles/globals.css'
import 'react-grid-layout/css/styles.css'
import Head from 'next/head'
import { Provider } from 'react-redux'
import 'bootstrap/dist/css/bootstrap.min.css'
import store from '../store/store'
import '../styles/root.scss'
import Router from 'next/router'
import ProgressBar from '@badrap/bar-of-progress'
const progress = new ProgressBar({
  size: 4,
  color: '#48e3e9',
  className: 'z-50',
  delay: 100,
})
// progress.start()
Router.events.on('routeChangeStart', progress.start)
Router.events.on('routeChangeComplete', progress.finish)
Router.events.on('routeChangeError', progress.finish)
function App({ Component, pageProps }: AppProps) {
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
