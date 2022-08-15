import { UrbitSessionScript } from 'components/useUrbit'
import { DarkModeProvider } from 'components/util/useDarkDefaultMode'
import 'styles/index.css'

function MyApp({ Component, pageProps }) {
  return (
    <DarkModeProvider>
      <UrbitSessionScript />
      <Component {...pageProps} />
    </DarkModeProvider>
  )
}

export default MyApp
