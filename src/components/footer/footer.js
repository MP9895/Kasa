import React from 'react';
import PropTypes from 'prop-types';
import logo from '../../assets/logo_footer.png';
import './footer.scss';

function Footer({ fixedFooter }) {
  const footerClassName = fixedFooter ? 'fixed-footer' : '';

  return (
    <footer className={`footer ${footerClassName}`}>
      <img src={logo} alt="Kasa - agence de location d'appartements entre particuliers" />
      <p className='footer_copyright'>© 2020 Kasa. All rights reserved</p>
    </footer>
  );
}

Footer.propTypes = {
  fixedFooter: PropTypes.bool,
};

export default Footer;