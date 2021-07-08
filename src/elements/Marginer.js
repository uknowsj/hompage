import React from 'react'
import styled, { css } from 'styled-components'

export const Marginer = ({dir,margin, children}) => {
  return (
    <MarginStyle dir={dir} margin={margin}>
      {children}
    </MarginStyle>
  )
}

Marginer.defaultProps = {
  dir: 'vertical',
  margin: 0,
}

const MarginStyle = styled.div`
  ${({dir, margin}) => css`
    height: ${dir==='vertical'?margin:0};
    width: ${dir==='horizontal'?margin:0};
  `}
`
