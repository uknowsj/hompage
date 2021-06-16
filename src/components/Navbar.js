import React, { useState, useEffect } from 'react'
import styled, { css } from 'styled-components';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Link as LinkR } from 'react-router-dom';
import {defaultLayout} from '../style/CommonStyle';


const NavContainer = styled.div`
  ${defaultLayout}
  height: 60px;
  position: fixed;
  top: 0;

  display: flex;
  justify-content: space-between;
  align-items: center;

  background-color: transparent;
  font-size: 14px;
  font-family: 'Spoqa Han Sans', sans-serif;
  color: white;
  transition: .3s ease-out;

  ${props => props.active &&
      css`
        background-color: white;
        color: black;
      `
  }
`

const Logo = styled(LinkR)`
  color: inherit;
	cursor: pointer;
	font-family: 'Oswald', sans-serif;
  font-weight: 600;
	text-decoration: none;
`

//
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
    
    background: black;
    text-align: center;

  }
`
const Util = styled.div`
  display: flex;

`
const LanguageWrap = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  min-width: 75px;
  
  list-style: none;
  cursor: pointer;

  span:not(.selected) {
    color: inherit;
    opacity: 0.6;
  }
`

const MobileIcon = styled.div`
  display: none;
  @media screen and (max-width:768px) {
		display: block;
    margin-left: 10px;
		transform: translateY(2px);

    cursor: pointer;
	}
`

const Language = ({clickLang,selected}) => {

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
  const [langs, setLang] = useState({
    lang:['KOR','ENG'],
    selected:'KOR'
  });
  
  const handleClick = () => setClick(!click);
  const clickLang = (e) => {
    setLang({...langs,selected:e.target.id});
  }
  const onScroll = () => {
    setPosition(window.scrollY);
    // console.log("position",position);
  }
  useEffect(() => {
    window.addEventListener("scroll", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <>
    <NavContainer active={position>=100?true:false}>
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
          <LinkR to="/contents">CONTENTS</LinkR>
        </MenuItem>
        <MenuItem>
          <a href="https://www.naver.com/">BOOK</a>
        </MenuItem>
      </Menu>
      <Util>
        <LanguageWrap>
          <Language clickLang={clickLang} selected={langs.selected}/>
        </LanguageWrap>
        <MobileIcon onClick={handleClick}>
          {click ? <FaTimes /> : <FaBars />}
        </MobileIcon>
      </Util>      
    </NavContainer>
    </>
  )
}

export default Navbar
