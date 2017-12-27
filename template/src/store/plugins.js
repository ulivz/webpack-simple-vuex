import createLogger from '../../../src/plugins/logger'

export default process.env.NODE_ENV !== 'production'
  ? [createLogger()]
  : []
