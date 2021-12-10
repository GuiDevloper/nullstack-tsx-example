import Nullstack from 'nullstack';
import Application from './out/Application';

const context = Nullstack.start(Application);

context.start = async function start() {
  // https://nullstack.app/pt-br/inicializacao-da-aplicacao
}

export default context;