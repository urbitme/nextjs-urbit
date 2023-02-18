import { Html, Head, Main, NextScript } from 'next/document'
import Script from 'next/script'
import { urbitSessionScriptUrl } from 'components/useUrbit'

export default function Document() {
  return (
    <Html>
      <Head />
      <body>
        <Main />
        <NextScript />
        <Script src={urbitSessionScriptUrl()} strategy='beforeInteractive' />
      </body>
    </Html>
  )
}
