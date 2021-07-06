import React from 'react'
import styled, { css } from 'styled-components';
import { Grid, CircleButton, TitleBox, TextBox } from 'elements'
import { BsPlusCircle } from 'react-icons/bs'

export const Card = (props) => {
  const { title, desc, src } = props;
  return (
    <CardWrapper width="100%">
      <Bg src={src} />
      <Grid padding="50px" margin="unset">
        <TitleBox size="med">{`전자책 콘텐츠\n기획 & 제작`}</TitleBox>
        <BsPlusCircle size="30px" />
      </Grid>
      {/* hover 시 */}
      <Grid>
        <TitleBox size="med">{`전자책 콘텐츠\n기획 & 제작`}</TitleBox>
        <TextBox>{`아이들의 별이 아름다운 봅니다. 가난한 나는 헤일 하나에 계십니다. 이네들은 하나 오면 마리아 청춘이 거외다. 내 못 별 봄이 가득 너무나 까닭입니다.`}</TextBox>
      </Grid>
    </CardWrapper>
  )
}

Card.defaultProps = {

}
const Bg = styled.div`
  width: 100%;
  height: 100%;
  background-image: url(${(props)=>props.src});
  background-repeat: no-repeat;
  background-size: cover;
  
  position: absolute;
  z-index: -20;
`

const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  min-height: 400px;
  border-radius: 16px;
  /* border: 1px solid black; */
  & + & {
    margin-left: 30px;
  }

  position: relative;
  overflow: hidden;

  &> div:nth-child(2) {
    opacity: 1;
  }
  &> div:nth-child(3) {
    display: none;
    opacity: 0;
  }
  &:hover {
    &> div:nth-child(1) { //배경
      filter: blur(5px);
      transition: .1s ease-out;
    }

    &> div:nth-child(2) {
      display: none;
      opacity: 0;
      transition: .1s ease-out;
    }
    &> div:nth-child(3) {
      display: block;
      opacity: 1;
      transition: .1s ease-out;
    }

  }
`

// export const SwitchCard = (props) => {
//   const { src, desc } = props;

//  return (

//  )
// }
