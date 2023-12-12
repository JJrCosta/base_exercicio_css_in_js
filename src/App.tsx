import colorsTheme from './Themes/colors'
import { Header } from './containers/Cabecalho'
import Hero from './containers/Hero'
import ListaVagas from './containers/ListaVagas'
import { Container, GlobalStyle } from './global'
import { ThemeProvider } from 'styled-components'

function App() {
  return (
    <ThemeProvider theme={colorsTheme}>
      <GlobalStyle />
      <Header />
      <Hero />
      <Container>
        <ListaVagas />
      </Container>
    </ThemeProvider>
  )
}

export default App
