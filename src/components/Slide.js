import React from 'react'
import styled, { css } from 'styled-components'

export const Slide = (props) => {
  const { number, snapE, children } = props;
  return (
    <ViewBox snapE={snapE}>
      <List number={number} snapE={snapE}>
        {children}
      </List>
    </ViewBox>
  )
}

const ViewBox = styled.div`
  width: 100%;
  height: 100vh;
  overflow-y: ${(props)=>props.snapE?'hidden':'unset'};
`

const List = styled.div`
  width: 100vw;
  //전체 높이는 Content 개수에 따라 다르게
  height: 400vh;
  transform: ${(props) => props.number&&
    `translate3d(0,${props.number}px,0)`};
  // resize일 때는 transition 적용 안함
  transition: ${(props) => props.snapE&&`.5s ease-out`};


`




