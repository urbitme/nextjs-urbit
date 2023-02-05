import { useEffect, useCallback } from 'react'
import Layout, { Row, Main, Container } from 'components/layouts/WideStretched'
import Header from 'components/headers/Underline'
import { useUrbit } from 'components/useUrbit'

export default function Index() {
  const urbit = useUrbit()

  const doPoke = useCallback(async () => {
    await urbit.poke({
      app: "hood",
      mark: "helm-hi",
      json: "index page poke"})
  }, [urbit])

  // This will fire every time you navigate to the index page
  // Use /pages/_app.js for once-per-app effects
  useEffect(() => {
    if (urbit) {
      doPoke()
    }
  }, [urbit, doPoke])

  return (
    <Layout className="bg-gray-50 text-gray-800 dark:bg-gray-800 dark:text-white transition-colors duration-200">
      <Row>
        <Container>
          <Header />
        </Container>
      </Row>
      <Main>
        <Container>
          <div className="px-4 py-6 sm:px-0">
            <div className="border-4 border-dashed border-gray-200 rounded-lg h-96 p-12">
              {!urbit && <span>Loading...</span>}
            </div>
          </div>
        </Container>
      </Main>
      <Row className="border-t border-gray-300 bg-gray-200 text-gray-600">
        <Container>
          Footer
        </Container>
      </Row>
    </Layout>
  )
}
