import React from 'react';
import styled, { css } from 'styled-components';

const BannerContainer = styled.div`
  overflow: clip;
  width: 100%;
`
const VideoWrapper = styled.div`
  position: relative;
  max-height: 100vh;
  
  video {
    position: relative;
    left: 50%;
    transform: translateX(-50%);
    
    width: 1920px;
  }

  div { //TextBox
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%,-50%);
    width: fit-content;
  }

  @media screen and (max-width:768px) {
    video {
      width: 1000px;
    }

    div {
      font-size: 3.2rem;
    }
  }

`
export const TextStyle = styled.div`
  ${
    ({color, size, weight, align}) => {
      return css`
        color: ${color||'black'};
        font-size: ${size||'1.6rem'};
        font-weight: ${weight||'lighter'};
        text-align: ${align||'left'};
      `
  }}
  line-height: 1.5;
  white-space: pre-line;
`

export const TextBox = ({ size, weight, color, align, children }) => {
  return (
    <TextStyle size={size} weight={weight} color={color} align={align}>
      { children }
    </TextStyle>
  )
}

export const VideoBanner = ({src, texts}) => {
  return (
    <BannerContainer>
      <VideoWrapper>
        <video muted autoPlay loop>
          <source src={src} type="video/mp4" />
        </video>
        <TextBox size={'6.4rem'} weight={'bold'} color={'white'} align={'center'}>
          {texts}
        </TextBox>
      </VideoWrapper>
    </BannerContainer>
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

export const Img = ({ src, alt, width}) => {
  return (
    <ImgContainer width={width}>
      <img src={src} alt={alt} />
    </ImgContainer>
  )
}


