import React, { useContext } from 'react'
import { Context } from 'context'
import { SectionContainer } from './Container'
import styled, { css } from 'styled-components'
import { Marginer, TextBox, TitleBox } from 'components/Util'
import { FooterKr, FooterEng } from 'data'

const FooterContainer = styled.div`
  display: flex;
  align-items: flex-end;
  /* justify-content: space-between; */
  width:100%;
  border: 1px solid red;

  &> :nth-child(2) {
    border: 1px solid orange;
    
  }

`

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`

const Logo = styled.div`
  font-family: 'Oswald', 'Sans-serif';
  font-size: 1.6rem;
  font-weight: 600;
`

const TextWrapper = styled.span`
  span {
    font-weight: 600;
  }
  ::after {
    content: '';
    display: inline-block;
    width: 1px;
    height: 10px;
    margin: 0 20px;
    background: #adb5bd;
  }

  ${({idx}) => css`
    span {
      display: ${idx===0&&'none'};
    } 
    ::after {
      display: ${idx%2===0&&'none'};
    }
  `}
`

const LinkBox = styled.div`
  display: flex;
  justify-content: space-between;
  font-family: 'Spoqa Han Sans', 'Sans-serif';
  font-size: 1.4rem;
  border: 1px solid blue;
  a {
    margin-left: 20px;
  }

`

const Footer = () => {
  const {state:{language}} = useContext(Context);
  let data = language.selected==='KOR'?FooterKr:FooterEng;
  return (
    <FooterContainer>
      <Wrapper>
        <Logo>Viewcommz</Logo>
        <TextBox size="1.4rem" lineHeight="2">
        {
          data.info.map((info, idx) => (
            <TextWrapper idx={idx}>
              <span>{info.title}&emsp;</span>
              {info.desc}
              {idx%2==0&&`\n`}
            </TextWrapper>
          ))
        }
        </TextBox>
      </Wrapper>
      <Wrapper>
        <TextBox size="1.4rem">{data.copyright}</TextBox>
      </Wrapper>
      <Wrapper>
        <LinkBox>
          {
            data.externalLink.map(({address, name}) => <a href={address}>{name}</a>)
          }
        </LinkBox>
      </Wrapper>
    </FooterContainer>
  )
}

export default Footer
