import './footer.scss'
import logo from '../../assets/logo_footer.png'
import React from 'react';

function Footer() {
	return (
		<footer className='footer'>
			<img src={logo} alt="Kasa - agence de location d'appartements entre particuliers" />
			<p className='footer_copyright'>© 2020 Kasa. All rights reserved</p>
		</footer>
	)
}

export default Footer;
