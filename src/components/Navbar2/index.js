import React from 'react';
import { Nav, NavLogo, MobileIcon, NavMenu, List, NavUtil, ChangeLanguage } from './NavbarElements';
import { FaBars } from 'react-icons/fa';

const LanguageList = () => {
	return (
		<>
			<li>KOR</li>
			<li>|</li>
			<li>ENG</li>
		</>
	)
}

const Navbar = () => {
	return (
		<>
				<Nav>
					<NavLogo to="/">VIEWCOMMZ</NavLogo>
					<NavMenu>
						<List to="/">COMPANY</List>
						<List to="/business">BUSINESS</List>
						<List to="/contents">CONTENTS</List>
					</NavMenu>
					<NavUtil>
						<ChangeLanguage>
							<LanguageList />
						</ChangeLanguage>
						<MobileIcon>
							<FaBars />
						</MobileIcon>
					</NavUtil>
				</Nav>
		</>
	)
}

export default Navbar;
