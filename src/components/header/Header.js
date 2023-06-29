import './header.scss'
import Logo from '../../assets/logo.png'
import Navbar from '../navbar/Navbar'
import React from 'react';

function Header() {
	return (
		<header className='header'>
			<h1>
				<img src={Logo} alt="kasa, location d'appartements" />
			</h1>
			<Navbar />
		</header>
	)
}

export default Header;