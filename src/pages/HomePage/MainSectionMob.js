import React from 'react'
import { ImageBackground, TextBox, TitleBox, Marginer } from 'elements'
import styled, {css} from 'styled-components'
import { useMediaQuery } from 'react-responsive'
import { SectionContainer } from 'components/Container'
import phoneImg from 'assets/images/phone.png'
import { Link } from 'react-router-dom'
import shortcut from 'assets/images/shortcut.svg'
import Button,{StyledButton} from 'components/Button'
import map from 'assets/images/map.png'
import building from 'assets/images/building.jpg'
import InquiryBoxMob from './InquiryBoxMob'

const Flexbox = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  /* align-items: center; */
  border: 1px solid brown;
`
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: ${({align}) => align||'left'};
  border: 1px solid red;
  margin-top:60px;
`

//가로길이에 따라 줄어드는 이미지
const ImgBox = styled.div`
  background-image: url(${({url})=>url||null});
  background-repeat: no-repeat;
  background-size: 100%;
  background-position: center center;

  width: 600px;
  height: 371px;

  @media screen and (max-width:768px) {
    width: 330px;
    height: 205px;

    max-width: 100vw;
  }

` 


export const MobSection1 = ({header, title, desc}) => {
  const isMobile = useMediaQuery({ maxWidth: 1296 });
  if (!isMobile) return null;

  return (
    <SectionContainer>
      <Flexbox>
        <Marginer dir="vertical" margin="100px"></Marginer>
        <TitleBox>{header}</TitleBox>
        <Marginer dir="vertical" margin="50px"/>
        <Wrapper align="center">
          <ImgBox url={phoneImg}></ImgBox>
          {/* <Img src={phoneImg} alt="cellPhone" width="300px"/> */}
          {/* <div style={{width:"500px", height:"300px", background:"yellow"}}></div> */}
        </Wrapper>
        <Wrapper align="center">
          <Marginer dir="vertical" margin="50px"/>
          <TitleBox size="med">{title}</TitleBox>
          <Marginer dir="vertical" margin="15px"/>
          <TextBox align="center">{desc}</TextBox>
          <Button icon={shortcut}>
            <img src={shortcut} alt="바로가기아이콘" style={{ width:'1rem', marginRight:'5px' }}/>
            <Link to="/button">바로가기</Link>
          </Button>
        </Wrapper>
      </Flexbox>
   </SectionContainer>
  )
}

const VideoStyle = styled.div`
  overflow: hidden;
  ${({ width, height }) => css`
    width: ${width||'auto'};
    height: ${height||'auto'};
  `}
  video {
    object-fit: cover;
    width: 100%;
    height: 100%;
  }
`
export const VideoBox = ({ src, width, height }) => {
  return (
    <VideoStyle width={width} height={height}>
      <video autoPlay muted loop>
        <source src={src} type="video/mp4"/>
      </video>
    </VideoStyle>
  )
}


export const MobSection2 = ({header, desc, src}) => {
  const isMobile = useMediaQuery({ maxWidth: 1296 });
  if (!isMobile) return null;

  return (
    <SectionContainer>
      <Flexbox>
        <Marginer dir="vertical" margin="100px"></Marginer>
        <TitleBox>{header}</TitleBox>
        <Marginer dir="vertical" margin="30px"/>
        <TextBox>{desc}</TextBox>
        <Marginer dir="vertical" margin="15px"/>
        <Wrapper>
          <VideoBox src={src} height="387px" />
        </Wrapper>
        
      </Flexbox>
   </SectionContainer>
  )
}

export const MobSection3 = ({
    header,companyName,companyInfo,desc,
    inquiryTitle1,inquiryTitle2,inquiryText
  }) => {
  
  const isMobile = useMediaQuery({ maxWidth: 768 });
  if (!isMobile) return null;

  return (
    <SectionContainer>
      <Flexbox>
        <Marginer dir="vertical" margin="100px"/>
        <Wrapper>
          <TitleBox>{header}</TitleBox>
          <Marginer dir="vertical" margin="30px"/>
          <TextBox size="1.4rem" lineHeight="2">{desc}</TextBox>
          <ImageBackground src={building} height="300px"/>
          <TitleBox size="med">{companyName}</TitleBox>
          <Marginer dir="vertical" margin="15px"/>
          <TextBox size="1.4rem" lineHeight="2">{companyInfo}</TextBox>
          <ImageBackground src={map} height="300px" margin="50px 0 0 0"/>
        </Wrapper>
        <Wrapper>
          <TitleBox size="med">{inquiryTitle1}</TitleBox>
          <Marginer dir="vertical" margin="15px"/>
          <TextBox size="1.6rem" lineHeight="2" weight="600">{inquiryTitle2}</TextBox>
          <TextBox size="1.4rem" lineHeight="2">{inquiryText}</TextBox>
          <Marginer dir="vertical" margin="60px"/>
          <InquiryBoxMob />
        </Wrapper>
      </Flexbox>
      <Marginer dir="vertical" margin="60px"/>
    </SectionContainer>
  )
}