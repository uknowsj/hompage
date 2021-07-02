import React from 'react'
import styled, { css } from 'styled-components'

export const Marginer = ({dir,margin}) => {
  return (
    <MarginStyle 
      dir={dir} margin={margin}>
    </MarginStyle>
  )
}

const MarginStyle = styled.div`
  ${({dir, margin}) => css`
    height: ${dir==='vertical'?margin:0};
    width: ${dir==='horizontal'?margin:0};
  `}
`
