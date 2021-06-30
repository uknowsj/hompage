import { SectionContainer } from 'components/Container'
import { TextBox, TitleBox } from 'components/Util'
import React from 'react'
import styled, {css} from 'styled-components'
import shortcut from 'assets/images/shortcut.svg'
import Button,{StyledButton} from 'components/Button'
import { Link } from 'react-router-dom'
import { Img, Marginer } from 'components/Util'
import phoneImg from 'assets/images/phone.png'
import building from 'assets/images/building.jpg'
import InquireBox from './InquiryBox'
import { useMediaQuery } from 'react-responsive'


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
          <Img src={phoneImg} alt="cellPhone" width="600px"/>
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

export const Section2 = ({header,desc,cards}) => {
  const isDesktop = useMediaQuery({ minWidth: 1296 });

  if (!isDesktop) return null;
  return (
    <SectionContainer>
      <FlexBox justify="flex-start">
        <TitleBox>{header}</TitleBox>
      </FlexBox>
      <Marginer dir="vertical" margin="30px"/>
      <FlexBox align="flex-start">
        <Wrapper>
          <TextBox>{desc}</TextBox>
          <Bar />
        </Wrapper>
        <Wrapper>
        <div style={{background:'blue', width:'660px',height:'289px'}}>..</div>
        </Wrapper>
      </FlexBox>
      <Marginer dir="vertical" margin="110px"/>
      <FlexBox justify="flex-start">
        {
          cards.map((card,idx)=>{
            return (
              <>
              <Wrapper key={card.idx}>
                <TitleBox size="small">{card.title}</TitleBox>
                <Marginer dir="vertical" margin="15px"/>
                <TextBox size="1.4rem">{card.text}</TextBox>
              </Wrapper>
              <Marginer dir="horizontal" margin={card.idx!=2?"230px":"100px"}/>
              </>
            )
          })
        }
      </FlexBox>
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
export const Section3 = ({header,companyName,companyInfo,inquiryTitle1,inquiryTitle2,inquiryText}) => {
  const isDesktop = useMediaQuery({ minWidth: 500 });

  if (!isDesktop) return null;

  return (
    <SectionContainer>
      <Marginer dir="vertical" margin="60px"/>
      <TitleBox center>{header}</TitleBox>
      <Marginer dir="vertical" margin="60px"/>
      <Wrapper>
        <div style={{position:'relative',width:'100vw',height:'300px',backgroundImage:`url(${building})`,backgroundRepeat:'no-repeat',backgroundSize:'100%',backgroundPosition:'center -200px'}}>
          {/* <img src={building} alt="dd" style={{width:'100%'}}/> */}
        </div>
      </Wrapper>
      <Marginer dir="vertical" margin="60px"/>
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
