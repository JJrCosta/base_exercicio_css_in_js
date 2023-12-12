import styled from 'styled-components'

export const HeaderContainer = styled.header`
  text-align: center;
  background-color: #${(props) => props.theme.primary};
  padding: 24px 0;
`
export const MainTitle = styled.h1`
  font-size: 2em;
  color: ${(props) => props.theme.secondary};
`
