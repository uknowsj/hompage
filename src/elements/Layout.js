import React from 'react'
import styled, { css } from 'styled-components'

// Div RowFlex ColumnFlex

// 1. Default Wrapper
export const Div = (props) => {
  const { width, height, padding, bg, children } = props
  const styles = { width, height, padding, bg, children }
  return (
    <DefaultStyle {...styles}>{children}</DefaultStyle>
  )
}

Div.DefaultStyle = {
  width: 'auto',
  height: 'auto',
  padding: 0,
  bg: 'white',
  margin: '15px 0',
}

const DefaultStyle = styled.div`
  box-sizing: border-box;
  ${({width, height, padding, bg, margin}) => css`
    width: ${width};
    height: ${height};
    padding: ${padding};
    background: ${bg};
    margin: ${margin};
  `}
`
// 2. Flex - RowFlex
export const RowFlex = (props) => {
  const { justify, children } = props
  return (
    <FlexStyle>
      {children}
    </FlexStyle>
  )
}

// 2. Flex - ColumnFlex
export const ColumnFlex = (props) => {
  const { margin, children } = props
  return (
    <ColumnFlexStyle margin={margin}>
      {children}
    </ColumnFlexStyle>
  )
}

const FlexStyle = styled.div`
  ${DefaultStyle};
  display: flex;
  align-items: center;
  justify-content: space-between;
`
const ColumnFlexStyle = styled(FlexStyle)`
  flex-direction: column;
  margin-top : ${({margin}) => margin};
`