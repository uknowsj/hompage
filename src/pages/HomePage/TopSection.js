import React, { useContext } from 'react'
import { Context } from 'context'
import { SectionContainer } from 'components/Container'
import { VideoBanner } from 'elements'
import sample from 'assets/videos/main.mp4'
import Navbar from 'components/Navbar'
import { BannerKr, BannerEng } from 'data'
import styled from 'styled-components'
import main from 'assets/images/main_Moment.jpg'

const Background = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background-image: url(${({src})=>src||null});
  background-repeat: no-repeat;
  background-size: cover;
  z-index: -1;

  ::after{
    content: '';
    background: rgba(0,0,0,0.8);
    position: absolute;
    width: 100%;
    height: 100%;
    z-index:1;
  }
  
`

const TopSection = () => {
  const {state:{language}} = useContext(Context);
  return (
    <SectionContainer noPadding>
      <Background src={main}/>
      <VideoBanner 
        src={ sample } 
        texts={
          language.selected==='KOR'?
          BannerKr.text:
          BannerEng.text} 
        />
      <Navbar />
    </SectionContainer>
  )
}

export default TopSection
