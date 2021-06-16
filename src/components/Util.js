import React from 'react';
import styled from 'styled-components';

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

  div {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%,-50%);

    width: fit-content;

    font-size: 4rem;
    font-weight: bold;
    color: white;
    text-align: center;
  }

  @media screen and (max-width:768px) {
    video {
      width: 1000px;
    }

    div {
      font-size: 2rem;
    }
  }

`

export const Video = ({src, texts}) => {
  return (
    <BannerContainer>
      <VideoWrapper>
        <video muted autoPlay loop>
          <source src={src} type="video/mp4" />
        </video>
        <div>
          {
            texts.map(text => (<p>{text}</p>))
          }
        </div>      
      </VideoWrapper>
    </BannerContainer>
  )
}

const ImgContainer = styled.div`
  border: 1px solid purple;
  width: ${({width}) => width};

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