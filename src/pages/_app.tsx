import { AppProps } from 'next/app'
import React from 'react'
import '../styles/globals.css'
import Head from 'next/head'
import { Provider } from 'react-redux'
import 'bootstrap/dist/css/bootstrap.min.css'
import store from '../store/store'
import '../styles/root.scss'
import Router from 'next/router'
import { StyledLinearProgress } from '../components/Mui-custom/LoadingProgress/LoadingProgress'
function App({ Component, pageProps }: AppProps) {
  const [loading, setLoading] = React.useState<boolean>(false)
  React.useEffect(() => {
    const jssStyles = document.querySelector('#jss-server-side')
    if (jssStyles && jssStyles.parentNode) {
      jssStyles.parentNode.removeChild(jssStyles)
    }
  }, [])
  React.useEffect(() => {
    const start = () => {
      setLoading(true)
    }
    const end = () => {
      setLoading(false)
    }
    Router.events.on('routeChangeStart', start)
    Router.events.on('routeChangeComplete', end)
    Router.events.on('routeChangeError', end)
    return () => {
      Router.events.off('routeChangeStart', start)
      Router.events.off('routeChangeComplete', end)
      Router.events.off('routeChangeError', end)
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
      {loading && (
        <StyledLinearProgress
          style={{
            position: 'fixed',
            top: '0',
            left: '0',
            right: '0',
            zIndex: 5,
          }}
        />
      )}
      <Component {...pageProps} />
    </Provider>
  )
}

export default App
