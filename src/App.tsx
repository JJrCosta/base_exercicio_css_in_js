import { Header } from './containers/Cabecalho'
import Hero from './containers/Hero'
import ListaVagas from './containers/ListaVagas'

import { Container, GlobalStyle } from './global'

function App() {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Hero />
      <Container>
        <ListaVagas />
      </Container>
    </>
  )
}

export default App
