import React, { useState } from 'react'
import styled, { css } from 'styled-components';
import { FaBars } from 'react-icons/fa';
import { Link as LinkR } from 'react-router-dom';
import {defaultLayout} from '../style/CommonStyle';


const NavContainer = styled.div`
  ${defaultLayout}
  height: 80px;
  position: fixed;
  top: 0;

  display: flex;
  justify-content: space-between;
  align-items: center;

  font-size: 14px;
  font-family: 'Spoqa Han Sans', sans-serif;
  color: white;
`

const Logo = styled(LinkR)`
	color: white;
	cursor: pointer;
	font-family: 'Oswald', sans-serif;
	text-decoration: none;
`

const Menu = styled.div`
  display: flex;
  a + a {
    margin-left:20px;
  }
  a {
    text-decoration: none;
    color: white;
  }
  justify-content: space-between;
  @media screen and (max-width:768px) {
    display: none;
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
    color: rgba(255,255,255,0.6)
  }
`

const MobileIcon = styled.div`
  display: none;
  @media screen and (max-width:768px) {
		display: block;
    margin-left: 10px;
		transform: translateY(2px);
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

  const [langs, setLang] = useState({
    lang:['KOR','ENG'],
    selected:'KOR'
  });

  const clickLang = (e) => {
    setLang({...langs,selected:e.target.id});
  }
  
  
  return (
    <>
    <NavContainer>
        <Logo to="/">
          VIEWCOMMZ
        </Logo>
        <Menu>
          <LinkR to="/">COMPANY</LinkR>
          <LinkR to="/business">BUSINESS</LinkR>
          <LinkR to="/contents">CONTENTS</LinkR>
        </Menu>
        <Util>
          <LanguageWrap>
            <Language clickLang={clickLang} selected={langs.selected}/>
          </LanguageWrap>
          <MobileIcon>
            <FaBars />
          </MobileIcon>
        </Util>      
    </NavContainer>

        
    </>
  )
}

export default Navbar
