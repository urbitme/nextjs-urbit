import { customAlphabet as nanoidCustom } from 'nanoid'

export default {
  basePath: '/apps/myappname',
  // Build ID needs to be a valid knot to support glob-http
  generateBuildId: nanoidCustom('1234567890abcdefghijklmnopqrstuvwxyz', 21),
}

