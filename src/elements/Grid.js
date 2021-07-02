import React from 'react'
import styled, {css} from 'styled-components'

const Grid = (props) => {
  const { isFlex, direction, align, justify, width, margin, padding, bg, display, children } = props
  const styles = { isFlex, direction, align, justify, width, margin, padding, bg, display }
  return (
    <>
      <GridBox {...styles}>{children}</GridBox>
    </>
  )
}

Grid.defaultProps = {
  children: null,
  isFlex: false,
  direction: 'row',
  align: 'center',
  justify: 'space-between',
  wrap: 'wrap',
  width: "100%",
  padding: 0,
  margin: '15px 0',
  bg: 'none',
  display: false,
}

const GridBox = styled.div`
  /* border: 1px solid red; */
  display: ${(props) => props.display&&'none'};
  width: ${(props) => props.width};
  height: 100%;
  box-sizing: border-box;
  ${(props) => css`
    padding: ${props.padding};
    margin: ${props.margin};
    background: ${props.bg};
  `};
  
  ${(props) => props.isFlex&&
    css`
      display: flex;
      flex-direction: ${props.direction};
      flex-wrap: ${props.wrap};
      align-items: ${props.align};
      justify-content: ${props.justify};
  `}

  
  @media screen and (max-width:1296px) {
    width: 100%;
  }
`
export default Grid