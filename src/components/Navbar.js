import React, { useState, useEffect, useContext } from 'react'
import { Context } from 'context'
import styled, { css } from 'styled-components'
import { FaBars, FaTimes } from 'react-icons/fa'
import { Link as LinkR } from 'react-router-dom'
import {DefaultLayout} from 'style/CommonStyle'

const NavContainer = styled.div`
  width:100vw;
  height: 60px;
  position: fixed;
  top: 0;

  display: flex;
  justify-content: center;
  
  background-color: transparent;
  font-size: 1.4rem;
  font-family: 'Spoqa Han Sans', sans-serif;
  color: white;
  /* transition: .2s ease-out; */

  ${props => props.active &&
      css`
        background-color: white;
        color: black;
      `
  }

  z-index: 100;
`
const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  width:1296px;

  @media screen and (max-width:1296px) {
    padding: 0 20px;
  }
`

const Logo = styled(LinkR)`
  color: inherit;
	cursor: pointer;
	font-family: 'Oswald', sans-serif;
  font-weight: 600;
	text-decoration: none;
`

const MenuItem = styled.div`
  display: 'inline-block';
  position: relative;

  &::after {
    content: '';
    position: absolute;
    bottom: -4px;
    width: 0;
    height: 1px;
    background-color: white;
    left: 50%;
    transform: translateX(-50%);  
  }
  
  &:hover::after {
    width: 100%;
    transition: .2s linear;
  }

  & + & {
    margin-left: 20px;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  @media screen and (max-width:768px) {
    &:hover::after {
      width: 0;
    }
  }
`
const Menu = styled.div`
  display: flex;
  justify-content: space-between;

  @media screen and (max-width:768px) {
    flex-direction: column;
    
    position: absolute;
    top: 0;
    left: ${props => props.click?0:'-100%'};

    width: 100%;
    height: 100vh;
    
    padding: 30vh 0vh;

    ${MenuItem} + ${MenuItem} {
      margin-left: unset;
    }
    color: white;
    background-color: black;
    text-align: center;

  }
`
const Util = styled.div`
  display: flex;
  z-index: 10;

`
const LanguageWrap = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  min-width: 75px;
  
  list-style: none;
  cursor: pointer;

  color: inherit;
  span:not(.selected) {
    opacity: 0.6;
  }
  
  @media screen and (max-width:768px) {
    ${props => props.click&&css`
      color: white;
      span:not(.selected) {
        opacity: 0.6;
      }
    `}
  }
`

const MobileIcon = styled.div`
  display: none;
  @media screen and (max-width:768px) {
		display: block;
    margin-left: 10px;
		transform: translateY(2px);

    cursor: pointer;
    ${props => props.click&&css`
      color:white;
    `}
	}
`

const Language = ({ clickLang, selected }) => {

  return (
    <>
      <span id='KOR' className={selected==='KOR'?'selected':''} onClick={clickLang}>KOR</span>
      <span id='ENG' className={selected==='ENG'?'selected':''} onClick={clickLang}>ENG</span>
    </>
  ) 

}

const Navbar = () => {
  const [click, setClick] = useState(false);
  const [position, setPosition] = useState(0); //scroll  

  // 언어 선택
  const {state:{language}, dispatch} = useContext(Context);

  // 모바일 화면에서 햄버거 아이콘 선택
  const handleClick = () => setClick(!click);

  // 스크롤 다운 시 네비 CSS 변경
  const onScroll = () => {
    setPosition(window.scrollY);
  }
  useEffect(()=>{
    window.addEventListener("scroll", onScroll);
    return () => {
      window.removeEventListener("scroll",onScroll);
    };
  },[]);


  return (
    <>
    <NavContainer active={position>=100?true:false}>
      <Wrapper>
        <Logo to="/">
          VIEWCOMMZ
        </Logo>
        <Menu click={click}>
          <MenuItem>
            <LinkR to="/">COMPANY</LinkR>
          </MenuItem>
          <MenuItem>
            <LinkR to="/business">BUSINESS</LinkR>
          </MenuItem>
          <MenuItem>
            <a href="https://www.naver.com/">CONTENTS</a>
          </MenuItem>
        </Menu>
        <Util>
          <LanguageWrap click={click}>
            <Language 
              clickLang={
                (e) => {
                  dispatch({
                    type:'CHANGE_LANGS',
                    selected:e.target.id
                  })
                }
              } 
              selected={language.selected}
            />
          </LanguageWrap>
          <MobileIcon onClick={handleClick} click={click}>
            {click ? <FaTimes /> : <FaBars />}
          </MobileIcon>
        </Util>      

      </Wrapper>
    </NavContainer>
    </>
  )
}

export default Navbar
