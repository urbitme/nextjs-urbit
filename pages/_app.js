import Head from 'next/head'
import { useRouter } from 'next/router'
import { DarkModeProvider } from 'components/util/useDarkMode'
import 'styles/index.css'

function MyApp({ Component, pageProps }) {
  const router = useRouter()

  return (
    <>
      <Head>
        <link rel="icon" href={`${router.basePath}/favicon.ico`} />
      </Head>
      <DarkModeProvider>
        <Component {...pageProps} />
      </DarkModeProvider>
    </>
  )
}

export default MyApp
