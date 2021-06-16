import React from 'react';
import styled, { css } from 'styled-components';
import { ComponentStyle, Title, MiddleTitle, Text, Bar } from '../style/CommonStyle'
import { Img } from './Util'
import phoneImg from '../images/phone.png';
import Button from './Button';
import shortcut from '../images/shortcut.svg'
import { Link } from 'react-router-dom';
import { FaCentercode } from 'react-icons/fa';

const Component = styled.div`
  ${ComponentStyle}
  display: flex;
  justify-content: ${props => props.justify};
  min-height: 600px;
`
Component.defaultProps = {
  justify: 'center',
}
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: ${props => props.align};

  width: 100%;

`
Container.defaultProps = {
  align: 'center',
}

const Content = styled.div`
  display: flex;
  margin-top: 140px;
  border: 1px solid red;


  ${({row, column, width}) => css`
    justify-content: ${row};
    align-items: ${column};
    width: ${width};
  `}

  div {
    border: 1px solid blue;
  }
`
Content.defaultProps = {
  row: 'space-between',
  column: 'center',
  width: '1100px',
}


const MainPage = () => {
  return (
    <div>
        <Component>
          <Container>
            <Title>문화를 만들어 나갑니다</Title>
            <Content>
              <div>
                <MiddleTitle>텍스트 너머의 가치</MiddleTitle>
                <Text>
                  {["오리지널 인기 웹툰, 웹소설부터 하루를 유쾌하게", 
                    "만들어 줄 새로운 채팅방 형식의 재미 콘텐츠, 톡 드립까지!",
                  "세상의 모든 이야기를 카카오페이지에서 즐겨보세요."]}
                </Text>
                <Button icon={shortcut}>
                  <img src={shortcut} style={{ width:'1rem', marginRight:'5px' }}/>
                  <Link to="/button">바로가기</Link>
                </Button>
              </div>
              <Img src={phoneImg} alt="cellPhone" width="600px"/>
            </Content>
          </Container>
        </Component>

        <Component justify='flex-start' style={{flexDirection:'column'}}>
            <Title>우리가 추구하는 가치</Title>
            <div style={{display:'flex',justifyContent:'space-between',border:'1px solid blue',marginTop:'140px'}}>
                <div style={{width:'100%'}}>
                  <Text style={{}}>
                    {['독자의 시선으로 콘텐츠을 제작하고','건전한 창작 문화를 활성화하기 위하여',
                    '시작된 뷰컴즈는 전자책 전문 제작·유통']}
                  </Text>
                  <Bar/>
                </div>
                <div style={{background:'yellow', width:'660px',height:'300px'}}>..</div>
            </div>

            <div style={{display:'flex',justifyContent:'space-between', border:'1px solid blue'}}>
                  <div>
                    <MiddleTitle>텍스트 너머의 가치</MiddleTitle>
                    <Text>
                        {['독자의 시선으로 콘텐츠을 제작하고','건전한 창작 문화를 활성화하기 위하여',
                        '시작된 뷰컴즈는 전자책 전문 제작·유통']}
                    </Text>
                  </div>
                  <div>
                    <MiddleTitle>텍스트 너머의 가치</MiddleTitle>
                    <Text>
                        {['독자의 시선으로 콘텐츠을 제작하고','건전한 창작 문화를 활성화하기 위하여',
                        '시작된 뷰컴즈는 전자책 전문 제작·유통']}
                    </Text>
                  </div>
                  <div>
                    <MiddleTitle>텍스트 너머의 가치</MiddleTitle>
                    <Text>
                        {['독자의 시선으로 콘텐츠을 제작하고','건전한 창작 문화를 활성화하기 위하여',
                        '시작된 뷰컴즈는 전자책 전문 제작·유통']}
                    </Text>
                  </div>
            </div>
            {/* <Container align='flex-start'>
              <Content row='space-between' width='100%'>
              </Content>
            </Container> */}
        </Component>
    </div>
    )
};

export default MainPage
