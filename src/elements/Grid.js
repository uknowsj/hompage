import React from 'react'
import styled, {css} from 'styled-components'

const Grid = (props) => {
  const { isFlex, align, justify, width, margin, padding, bg, children } = props
  const styles = { isFlex, align, justify, width, margin, padding, bg }
  return (
    <>
      <GridBox {...styles}>{children}</GridBox>
    </>
  )
}

Grid.defaultProps = {
  children: null,
  width: "100%",
  padding: false,
  margin: false,
  bg: false,
}

const GridBox = styled.div`
  width: ${(props) => props.width};
  height: 100%;
  box-sizing: border-box;
  ${(props) => (props.padding ? `padding: ${props.padding};` : "")};
  ${(props) => (props.margin ? `margin-top: ${props.margin}; margin-bottom: ${props.margin}` : "")};
  ${(props) => (props.bg ? `padding: ${props.bg};` : "")};
  ${(props) => props.isFlex&&
    css`
      display: flex;
      flex-wrap:wrap;
      align-items: ${props.align||'center'};
      justify-content: ${props.jusify||'space-between'};
  `}

  
  @media screen and (max-width:1296px) {
    width: 100%;
  }
`
export default Grid