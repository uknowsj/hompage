import React from 'react'
import styled, { css } from 'styled-components'
import { TextBox, TitleBox } from 'elements'

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
  const { src, width, height } = props;

  return (
    <VideoContaienr>
      <video {...props} type="video/mp4" controls></video>
    </VideoContaienr>
  )
}

VideoBox.defaultProps = {

}

const VideoContaienr = styled.div`

`
