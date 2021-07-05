import React from 'react';
import styled, { css } from 'styled-components';

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
  /* border: 1px solid blue; */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  width: 1296px;
  padding: 0 20px;


   @media screen and (max-width:1296px) {
    width: 100vw;
  }

` 
const LongSectionStyle = styled(SectionStyle)`
  width: 100vw;
  padding: unset;
`

export const SectionContainer = ({ children, mobile, isLong }) => {
  return (
    isLong?
    <LongSectionStyle mobile={mobile}>{children}</LongSectionStyle>
    :<SectionStyle mobile={mobile}>{children}</SectionStyle>
  )  
}
