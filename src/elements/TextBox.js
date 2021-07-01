import React from 'react'
import styled, { css } from 'styled-components'

// 기본 텍스트
export const TextBox = (props) => {
  const { size, weight, color, align, lineHeight, font, children } = props
  const styles = { size, weight, color, align, lineHeight, font }
  return (
    <TextStyle {...styles}>
      { children }
    </TextStyle>
  )
}

TextBox.defaultProps = {
  size: '1.6rem',
  weight: 'lighter',
  color: 'black',
  align: 'left',
  lineHeight: '1.6',
}

const TextStyle = styled.div`
  ${
    ({color, size, weight, align, lineHeight, font}) => {
      return css`
        color: ${color};
        font-size: ${size};
        font-weight: ${weight};
        text-align: ${align};
        line-height: ${lineHeight};
        font-family: ${font==='spoka'?'Spoqa Han Sans':'inherit'};
      `
  }}

  white-space: pre-line;
  word-break: keep-all;
`

// 타이틀
export const TitleStyle = styled.div`
  font-size: ${({size}) => {
    if (size === 'med') return '3.6rem';
    else if (size === 'small') return '2.6rem';
    else return '4.8rem';
  }};
  text-align:${({center}) => center&&'center'};
  font-weight: 600;

  letter-spacing: -1px;
  white-space: pre-wrap;
  word-break: keep-all;

  @media screen and (max-width:768px) {
    font-size: ${({size}) => {
      if (size === 'med') return '2.2rem';
      else return '3.6rem';
    }}
  }

  @media screen and (max-width:500px) {
    font-size: ${({size}) => {
      if (size === 'med') return '2.2rem';
      else return '3rem';
    }}
  }

`
export const TitleBox = ({children, size, center}) => {
  return (
    <TitleStyle size={size} center={center}>{children}</TitleStyle>
  )
}
