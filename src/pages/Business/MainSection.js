import { SectionContainer } from 'components/Container'
import { Grid, RowFlex, ColumnFlex, Div, ImgBox, TitleBox, TextBox, Marginer, 
  Button, ImageBackground, VideoBanner} from 'elements'
import React from 'react'
import styled, {css} from 'styled-components'
import people from 'assets/images/people.png'
import { Card } from 'components/Card'
import { IoIosArrowDropleft } from 'react-icons/io' 
import { IoIosArrowDropright } from 'react-icons/io' 


import b2 from 'assets/images/b2.jpg'
import b3 from 'assets/images/b3.jpg'
import b4 from 'assets/images/b4.png'
import logo1 from 'assets/images/logo1.png'
import logo2 from 'assets/images/logo2.png'
import logo3 from 'assets/images/logo3.png'
import secretary1 from 'assets/images/secretary1.jpg'
import secretary2 from 'assets/images/secretary2.jpg'
import poster1 from 'assets/images/poster1.jpg'
import poster2 from 'assets/images/poster2.jpg'
import poster3 from 'assets/images/poster3.jpg'
import poster4 from 'assets/images/poster4.jpg'
import gling from 'assets/images/gling.png'
import TextCard from 'components/TextCard'

import main from 'assets/videos/main.mp4'

export const Section1 = () => {
  return (
    <ColumnFlex margin="90px">
      <TextBox weight="bold">IP Business & Platform Business</TextBox>
      <Marginer margin="15px"/>
        <TitleBox>비즈니스에 대한 소개</TitleBox>
      <Marginer margin="30px"/>
      <Div width="400px">
        <TextBox align="center">오리지널 인기 웹툰, 웹소설부터 하루를 유쾌하게 
  만들어 줄 새로운 채팅방 형식의 재미 콘텐츠, 톡 드립까지!
  세상의 모든 이야기를 카카오페이지에서 즐겨보세요.</TextBox>
      </Div>
    </ColumnFlex>
  )
}

export const Section2 = () => {
  return (
    <SectionContainer>
      <Grid isFlex width="100vw" justify="flex-start">
        <ImgBox src={people} alt="사람들 모습" width="1000px" />
        <Grid width="auto">
          <Grid padding="0 0 30% 20%">
            <TitleBox>{`독자의 시선으로\n만든 창작집단`}</TitleBox>
            <Marginer margin="30px"/>
            <TextBox lineHeight="2">{`아이들의 별이 아름다운 봅니다. 가난한 나는 헤일 하나에 계십니다.\n이네들은 하나 오면 마리아 청춘이 거외다. 내 못 별 봄이 가득 너무나 까닭입니다.`}</TextBox>
            <Marginer margin="30px"/>
            <TextBox weight="bold">{`| 사진설명\n2020.02.16`}</TextBox>
          </Grid>
        </Grid>
      </Grid>
    </SectionContainer>
  )
}

export const Section2_ = () => {
  return (
    <SectionContainer>
      {/* <RowFlex> */}
        {/* <ImgBox src={people} alt="사람들 모습" width="1000px" /> */}
        <Grid width="auto">
          <Grid padding="0 0 30% 20%">
            <TitleBox>{`독자의 시선으로\n만든 창작집단`}</TitleBox>
            <Marginer margin="30px"/>
            <TextBox lineHeight="2">{`아이들의 별이 아름다운 봅니다. 가난한 나는 헤일 하나에 계십니다.\n이네들은 하나 오면 마리아 청춘이 거외다. 내 못 별 봄이 가득 너무나 까닭입니다.`}</TextBox>
            <Marginer margin="30px"/>
            <TextBox weight="bold">{`| 사진설명\n2020.02.16`}</TextBox>
          </Grid>
        </Grid>
        <Div padding="0 0 0 50%" width="100%">
          <ImgStyle>
            <img src={people} width="1000px" />
          </ImgStyle>
        </Div>
      {/* </RowFlex> */}
    </SectionContainer>
  )
}

const ImgStyle = styled.div`
  position: relative;
  border: 1px solid red;
`

export const Section3 = () => {
  return (
    <>
      <TitleBox>비즈니스에 대한 소개</TitleBox>
      <TextBox align="center">{`아이들의 별이 아름다운 봅니다.\n가난한 나는 헤일 하나에 계십니다.\n이네들은 하나 오면 마리아 청춘이 거외다. 내 못 별 봄이 가득 너무나 까닭입니다.`}</TextBox>
      <Grid isFlex width="1296px" padding="0 20px">
        <Card src={b2}/>
        <Card src={b3}/>
        <Card src={b4}/>
      </Grid>
    </>
  )
}

// 브랜드

export const Section4 = () => {
  return (
    <Grid isFlex wrap="wrap" width="800px" margin="200px 0 200px 0" justify="center">
      <TitleBox>자사 브랜드</TitleBox>
      <Grid isFlex>
        <Grid isFlex direction="column" align="center">
          <ImgBox src={logo1} alt="로고1" width="150px" height="150px"/>
          <Marginer margin="30px"/>
          <TextBox weight="bold">ROMANCE LABLE ABLE</TextBox>
          <Marginer margin="15px"/>
          <TextBox align="center">여성향 전문 레이블로 어쩌고 저쩌고</TextBox>
        </Grid>
        <Grid isFlex direction="column" align="center">
          <ImgBox src={logo2} alt="로고2" width="150px" height="150px"/>
          <Marginer margin="30px"/>
          <TextBox weight="bold">ROMANCE LABLE ABLE</TextBox>
          <Marginer margin="15px"/>
          <TextBox align="center">여성향 전문 레이블로 어쩌고 저쩌고</TextBox>
        </Grid>
        <Grid isFlex direction="column" align="center">
          <ImgBox src={logo3} alt="로고3" width="150px" height="150px"/>
          <Marginer margin="30px"/>
          <TextBox weight="bold">ROMANCE LABLE ABLE</TextBox>
          <Marginer margin="15px"/>
          <TextBox align="center">여성향 전문 레이블로 어쩌고 저쩌고</TextBox>
        </Grid>
      </Grid>
    </Grid>
  )
}

//트랜스 미디어
export const Section5 = () => {
  return (
    <Wrapper>
      <TitleBox weight="bold">Trans Media</TitleBox>
      <Marginer margin="30px"/>
      <TextBox align="center">{`아이들의 별이 아름다운 봅니다. 가난한 나는 헤일 하나에 계십니다.\n이네들은 하나 오면 마리아 청춘이 거외다. 내 못 별 봄이 가득 너무나 까닭입니다.`}</TextBox>
      <Marginer margin="60px"/>
      <div className="imgWrapper" style={{display:"flex", flexDirection:"column"}}>
        <ImageBackground src={secretary1} width="900px" height="600px"/>
        <ImageBackground src={secretary2} width="900px" height="600px"/>
      </div>
      <Marginer margin="30px"/>
      <Grid isFlex width="900px">
        <Box><ImgBox src={poster1}/></Box>
        <Box><ImgBox src={poster2}/></Box>
        <Box><ImgBox src={poster3}/></Box>
      </Grid>
      <Grid isFlex width="900px" justify="center">
        <IoIosArrowDropleft size="50px" color="#D4D4D4"/>
        <Marginer dir="horizontal" margin="20px" />
        <IoIosArrowDropright size="50px" color="#495057"/>
      </Grid>
    </Wrapper>
  )

}

const Box = styled.div`
  width: 280px;
  height: 280px;
  background: #f1f3f5;
  & + & {
    margin-left: 30px;
  }
`
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  transition: .3s ease-out;
  .imgWrapper {
    &> div:nth-child(1){
      display:block;

    }
    &> div:nth-child(2){
      display:none;

    }
    &:hover {
      &> div:nth-child(1){
        display:none;

      }
      &> div:nth-child(2){
        display: block;
      }
    }
  }
`


//플랫폼 비즈니스
export const Section6 = () => {
  return (
    <SectionContainer isLong>
      <TitleBox weight="bold">Platform Business</TitleBox>
      <Marginer margin="30px"/>
      <TextBox align="center">{`아이들의 별이 아름다운 봅니다. 가난한 나는 헤일 하나에 계십니다.\n이네들은 하나 오면 마리아 청춘이 거외다. 내 못 별 봄이 가득 너무나 까닭입니다.`}</TextBox>
      <Marginer margin="60px"/>
      <Grid isFlex wrap="no wrap" padding="0 0 0 calc((100vw - 1256px)/2)" height="80%">
        <Grid width="40%">
          <TextCard 
            title="플랫폼 한다"
            text="콘텐츠 전문 인력들이 함께 최고의 가치를 지닌 콘텐츠를 기획 / 제작합니다."
            />
        </Grid>
        <div style={{background:"#D4D4D4", width:"900px", height:"600px"}}></div>
      </Grid>
      {/* 글링 정산*/}
      <Grid width="1256px" margin="200px 0 30px 0">
        <TextCard 
          title="글링 정산관리"
          text="아이들의 별이 아름다운 봅니다. 가난한 나는 헤일 하나에 계십니다. 이네들은 하나 오면 마리아 청춘이 거외다. "
        />
      </Grid>
      <VideoBanner src={ main } height="500px"/>
      <Grid width="1256px" margin="60px 0" isFlex >
        <Grid>
          <TextCard 
            title="01 소개1"
            text="소개1에 대한 설명이 들어가면 좋을 것 같습니다.  이네들은 하나 오면 마리아 청춘이 거외다.  "
            title_size="small"
          />
          <Marginer margin="60px"/>
                  <TextCard 
            title="02 소개2"
            text="소개2에 대한 설명이 들어가면 좋을 것 같습니다.  이네들은 하나 오면 마리아 청춘이 거외다.  "
            title_size="small"
          />
        </Grid>
        <Marginer dir="horizontal" margin="120px"/>
        <Grid>
          <ImageBackground src={gling} width="800px" height="500px"/>
        </Grid>
      </Grid>
    </SectionContainer>
  )
}