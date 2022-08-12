import Layout, { Row, Main, Container } from 'components/layouts/WideStretched'
import Header from 'components/headers/Underline'

export default function Index() {
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
            <div className="border-4 border-dashed border-gray-200 rounded-lg h-96"></div>
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
