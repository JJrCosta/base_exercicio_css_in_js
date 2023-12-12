import { HeaderContainer } from './containers/Cabecalho/styles'
import Hero from './containers/Hero'
import ListaVagas from './containers/ListaVagas'

import { Container, GlobalStyle } from './global'

function App() {
  return (
    <>
      <GlobalStyle />
      <HeaderContainer />
      <Hero />
      <Container>
        <ListaVagas />
      </Container>
    </>
  )
}

export default App
