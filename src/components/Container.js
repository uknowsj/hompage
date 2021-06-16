import React from 'react';
import styled, { css } from 'styled-components';
import { ComponentStyle, Title, MiddleTitle, Text, Bar, StyledContainer, Content } from 'style/CommonStyle'



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