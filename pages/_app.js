import { UrbitSessionScript } from 'components/useUrbit'
import { DarkModeProvider } from 'components/util/useDarkMode'
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
