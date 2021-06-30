import React from 'react';
import styled, { css } from 'styled-components';
import { ComponentStyle, Title, MiddleTitle, Text, Bar, StyledContainer, Content } from 'style/CommonStyle'


const PageStyle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`
export const PageContainer = ({children}) => {
  return (
    <PageStyle>{children}</PageStyle>
  )
}

const SectionStyle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  width: 1296px;
  border: 1px solid blue;
  padding: 0 20px;

  /* ${({mobile}) => mobile&&css`
    min-height: auto;
    width: auto;
    border: 2px solid green;
  `} */

  @media screen and (max-width:1296px) {
    width: 100vw;
  }

  @media screen and (max-width:768px) {
    width: 100vw;
    /* min-height: auto; */
    border: 1px solid aqua;
  }

` 
export const SectionContainer = ({children, mobile}) => {
  return (
    <SectionStyle mobile={mobile}>{children}</SectionStyle>
  )  
}

const Container = ({ children, center }) => {
  return (
    <StyledContainer>
      <Content center={center}>
        {children}
      </Content>
    </StyledContainer>
  )
}

export default Container