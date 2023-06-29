import './header.scss'
import Logo from '../../assets/logo.png'
import Navbar from '../navbar/Navbar'
import React from 'react';
import { Link } from 'react-router-dom';


function Header() {
	return (
	<header className='header'>
		<h1>
		<Link to="/">
			<img src={Logo} alt="kasa, location d'appartements" />
		</Link>
		</h1>
		<Navbar />
	</header>
	);
  }
  

export default Header;