import React from 'react'
import styled, { css } from 'styled-components'

export const Slide = (props) => {
  const { number, children } = props;
  return (
    <ViewBox>
      <List>
        {children}
      </List>
    </ViewBox>
  )
}

const ViewBox = styled.div`
  border: 3px solid red;
  width: 100vw;
  overflow-y: hidden;
`

const List = styled.div`
  width: 100vw;
  //전체 높이는 Content 개수에 따라 다르게
  ${(props) => css`
    height: 400vh;
  `}
`




