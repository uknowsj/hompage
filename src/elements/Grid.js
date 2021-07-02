import React from 'react'
import styled, {css} from 'styled-components'

const Grid = (props) => {
  const { isFlex, direction, align, justify, width, margin, padding, bg, children } = props
  const styles = { isFlex, direction, align, justify, width, margin, padding, bg }
  return (
    <>
      <GridBox {...styles}>{children}</GridBox>
    </>
  )
}

Grid.defaultProps = {
  children: null,
  isFelx: false,
  width: "100%",
  padding: 0,
  margin: '15px 0',
  bg: 'none',
  direction: 'row',
  align: 'center',
  justify: 'space-between',
}

const GridBox = styled.div`
  /* border: 1px solid red; */

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
      flex-direction: ${props.direction}
      flex-wrap:wrap;
      align-items: ${props.align};
      justify-content: ${props.jusify};
  `}

  
  @media screen and (max-width:1296px) {
    width: 100%;
  }
`
export default Grid