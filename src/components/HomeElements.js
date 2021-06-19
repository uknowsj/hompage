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
const SectionCulture = ({title, discription, infoText}) => {
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

const SectionValue = ({title, middleTitle, Texts}) => {
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


const SectionCompany = ({ title, text, mdTitle}) => {
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

  const Ele = useRef();

  const onScroll = () => {
    console.log("scroll",Ele.current)
  }


  return (
    <TestTag>
    <SectionCulture 
      title={'문화를 만들어 나갑니다'}
      discription={'텍스트 너머의 가치'}
      infoText={[
        "오리지널 인기 웹툰, 웹소설부터 하루를 유쾌하게", 
        "만들어 줄 새로운 채팅방 형식의 재미 콘텐츠, 톡 드립까지!",
        "세상의 모든 이야기를 카카오페이지에서 즐겨보세요."
      ]}
    />

    <SectionValue 
      title={'우리가 추구하는 가치'}
      middleTitle={['HUMAN','MONEY','TRUST']}
      Texts={[
        ['독자의 시선으로 콘텐츠을 제작하고','건전한 창작 문화를 활성화하기 위하여',
          '시작된 뷰컴즈는 전자책 전문 제작·유통'],
        ['아이들의 별이 아름다운 봅니다.', '가난한 나는 헤일 하나에 계십니다.',
          '이네들은 하나 오면 마리아 청춘이 거외다.','내 못 별 봄이 가득 너무나 까닭입니다.'],
        ['아이들의 별이 아름다운 봅니다.', '가난한 나는 헤일 하나에 계십니다.',
          '이네들은 하나 오면 마리아 청춘이 거외다.','내 못 별 봄이 가득 너무나 까닭입니다.'],
        ['아이들의 별이 아름다운 봅니다.', '가난한 나는 헤일 하나에 계십니다.',
          '이네들은 하나 오면 마리아 청춘이 거외다.','내 못 별 봄이 가득 너무나 까닭입니다.']
      ]}
      ref={Ele}
    />

    <SectionCompany
      title={'작가의 밝은 미래,\n뷰컴즈가 함께 하겠습니다.'}
      text={[
        `서울특별시 서초구 동광로1길 99 4층
        070-7783-0904\ncontact@viewcommz.com`,
        `현대로맨스 / 로맨스판타지 / BL
        출간일정으로 인하여
        ​당분간 투고접수를 마감합니다. (판타지 / 무협 제외)
        너른 양해 부탁드립니다.`    
      ]}
      mdTitle={'문의하기'}
    />
    
    </TestTag>
  )
}
export default Home
