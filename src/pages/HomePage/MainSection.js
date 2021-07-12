import React, { useState } from 'react'
import styled, {css} from 'styled-components'
import { useMediaQuery } from 'react-responsive'
import { Grid, ImageBackground, ImgBox, 
  Marginer, TextBox, TitleBox, VideoBox } from 'elements'
import TextCard from 'components/TextCard'
import { Button } from 'elements/Button'
import { SectionContainer } from 'components/Container'
import InquireBox from './InquiryBox'
import shortcut from 'assets/images/shortcut.svg'
import { Link } from 'react-router-dom'
import phoneImg from 'assets/images/phone.png'
import building from 'assets/images/building.jpg'
import map from 'assets/images/map.png'
import main from 'assets/videos/main.mp4'
import rollingImg2 from 'assets/images/rollingImg2.png'

export const Section0 = () => {
  const isDesktop = useMediaQuery({ minWidth: 769 });

  if (!isDesktop) return null;

  return (
    <SectionContainer isLong>
      <Grid isFlex wrap="no wrap" bg="#f1f3f5" padding="0 0 0 calc((100vw - 1296px)/2)" height="80%">
        <Grid width="40%">
          <TextCard 
            title="독자의 시선으로 만든 창작집단"
            text="독자의 시선으로 콘텐츠을 제작하고 건전한 창작 문화를 
            활성화하기 위하여 시작된 뷰컴즈는 전자책 전문 제작·유통 업체로 
            변화하는 트렌드에  빠르게  대응하여 다양한 소비자들이 
            즐길 수 있는 콘텐츠를 만들어나가고 있습니다.
            
            콘텐츠의 제작·유통을 기반으로 다져온 노하우를 토대로
            다양한 플랫폼 서비스를 제공 빠르게 대응하여 다양한 소비자들이 
            즐길 수 있는 콘텐츠를 만들어나가고 있습니다."
            />
        </Grid>
        <ImgBox src={rollingImg2} width="auto"/>
      </Grid>
    </SectionContainer>
  )

}

export const Section1 = ({snapE, header,title,desc}) => {
  const isDesktop = useMediaQuery({ minWidth: 769 });

  if (!isDesktop) return null;

  return (
    <SectionContainer>
      <TitleBox snapE={snapE}>{header}</TitleBox>
      <Marginer margin="50px"/>
      <Grid isFlex wrap="no wrap" width="80%">
        <Grid isFlex direction="column" align="flex-start" width="60%">
          <TitleBox size="med">{title}</TitleBox>
          <TextBox>{desc}</TextBox>
          <Button icon={shortcut}>
            <ImgBox isFlex src={shortcut} alt="바로가기아이콘" width="1rem"/>
            <Marginer dir="horizontal" margin="5px" />
            <Link to="/button">바로가기</Link>
          </Button>
        </Grid>
        <Grid>
          <Box />
          {/* <ImgBox src={phoneImg} alt="cellPhone" width="600px"/> */}
        </Grid>
      </Grid>
    </SectionContainer>
  )
}

const Box = styled.div`
  width: 400px;
  height: 600px;
  background: #ffe066;
  border-radius : 36px;
  box-shadow: 3px 3px 6px #dee2e6;

`

export const Bar = styled.div`
  width: 80px;
  height: 2px;
  background-color: black;
  margin-top: 30px;
`

// SECTION 2
export const Section2 = ({snapE, header,desc,cards}) => {
  const isDesktop = useMediaQuery({ minWidth: 769 })
  // 영상이 클릭되면 desc 부분 사라짐
  const [click, setClick] = useState(false)
  const handleClick = () => {
    console.log("클릭됨")
    setClick(!click);
  }

  if (!isDesktop) return null;
  
  
  return (
    <SectionContainer snapE={snapE}>
      <Grid>
        <TitleBox>{header}</TitleBox>
      </Grid>
      <Grid>
        <VideoWrapper isClick={click}>
          <Grid margin="15px 20px 0 0">
            <TextBox>{desc}</TextBox>
            <Bar />
          </Grid>
            <VideoBox isClick={click}
              onClick={handleClick}
              src={main} 
            />
        </VideoWrapper>
      </Grid>
      <Marginer margin="30px"/>
      <Grid isFlex justify="flex-start" wrap="no wrap">
        {
          cards.map((card)=>{
            return (
              <Grid key={card.idx}>
                <TextCard  
                  title_size="small" 
                  text_size="1.4rem"
                  title={card.title}
                  text={card.text}
                />
              </Grid>
            )
          })
        }
      </Grid>
    </SectionContainer>
  )  
}

const VideoWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  position: relative;
  
  ${({isClick}) =>isClick&&css`
  
    &> div:nth-child(1) {
      display:none;
    }
  `}
`

export const Bar2 = styled.div`
  width: 25px;
  height: 4px;
  background-color: black;
  margin-top: 5px;
  margin-bottom: 30px;
`
//1296
// SECTION 3
export const Section3_ = ({header,companyName,companyInfo,inquiryTitle1,inquiryTitle2,inquiryText}) => {
  const isDesktop = useMediaQuery({ minWidth: 769 });

  if (!isDesktop) return null;

  return (
    <SectionContainer>
      <Marginer margin="60px"/>
      <TitleBox center>{header}</TitleBox>
      <Marginer margin="60px"/>
      <ImageBackground src={building} height="600px" margin="0"/>
      <Marginer margin="100px"/>
      <Grid isFlex wrap="no wrap">
        <Grid>
          <TitleBox size="small" weight="600">{companyName}</TitleBox>
          <Bar2 />
          <TextBox size="1.6rem" lineHeight="2">{companyInfo}</TextBox>
        </Grid>
        <Grid isFlex flexBasis="200%">
          <ImgBox src={map} width="100%" alt="지도"/>
        </Grid>
      </Grid>
      <Marginer margin="100px"/>
      <Grid justify="flex-start">
        <TitleBox size="med">{inquiryTitle1}</TitleBox>
      </Grid>
      <Grid isFlex align="flex-start" wrap="no wrap">
        <Grid>
          <TitleBox size="small">{inquiryTitle2}</TitleBox>
          <Marginer margin="15px"/>
          <TextBox size="1.6em">{inquiryText}</TextBox>
        </Grid>
        <Grid>
          <InquireBox />
        </Grid>
      </Grid>
      <Marginer margin="60px"/>
    </SectionContainer>
  )
}
export const Section3 = ({header,companyName,companyInfo,inquiryTitle1,inquiryTitle2,inquiryText}) => {
  const isDesktop = useMediaQuery({ minWidth: 769 });

  if (!isDesktop) return null;

  return (
    <SectionContainer>
      <Marginer margin="60px"/>
      <TitleBox center>{header}</TitleBox>
      <Marginer margin="60px"/>
      <ImageBackground src={building} height="600px" margin="0"/>
      <Marginer margin="100px"/>
      <Grid isFlex wrap="no wrap">
        <Grid>
          <TitleBox size="small" weight="600">{companyName}</TitleBox>
          <Bar2 />
          <TextBox size="1.6rem" lineHeight="2">{companyInfo}</TextBox>
        </Grid>
        <Grid isFlex flexBasis="200%">
          <ImgBox src={map} width="100%" alt="지도"/>
        </Grid>
      </Grid>
      <Marginer margin="100px"/>
      <Grid justify="flex-start">
        <TitleBox size="med">{inquiryTitle1}</TitleBox>
      </Grid>
      <Grid isFlex align="flex-start" wrap="no wrap">
        <Grid>
          <TitleBox size="small">{inquiryTitle2}</TitleBox>
          <Marginer margin="15px"/>
          <TextBox size="1.6em">{inquiryText}</TextBox>
        </Grid>
        <Grid>
          <InquireBox />
        </Grid>
      </Grid>
      <Marginer margin="60px"/>
    </SectionContainer>
  )
}

