import React from 'react'
import styled, { css } from 'styled-components'

// Div RowFlex ColumnFlex

// 1. Default Wrapper
export const Div = (props) => {
  const { position, width, height, padding, bg, children } = props
  const styles = { position, width, height, padding, bg, children }
  return (
    <DefaultStyle {...styles}>{children}</DefaultStyle>
  )
}

Div.defaultProps = {
  position: 'static',
  width: '100%',
  height: 'auto',
  padding: 0,
  bg: 'transparent',
  margin: '15px 0',
}

const DefaultStyle = styled.div`
  box-sizing: border-box;
  ${({position, width, height, padding, bg, margin}) => css`
    position: ${position};
    width: ${width};
    height: ${height};
    padding: ${padding};
    background: ${bg};
    margin: ${margin};
  `}
`
// 2. Flex - FlexRow
export const FlexRow = (props) => {
  const { justify, margin, children } = props
  return (
    <FlexStyle justify={justify} margin={margin}>
      {children}
    </FlexStyle>
  )
}

FlexRow.defaultProps = {
  justify: 'space-between',
  margin: '0',
}

const FlexStyle = styled.div`
  display: flex;
  justify-content: ${({justify}) => justify};
  margin-top : ${({margin}) => margin};
`

// 2. Flex - FlexColumn
export const FlexColumn = (props) => {
  const { align, margin, children } = props
  return (
    <ColumnFlexStyle align={align} margin={margin}>
      {children}
    </ColumnFlexStyle>
  )
}

FlexColumn.defaultProps = {
  align: 'center',
  margin: '0',
}

const ColumnFlexStyle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: ${({align}) => align};
  margin-top : ${({margin}) => margin};
`