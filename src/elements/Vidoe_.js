import React from 'react'
import styled, { css } from 'styled-components'
import { TextBox, TitleBox } from 'elements'
import { FaRegPlayCircle } from 'react-icons/fa'

import {useState} from 'react'

// 메인페이지 영상 배너
export const VideoBanner = ({src, texts, height}) => {
  return (
    <Container>
      <VideoWrapper>
        <video muted autoPlay loop>
          <source src={src} type="video/mp4" />
        </video> 
      </VideoWrapper>
      <BannerCover />
      <div style={{position:'relative',width:'1336px', padding: '0 20px', margin:'0 auto', top:'50%',transform:'translateY(-50%)'}}>
          <TitleBox size='big' color='white'>
            {texts}
          </TitleBox>
          <TextBox className="rrrr" color='white' size='2rem' weight="normal" >
            {`안녕하세요. 전자책 전문 제작·유통 업체 뷰컴즈입니다.`}
          </TextBox>

        </div>
    </Container>

  )

}
const BannerCover = styled.div`
  position: absolute;
  width:100vw;
  height:100vh;
  background:#21212195;
`
const Container = styled.div`
  width: 100vw;
  height: 100vh;
  overflow: clip;
`
const VideoWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;

  video {
    transform: translateY(50%);
    position: absolute;
    width: 1920px;
  }

  & ::after {
    content: '';
    display: block;
    width: 100vw;
    height: 100vh;
  }
`