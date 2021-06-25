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

  width: 980px;

` 
export const SectionContainer = ({children}) => {
  return (
    <SectionStyle>{children}</SectionStyle>
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