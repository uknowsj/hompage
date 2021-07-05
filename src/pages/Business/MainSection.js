import { SectionContainer } from 'components/Container'
import { Grid, ImgBox, TitleBox, TextBox, Marginer } from 'elements'
import React from 'react'
import styled, {css} from 'styled-components'
import people from 'assets/images/people.png'

export const Section1 = () => {
  return (
    <SectionContainer>
      <Grid isFlex width="100vw">
        <Grid>
          <ImgBox src={people} alt="사람들 모습" height="100%" />
        </Grid>
        <Grid>
          <Grid padding="0 0 30% 20%">
            <TitleBox>에고고</TitleBox>
            <Marginer dir="vertical" margin="30px"/>
            <TextBox lineHeight="2">{`아이들의 별이 아름다운 봅니다. 가난한 나는 헤일 하나에 계십니다. 
  이네들은 하나 오면 마리아 청춘이 거외다. 내 못 별 봄이 가득 너무나 까닭입니다.`}</TextBox>
          </Grid>
          <Grid padding="0 0 0 20px">
            <TextBox>{`사진설명\n2020.02.16`}</TextBox>
          </Grid>
        </Grid>
      </Grid>
    </SectionContainer>
  )
}


