import React from 'react'
import styled, { css } from 'styled-components'

const StyledButton = styled.button`
  border: 1px solid #adb5bd;
  border-radius: 4px;
  display: inline-flex;
  
  justify-content: center;
  align-items: center;

  margin: 2rem 0;
  height: 40px;
  width: 110px;
  
  color: #31302B;

  cursor: pointer;

  background-color: white;
  &:hover {
    /* color: #FABE00; */
  }

  font-family: 'Noto Sans KR', 'Spoqa Han Sans', 'Sans-serif';
  font-weight: 600;


`
const Button = ({ children }) => {
  return (
    <StyledButton>
      { children }
    </StyledButton>
  )
}

export default Button
