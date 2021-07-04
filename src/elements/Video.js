import React from 'react'
import styled, { css } from 'styled-components'
import { TextBox, TitleBox } from 'elements'
import { FaRegPlayCircle } from 'react-icons/fa'

import {useState} from 'react'

// 메인페이지 영상 배너
export const VideoBanner = ({src, texts}) => {
  return (
    <BannerContainer>
      <VideoWrapper>
        <video muted autoPlay loop>
          <source src={src} type="video/mp4" />
        </video>
        <TitleBox size='big' color='white' center>
          {texts}
        </TitleBox>
      </VideoWrapper>
    </BannerContainer>
  )
}

const BannerContainer = styled.div`
  overflow: clip;
  width: 100vw;
  position: relative;
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
      object-position: -280px -150px;
    }

    div {
      font-size: 3.6rem;
    }
  }
`

// 일반 비디오 컨텐츠
export const VideoBox = (props) => {
  const { src, width, height, isClick } = props;

  return (
    <VideoContaienr isClick={isClick}>
      <VideoPlayButton isClick={isClick}>
        <FaRegPlayCircle size="10rem"/>
      </VideoPlayButton>
      <video {...props} type="video/mp4" controls
        width='100%'
      ></video>
    </VideoContaienr>
  )
}

// VideoBox.defaultProps = {

//   isClick:false,
// }

const VideoContaienr = styled.div`
  width: 100%;
  border: 1px solid red;
  position: relative;
  transition: all 1s ease-in-out;

  ${(props) => props.isClick?
      css`
      width: 200%;
      /* position: absolute; */
      transition: all 1s ease-in-out;
      border:1px solid blue;
    `:css`
    width: 100%;
  `

  }
`
// play 버튼
const VideoPlayButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  width: 100%;
  height: 100%;
  background: #ffffff30;
  color: white;

  svg {
    cursor: pointer;
    z-index: 100;
  }
  ${(props) => {
    console.log("props", props.isClick);
    return props.isClick&&css`
      display: none;
      &:hover {
        display: block;
      }
    `
  }}
  
`
