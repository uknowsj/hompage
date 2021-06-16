import React from 'react'
import styled from 'styled-components'
import Container from 'components/Container';
import building from 'assets/images/building.jpg';
import { ComponentStyle, Title, MiddleTitle, Text, Bar } from 'style/CommonStyle'
import Button from 'components/Button';
import shortcut from 'assets/images/shortcut.svg'
import phoneImg from 'assets/images/phone.png';
import { Img } from 'components/Util'

import { Link } from 'react-router-dom'

const Content = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: ${props=>props.center&&'center'};
  width: ${props => props.width};
  margin-top: ${props=>props.margin};
`
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid blue;
`

const SectionInfo = ({title, discription, infoText}) => {
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
            <img src={shortcut} style={{ width:'1rem', marginRight:'5px' }}/>
            <Link to="/button">바로가기</Link>
          </Button>
        </Wrapper>
        <Img src={phoneImg} alt="cellPhone" width="600px"/>
      </Content>
    </Container>
  )
}

const SectionCulture = ({title, middleTitle, Texts}) => {
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
          <Text margin="10px">{text2}</Text>
        </Wrapper>
        <Wrapper>
          <MiddleTitle size="26px">{mdTitle3}</MiddleTitle>
          <Text margin="10px">{text2}</Text>
        </Wrapper>
      </Content>
    </Container>
  )
}
const Home = () => {
  return (
    <>
    <SectionInfo 
      title={'문화를 만들어 나갑니다'}
      discription={'텍스트 너머의 가치'}
      infoText={[
        "오리지널 인기 웹툰, 웹소설부터 하루를 유쾌하게", 
        "만들어 줄 새로운 채팅방 형식의 재미 콘텐츠, 톡 드립까지!",
        "세상의 모든 이야기를 카카오페이지에서 즐겨보세요."
      ]}
    />

    <SectionCulture 
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
      />
    </>
  )
}
export default Home
