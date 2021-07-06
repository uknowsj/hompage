import React from 'react'
import styled, { css } from 'styled-components'

// 기본 버튼
export const Button = ({ children }) => {
  return (
    <StyledButton>
      { children }
    </StyledButton>
  )
}
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


//원형 버튼
export const CircleButton = (props) => {
  const { width, height, bg, children } = props
  const styles = { width, height, bg }

  return (
    <CircleButtonStyle {...styles}>
      {children}
    </CircleButtonStyle>
  )
} 

const CircleButtonStyle = styled.div`
  border-radius: 50%;
  //width heigt background +버튼
  ${({ width, height, bg }) => css`
    width: width;
    height: height;
    background: bg;
  `}
`