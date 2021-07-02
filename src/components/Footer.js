import React, { useContext } from 'react'
import styled, { css } from 'styled-components'
import { Context } from 'context'
import { FooterKr, FooterEng } from 'data'
import { Grid, TextBox, TitleBox, Marginer } from 'elements'
import { useMediaQuery } from 'react-responsive'

const Footer = () => {
  const {state:{language}} = useContext(Context)
  const isMobile = useMediaQuery({ maxWidth: 500 })
  let data = language.selected==='KOR'?FooterKr:FooterEng
  const fontSize1 = isMobile?'1.3rem':'1.4rem'
  const fontSize2 = isMobile?'1.2rem':'1.4rem'

  return (
    <Grid width="1296px" padding="20px">
      <Marginer dir="vertical" margin="60px"></Marginer>
      <Grid width="100%" isFlex align="flex-end"> 
        <Wrapper>
          <Logo>Viewcommz</Logo>
          <Marginer dir="vertical" margin="20px"/>
            {
              isMobile?
              <TextBox size={fontSize1} lineHeight="2">
              {
                data.info.map((info, idx) => (
                  <TextWrapper2 idx={idx}>
                    <span>{info.title}&emsp;</span>
                    {info.desc}
                    {idx!=2&&`\n`}
                  </TextWrapper2>
                ))
              }
            </TextBox>
              :
                <TextBox size={fontSize1} lineHeight="2">
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
            }
          <Marginer dir="vertical" margin="20px"/>
          <TextBox size={fontSize1} font="spoka">{data.copyright}</TextBox>
        </Wrapper>
        <Wrapper>
          <LinkBox size={fontSize2}>
            {
              data.externalLink.map(({address, name}) => <a href={address}>{name}</a>)
            }
          </LinkBox>
        </Wrapper>
      </Grid>
      <Marginer dir="vertical" margin="60px"></Marginer>
    </Grid>
  )
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  & + & {
    margin-top: 20px;
  }
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
const TextWrapper2 = styled.span`
  span {
    font-weight: 600;
  }
  ::after {
    content: '';
    display: inline-block;
    width: 1px;
    height: 10px;
    margin: 0 10px;
    background: #adb5bd;
  }

  ${({idx}) => css`
    span {
      display: ${idx===0&&'none'};
    } 
    ::after {
      display: ${idx!=2&&'none'};
    }
  `}
`
const LinkBox = styled.div`
  display: flex;
  justify-content: space-between;
  font-family: 'Spoqa Han Sans', 'Sans-serif';
  font-size: ${({size}) => size};
  a + a {
    margin-left: 20px;
  }
`
export default Footer
