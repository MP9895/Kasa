import './error.scss'
import Header from "../../components/header/Header";
import { Link } from 'react-router-dom';
import React from 'react';

function Error() {
	return (
		<div className='notFound'>
			<Header />
			<div className="notFound_infos">
				<h1 className='notFound_infos_title'>404</h1>
				<p className='notFound_infos_content'>La page que vous recherchez n&apos;existe pas.</p>
			</div>
			<Link className='notFound_infos_return' to='/'>Retourner sur la page d&apos;accueil</Link>
		</div>
	)
}

export default Error;