import React from 'react'
import { Grid, ImageBackground, TextBox, TitleBox, Marginer, ImgBox, VideoBox } from 'elements'
import { useMediaQuery } from 'react-responsive'
import { SectionContainer } from 'components/Container'
import phoneImg from 'assets/images/phone.png'
import { Link } from 'react-router-dom'
import shortcut from 'assets/images/shortcut.svg'
import Button from 'components/Button'
import map from 'assets/images/map.png'
import building from 'assets/images/building.jpg'
import InquiryBoxMob from './InquiryBoxMob'

export const MobSection1 = ({header, title, desc}) => {
  const isMobile = useMediaQuery({ maxWidth: 768 });
  if (!isMobile) return null;

  return (
    <SectionContainer>
        <Marginer dir="vertical" margin="100px"></Marginer>
        <TitleBox>{header}</TitleBox>
        <Marginer dir="vertical" margin="50px"/>
        <Grid isFlex direction="column" align="center">
          <ImgBox src={phoneImg} width="80%"></ImgBox>
        </Grid>
        <Grid isFlex direction="column" align="center" width="60%">
          <TitleBox size="med">{title}</TitleBox>
          <Marginer dir="vertical" margin="15px"/>
          <TextBox align="center">{desc}</TextBox>
          <Button icon={shortcut}>
            <img src={shortcut} alt="바로가기아이콘" style={{ width:'1rem', marginRight:'5px' }}/>
            <Link to="/button">바로가기</Link>
          </Button>
        </Grid>
   </SectionContainer>
  )
}

export const MobSection2 = ({header, desc, src}) => {
  const isMobile = useMediaQuery({ maxWidth: 768 });
  if (!isMobile) return null;

  return (
    <SectionContainer>
      <TitleBox>{header}</TitleBox>
      <Marginer dir="vertical" margin="30px"/>
      <TextBox>{desc}</TextBox>
      <Marginer dir="vertical" margin="15px"/>
      <Grid margin="30px 0" padding="30px 0">
        <VideoBox src={src} width="100%" />
      </Grid>
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
      <Marginer dir="vertical" margin="100px"/>
      <Grid isFlex direction="column" align="flex-left">
        <div style={{width:'60%'}}>
          <TitleBox>{header}</TitleBox>
        </div>
        <Marginer dir="vertical" margin="30px"/>
        <TextBox size="1.4rem" lineHeight="2">{desc}</TextBox>
        <ImageBackground src={building} height="300px" left/>
        <TitleBox size="med">{companyName}</TitleBox>
        <Marginer dir="vertical" margin="15px"/>
        <TextBox size="1.4rem" lineHeight="2">{companyInfo}</TextBox>
        <ImageBackground src={map} height="300px" left margin="50px 0 0 0"/>
      </Grid>
      <Grid margin="60px 0">
        <TitleBox size="med">{inquiryTitle1}</TitleBox>
        <Marginer dir="vertical" margin="15px"/>
        <TextBox size="1.6rem" lineHeight="2" weight="600">{inquiryTitle2}</TextBox>
        <TextBox size="1.4rem" lineHeight="2">{inquiryText}</TextBox>
        <Marginer dir="vertical" margin="60px"/>
        <InquiryBoxMob />
      </Grid>
      <Marginer dir="vertical" margin="60px"/>
    </SectionContainer>
  )
}