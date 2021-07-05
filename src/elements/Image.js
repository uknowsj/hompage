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
  left: ${(props) => props.left&&'calc(-50vw + 50%)'};
  margin: ${(props) => props.margin};
  background-image: url(${(props)=>props.src});
  background-repeat: no-repeat;
  background-size: cover;
`

//일반 이미지 컨테이너
export const ImgBox = ({ src, alt, width, height}) => {
  return (
    <ImgContainer width={width} height={height}>
      <img src={src} alt={alt} />
    </ImgContainer>
  )
}

ImgBox.defaultProps = {
  width: '100%',
  height: 'inherit',
  alt: '이미지 설명',
  src: 'null',
  isFlex: false,
}
const ImgContainer = styled.div`
  display: ${(isFlex) => isFlex&&'flex'};
  width: ${({width}) => width};
  height: ${({height}) => height};
  overflow: hidden;
  img {
    width: 100%;
  }
`



// //가로길이에 따라 줄어드는 이미지
// const ImgBox = styled.div`
//   background-image: url(${({url})=>url||null});
//   background-repeat: no-repeat;
//   background-size: 100%;
//   background-position: center center;

//   width: 600px;
//   height: 371px;

//   @media screen and (max-width:768px) {
//     width: 330px;
//     height: 205px;

//     max-width: 100vw;
//   }

// ` 
