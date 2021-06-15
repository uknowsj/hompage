import styled from 'styled-components'
import { Link as LinkR } from 'react-router-dom'
import { Link as LinkS } from 'react-scroll'

export const Nav = styled.nav`
	border: 1px solid red;
	padding: 0 80px;
	height: 80px;
	display: flex;
	align-items: center;
	font-size: 1rem;
	position: sticky;
	top: 0;
	z-index: 10;
	justify-content: space-between;

	@media screen and (max-width: 960px) {
		transition: 0.8s all ease;
		padding:0 24px;
	}
`

// export const NavbarContainer = styled.div`
// 	disp
// `

export const NavLogo = styled(LinkR)`
	color: black;
	cursor: pointer;
	font-family: 'Oswald', sans-serif;
	text-decoration: none;
`

export const NavMenu = styled.div`
	display: flex;
	border: 1px solid black;

	@media screen and (max-width:768px) {
		display: none;
	}
`



export const NavUtil = styled.div`


// 구분자랑 active 표시 없는 걸 지워야함 
	@media screen and (max-width:768px) {
		div:first-child{
			li:nth-child(2) { display: none;}
		}
	}
`

export const ChangeLanguage = styled.div`
    display: flex;
    flex-wrap: wrap;
    list-style: none;
    min-width: 100px;
    justify-content: space-between;
`
export const List = styled(LinkR)`
	color:red;
`
export const MobileIcon = styled.div`
	display: none;

	@media screen and (max-width:768px) {
		display: block;
		transform: translateY(2px);
	}
`