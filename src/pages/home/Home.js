import './home.scss'
import React from 'react';
import Header from '../../components/header/Header';
import Banner from '../../components/banner/Banner';
import Gallery from '../../components/gallery/Gallery';
import Footer from '../../components/footer/Footer';

function Home() {
	return (
		<div className='home'>
			<Header />
			<Banner />
			<Gallery />
			<Footer />
		</div>
	)
}

export default Home;