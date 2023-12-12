import styled from 'styled-components'

export const Form = styled.form`
  display: grid;
  grid-template-columns: 1fr auto;
  background-color: ${(props) => props.theme.secondary};
  padding: 32px;
  border-radius: 12px;
  margin-top: 40px;

  @media (max-width: 420px) {
    padding: 12px;
  }
`

export const Campo = styled.input`
  padding: 0 16px;
  outline-color: ${(props) => props.theme.primary};
`

export const BtnPesquisar = styled.button`
  background-color: ${(props) => props.theme.primary};
  border: 1px solid ${(props) => props.theme.primary};
  height: 40px;
  padding: 0 16px;
  font-size: 18px;
  color: ${(props) => props.theme.secondary};
  margin-left: 8px;
  cursor: pointer;

  @media (max-width: 420px) {
    padding: 5px;
  }
`
