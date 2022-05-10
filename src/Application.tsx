import Nullstack from 'nullstack';
import type { NullstackContext } from './custom-types';
import './Application.scss';
import Home from './Home';

class Application extends Nullstack {

  prepare({ page }: NullstackContext) {
    page.locale = 'pt-BR';
  }

  renderHead() {
    return (
      <head>
        <link 
          href="https://fonts.gstatic.com" rel="preconnect" />
        <link 
          href="https://fonts.googleapis.com/css2?family=Crete+Round&family=Roboto&display=swap"
          rel="stylesheet" />
      </head> 
    )
  }

  render({ project }: NullstackContext & { myText: string }) {
    const Head = this.renderHead;
    return (
      <main>
        <Head />
        <Home route="/" projectName={project.name} />
      </main>
    )
  }

}

export default Application;