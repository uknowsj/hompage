import React, { useState } from 'react'
import styled, {css} from 'styled-components'
import { useMediaQuery } from 'react-responsive'
import { Grid, ImageBackground, ImgBox, 
  Marginer, TextBox, TitleBox, VideoBox } from 'elements'
import TextCard from 'components/TextCard'
import Button,{StyledButton} from 'components/Button'
import { SectionContainer } from 'components/Container'
import InquireBox from './InquiryBox'
import shortcut from 'assets/images/shortcut.svg'
import { Link } from 'react-router-dom'
import phoneImg from 'assets/images/phone.png'
import building from 'assets/images/building.jpg'
import main from 'assets/videos/main.mp4'

const FlexBox = styled.div`
  display:flex;
  border: 1px solid purple;
  ${({ dir, align, justify, width }) => {
    return css`
      flex-direction: ${dir||'row'};
      justify-content: ${justify||'space-between'};
      align-items: ${align||'center'};
      width: ${width||'inherit'};
    `
  }}

  width: 100%;
`
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid red;
`

export const Section1 = ({header,title,desc}) => {
  const isDesktop = useMediaQuery({ minWidth: 1296 });

  if (!isDesktop) return null;

  return (
    <SectionContainer>
      <TitleBox>{header}</TitleBox>
      <Marginer dir="vertical" margin="50px"/>
      <FlexBox width="1000px">
        <Wrapper>
          <TitleBox size="med">{title}</TitleBox>
          <TextBox>{desc}</TextBox>
          <Button icon={shortcut}>
            <img src={shortcut} alt="바로가기아이콘" style={{ width:'1rem', marginRight:'5px' }}/>
            <Link to="/button">바로가기</Link>
          </Button>
        </Wrapper>
        <Wrapper>
          <ImgBox src={phoneImg} alt="cellPhone" width="600px"/>
        </Wrapper>
      </FlexBox>
    </SectionContainer>
  )
}

export const Bar = styled.div`
  width: 80px;
  height: 2px;
  background-color: black;
  margin-top: 30px;
`

// SECTION 2
export const Section2 = ({header,desc,cards}) => {
  const isDesktop = useMediaQuery({ minWidth: 1296 })
  // 영상이 클릭되면 desc 부분 사라짐
  const [click, setClick] = useState(false)
  const handleClick = () => {
    console.log("클릭됨")
    setClick(!click);
  }

  // if (!isDesktop) return null;
  
  
  return (
    <SectionContainer>
      <Grid>
        <TitleBox>{header}</TitleBox>
      </Grid>
      <Grid>
        <Grid isFlex align="flex-start">
          <Grid margin="15px 20px 0 0">
            <TextBox>{desc}</TextBox>
            <Bar />
          </Grid>
          <Grid>
            <VideoBox 
              onClick={handleClick}
              isClick={click} 
              src={main} 
            />
          </Grid>
        </Grid>
      </Grid>
      <Marginer dir="vertical" margin="30px"/>
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

export const Bar2 = styled.div`
  width: 25px;
  height: 4px;
  background-color: black;
  margin-top: 5px;
  margin-bottom: 30px;
`
//1296
// SECTION 3
export const Section3 = ({header,companyName,companyInfo,inquiryTitle1,inquiryTitle2,inquiryText}) => {
  const isDesktop = useMediaQuery({ minWidth: 500 });

  if (!isDesktop) return null;

  return (
    <SectionContainer>
      <Marginer dir="vertical" margin="60px"/>
      <TitleBox center>{header}</TitleBox>
      <Marginer dir="vertical" margin="60px"/>
      <ImageBackground src={building} height="600px"/>
      <Marginer dir="vertical" margin="640px"/>
      <FlexBox width="1000px">
        <Wrapper>
          <TextBox weight="600">{companyName}</TextBox>
          <Bar2 />
          <TextBox size="1.4rem" lineHeight="2">{companyInfo}</TextBox>
        </Wrapper>
        <Wrapper>
          <div style={{width:'700px',height:'200px', background:'yellow'}}/> 
        </Wrapper>
      </FlexBox>
      <Marginer dir="vertical" margin="100px"/>
      <FlexBox justify="flex-start" width="1000px">
        <TitleBox size="med">{inquiryTitle1}</TitleBox>
      </FlexBox>
      <Marginer dir="vertical" margin="60px"/>
      <FlexBox align="flex-start" width="1000px">
        <Wrapper>
          <TitleBox size="small">{inquiryTitle2}</TitleBox>
          <Marginer dir="vertical" margin="15px"/>
          <TextBox size="1.4rem">{inquiryText}</TextBox>
        </Wrapper>
        <Wrapper>
          <InquireBox />
        </Wrapper>
      </FlexBox>
      <Marginer dir="vertical" margin="60px"/>
    </SectionContainer>
  )
}

const MiddleSection = () => {
  return (
    <SectionContainer>
      dd

    </SectionContainer>
  )
}

export default MiddleSection
