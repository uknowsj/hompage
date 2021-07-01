import React from 'react'
import styled, { css } from 'styled-components'

//좌우 패딩 상관없이 width 100%
export const ImageBackground = (props) => {
  const { src, height } = props

  return (
      <BackgroundStyled src={src} height={height}/>
  )
}

ImageBackground.defaultProps = {
  src:null,
  height:'100px'
}

const BackgroundStyled = styled.div`
  position: relative;
  width: 100vw;
  height: ${(props) => props.height};
  left: calc(-50vw + 50%);
  background-image: url(${(props)=>props.src});
  background-repeat: no-repeat;
  background-size: cover;
`

