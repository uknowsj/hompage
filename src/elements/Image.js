import React from 'react'
import styled, { css } from 'styled-components'

//좌우 패딩 상관없이 width 100%
export const ImageBackground = (props) => {

  return (
      <BackgroundStyled {...props}/>
  )
}

ImageBackground.defaultProps = {
  src: null,
  height: '100px',
  margin: '30px 0',
}

const BackgroundStyled = styled.div`
  position: relative;
  width: 100vw;
  height: ${(props) => props.height};
  left: calc(-50vw + 50%);
  margin: ${(props) => props.margin};
  background-image: url(${(props)=>props.src});
  background-repeat: no-repeat;
  background-size: cover;
`

//일반 이미지 컨테이너
export const ImgBox = ({ src, alt, width}) => {
  return (
    <ImgContainer width={width}>
      <img src={src} alt={alt} />
    </ImgContainer>
  )
}
const ImgContainer = styled.div`
  width: ${({width}) => width};
  height: inherit;
  overflow: hidden;
  img {
    width: 100%;
  }
`

