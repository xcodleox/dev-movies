import styled, { css } from 'styled-components'

const butaoStylo = css`
  border: 3px solid #ffffff;
  background: transparent;
  color: #ffffff;
  border-radius: 30px;
  padding: 10px 20px;
  cursor: pointer;
  font-weight: 500;
  font-size: 20px;

  &:hover {
    color: #ff0000;
    background: #ffffff;
  }
`
export const ButtonRed = styled.button`
  ${butaoStylo}

  background: #ff0000;
  border: 4px solid transparent;
  box-shadow: 0px 0px 7px 8px rgb(255 0 0 / 30%);

  &:hover {
    box-shadow: 0px 0px 7px 15px rgb(255 0 0 / 30%);
    background: #ff0000;
    color: #ffffff;
  }
`
export const ButtonWhite = styled.button`
  ${butaoStylo}
`
