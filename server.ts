import Nullstack, { NullstackServerContext } from 'nullstack'

import Application from './src/Application'

const context = Nullstack.start(Application) as NullstackServerContext

context.start = async function start() {}

export default context
