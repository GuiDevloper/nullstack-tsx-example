import './Home.scss'
import Nullstack, { NullstackClientContext, NullstackNode } from 'nullstack'

import Logo from 'nullstack/logo'

declare function Link(props: LinkProps): NullstackNode

type HomeProps = {
  greeting: string
}

type LinkProps = {
  href: string
}

class Home extends Nullstack<HomeProps> {

  prepare({ project, page }: NullstackClientContext) {
    page.title = `${project.name} - Nulla-chan te dá as boas vindas!`
    page.description = `${project.name} foi feito com Nullstack`
  }

  renderLink({ children, href }: NullstackClientContext<LinkProps>) {
    const link = `${href}?ref=create-nullstack-app`
    return (
      <a href={link} target="_blank" rel="noopener noreferrer">
        {children}
      </a>
    )
  }

  render({ project, greeting }: NullstackClientContext<HomeProps>) {
    return (
      <section>
        <article>
          <Link href="https://nullstack.app/pt-br">
            <Logo height={60} light />
          </Link>
          <h1> {project.name} </h1>
          <h1> {greeting} </h1>
          <p>
            Fizemos alguns exemplos para te ajudar a começar! Dê uma olhada na
            pasta src.
          </p>
          <span>
            Dica: nós temos uma
            <Link href="vscode:extension/ChristianMortaro.vscode-nullstack">
              Extensão para VS Code
            </Link>
          </span>
          <ul>
            <li>
              <Link href="https://nullstack.app/pt-br/componentes-renderizaveis">
                🎉 Crie seu primeiro componente
              </Link>
            </li>
            <li>
              <Link href="https://nullstack.app/pt-br/rotas-e-parametros">
                ✨ Configure sua primeira rota
              </Link>
            </li>
            <li>
              <Link href="https://nullstack.app/pt-br/contexto">
                ⚡ Defina seu context
              </Link>
            </li>
            <li>
              <Link href="https://github.com/nullstack/nullstack/stargazers">
                ⭐ Dê uma estrela no github
              </Link>
            </li>
            <li>
              <Link href="https://youtube.com/nullstack">
                🎬 Se inscreva no nosso Canal do Youtube
              </Link>
            </li>
          </ul>
        </article>
        <aside>
          <Link href="https://nullstack.app/pt-br/waifu">
            <img
              src="/nulla-chan.webp"
              alt="Nulla-Chan: waifu oficial do Nullstack"
            />
          </Link>
        </aside>
      </section>
    )
  }

}

export default Home
