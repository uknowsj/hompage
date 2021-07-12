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
  size: 'med',
  weight: 'lighter',
  color: 'black',
  align: 'left',
  lineHeight: '1.6',
  fontWeight: ''
}

const TextStyle = styled.div`
  ${
    ({color, size, weight, align, lineHeight, font, fontWeight}) => {
      let _size = '1.6rem';
      if (size === 'big') _size = '1.8rem';
      else if (size === 'med') _size = '1.6rem';
      else if (size === 'small') _size = '1.4rem';
      else _size= size; //custom

      return css`
        color: ${color};
        font-size: ${_size};
        font-weight: ${weight};
        text-align: ${align};
        line-height: ${lineHeight};
        font-family: ${font==='spoka'?'Spoqa Han Sans':'inherit'};
        font-weight: ${fontWeight};
        letter-spacing: -1px;
      `
  }}

  white-space: pre-line;
  word-break: keep-all;
`

// 타이틀
export const TitleBox = (props) => {
  const { size, color, center, lineHeight, children } = props
  const styles = { size, color, center, lineHeight }
  return (
    <TitleStyle {...styles}>
      {children}
    </TitleStyle>
  )
}

TitleBox.defaultProps = {
  children: null,
  size: 'default',
  center: false,
  color: 'black',
  lineHeight: '1.6'
}

const TitleStyle = styled.div`
  font-size: ${({size}) => {
    if (size === 'big') return '6.2rem'
    else if (size === 'med') return '3.6rem';
    else if (size === 'small') return '2.6rem';
    else return '4.8rem';
  }};
  text-align:${({center}) => center&&'center'};
  font-weight: 600;
  color: ${({color}) => color};

  letter-spacing: -1px;
  white-space: pre-wrap;
  word-break: keep-all;
  line-height: ${({lineHeight}) => lineHeight};

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

