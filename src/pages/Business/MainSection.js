import { SectionContainer } from 'components/Container'
import { Grid, ImgBox, TitleBox, TextBox, Marginer } from 'elements'
import React from 'react'
import styled, {css} from 'styled-components'
import people from 'assets/images/people.png'


export const Section1 = () => {
  return (
    <Grid isFlex direction="column" margin="90px 0 200px 0">
      <TextBox weight="bold">IP Business & Platform Business</TextBox>
      <TitleBox>비즈니스에 대한 소개</TitleBox>
      <Grid width="40%">
        <TextBox align="center">오리지널 인기 웹툰, 웹소설부터 하루를 유쾌하게 
  만들어 줄 새로운 채팅방 형식의 재미 콘텐츠, 톡 드립까지!
  세상의 모든 이야기를 카카오페이지에서 즐겨보세요.</TextBox>
      </Grid>
    </Grid>
  )
}

export const Section2 = () => {
  return (
    <SectionContainer>
      <Grid isFlex width="100vw" justify="flex-start">
        <ImgBox src={people} alt="사람들 모습" width="1000px" />
        <Grid width="auto">
          <Grid padding="0 0 30% 20%">
            <TitleBox>에고고</TitleBox>
            <Marginer dir="vertical" margin="30px"/>
            <TextBox lineHeight="2">{`아이들의 별이 아름다운 봅니다. 가난한 나는 헤일 하나에 계십니다. 
  이네들은 하나 오면 마리아 청춘이 거외다. 내 못 별 봄이 가득 너무나 까닭입니다.`}</TextBox>
            <TextBox>{`사진설명\n2020.02.16`}</TextBox>
          </Grid>
        </Grid>
      </Grid>
    </SectionContainer>
  )
}


