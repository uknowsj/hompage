import React, { useRef } from 'react'
import { Link } from 'react-router-dom'
import styled,{ css } from 'styled-components'
import Container from 'components/Container';
import building from 'assets/images/building.jpg';
import { Title, MiddleTitle, Text, Bar, TextStyle } from 'style/CommonStyle'
import Button,{StyledButton} from 'components/Button';
import { Img } from 'components/Util'
import shortcut from 'assets/images/shortcut.svg'
import phoneImg from 'assets/images/phone.png';

import useScrollSnap from 'react-use-scroll-snap';
const Content = styled.div`
  display: flex;
  justify-content: ${({rowCenter}) => rowCenter?'center':'space-between'};
  align-items: ${props=>props.center&&'center'};
  width: ${props => props.width};
  margin-top: ${props=>props.margin};
  border:1px solid red;
`
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid blue;
`
const InquireContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: white;
  width: 654px;
  height: 540px;
  padding:40px 60px;
  box-shadow: 6px 6px 12px rgba(0,0,0,0.3);
  border-radius: 16px;
`
const InquireItem = styled.div`
  display: flex;
  padding-top: 5%;
  width: 100%;
  justify-content: ${({justify}) => justify||'space-between'};
  align-items: center;
  border: 1px solid white;
`
const StyledInput = styled.input`
  margin-left: 10px;
  width:100%;
  ${props => {
    return css`
      width: ${props.width};
      height: ${props.height};
    `
  }};
  border: 1px solid #adb5bd80; 
  &:focus {
    outline:none;
  }
`
const LineInput = styled(StyledInput)`
  border-top-style: hidden;
  background: transparent;
  outline: none;
  border-left-style: hidden;
  border-right-style: hidden;
  border-bottom-style: solid;
  border-bottom-width: 1px;
`


const ItemWrapper = styled.div`
  display: flex;
  width: 100%;
  div:nth-child(1) { 
    font-size: 14px;
    min-width: 50px;
  }
`

const CustomButton = styled(StyledButton)`  
  margin: unset;
  border: 1px solid #adb5bd80; 
`


const InquireBox = () => {
  return(
    <InquireContainer>
      <InquireItem>
        <ItemWrapper>
          <div>이름</div><LineInput />
        </ItemWrapper>
          <div style={{width:'80px'}}></div>
        <ItemWrapper>
          <div>이메일</div><LineInput /> 
        </ItemWrapper>
      </InquireItem>
      <InquireItem>
        <ItemWrapper>
          <div>제목</div><LineInput />
        </ItemWrapper>
      </InquireItem>
      <InquireItem>
        <ItemWrapper>
          <div>메세지</div><StyledInput width={'100%'} height={'250px'}/>
        </ItemWrapper>
      </InquireItem>
      <InquireItem justify={'flex-end'}>
        <CustomButton>
          문의하기
        </CustomButton>
      </InquireItem>
    </InquireContainer>
  )
} 
export const SectionCulture = ({title, discription, infoText}) => {
  return (
    <Container center>
      <Title center>{title}</Title>
      <Content margin="72px" center width="1100px">
        <Wrapper>
        <MiddleTitle>{discription}</MiddleTitle>
          <Text>
            {infoText}
          </Text>
          <Button icon={shortcut}>
            <img src={shortcut} alt="바로가기아이콘" style={{ width:'1rem', marginRight:'5px' }}/>
            <Link to="/button">바로가기</Link>
          </Button>
        </Wrapper>
        <Img src={phoneImg} alt="cellPhone" width="600px"/>
      </Content>
    </Container>
  )
}

export const SectionValue = ({title, middleTitle, Texts}) => {
  const [text1,text2,text3,text4] = Texts;
  const [mdTitle1,mdTitle2,mdTitle3] =middleTitle;
  return (
    <Container>
      <Title>{title}</Title>
      <Content margin="32px">
        <Wrapper>
          <Text margin="0px">
            {text1}
          </Text>
          <Bar/>
        </Wrapper>
        <div style={{background:'blue', width:'660px',height:'300px'}}>..</div>
      </Content>
      <Content style={{marginTop:'60px'}}>
        <Wrapper>
          <MiddleTitle size="26px">{mdTitle1}</MiddleTitle>
          <Text margin="10px">{text2}</Text>
        </Wrapper>
        <Wrapper>
          <MiddleTitle size="26px">{mdTitle2}</MiddleTitle>
          <Text margin="10px">{text3}</Text>
        </Wrapper>
        <Wrapper>
          <MiddleTitle size="26px">{mdTitle3}</MiddleTitle>
          <Text margin="10px">{text4}</Text>
        </Wrapper>
      </Content>
    </Container>
  )
}


export const SectionCompany = ({ title, text, mdTitle}) => {
  const [text1, text2] = text;
  return (
    <Container>
      <Title center>{title}</Title>
      <Content>
        <div style={{position:'absolute',width:'100%',
        height: '400px',
        left:0,
        background:'yellow'}}>
          <Img src={building} alt={'뷰컴즈 건물사진'}/>
        </div>
        <div style={{width:'100%',height:'400px',border:'3px solid blue'}}> 
          ..
        </div>
      </Content>
      <Content>
        <Wrapper>
          뷰컴즈
          <Bar />
          <TextStyle>{text1}</TextStyle>
        </Wrapper>
        <Wrapper>
          <div style={{width:'765px',height:'200px', background:'yellow'}}> 
            ...
          </div>
        </Wrapper>
      </Content>
      <MiddleTitle>{mdTitle}</MiddleTitle>
      <Content>
        <Wrapper>
          <MiddleTitle size="24px">NOTICE</MiddleTitle>
          <TextStyle>{text2}</TextStyle>
        </Wrapper>
        <Wrapper>
          <InquireBox />
        </Wrapper>
      </Content>
    </Container>
  )

}

const TestTag = styled.div`
scroll-snap-type: y mandatory;

`
const Home = () => {

  // const scrollRef = useRef(null);
  // useScrollSnap({ ref: scrollRef, duration: 10, delay: 0 });
// ref={scrollRef}

}
export default Home
