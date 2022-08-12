import { DarkModeProvider } from 'components/util/useDarkDefaultMode'
import 'styles/index.css'

function MyApp({ Component, pageProps }) {
  return (
    <DarkModeProvider>
      <Component {...pageProps} />
    </DarkModeProvider>
  )
}

export default MyApp
