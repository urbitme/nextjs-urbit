import { customAlphabet as nanoidCustom } from 'nanoid'

const basePath = '/apps/myappname'

export default {
  basePath: basePath,
  // Build ID needs to be a valid knot to support glob-http
  generateBuildId: nanoidCustom('1234567890abcdefghijklmnopqrstuvwxyz', 21),
  // This redirect is for convenience and is only available during development
  async redirects() {
    return [
      {
        source: '/',
        destination: basePath,
        basePath: false,
        permanent: false
      },
    ]
  },
}

