import './details.scss'
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";
import datas from '../../data/data'
import Header from "../../components/header/Header";
import Slider from "../../components/carousel/Carousel"
import Footer from "../../components/footer/Footer";
import Collapse from '../../components/collapse/Collapse';
import greyStar from '../../assets/grey_star.png';
import redStar from '../../assets/red_star.png';
import React from 'react';


function Detail() {
	
	const [imageSlider, setImageSlider] = useState([]);

	const idDetail = useParams('id').id;
	const dataCurrentDetail = datas.filter(data => data.id === idDetail);
	
	useEffect(() => {
		const dataCurrentDetail = datas.filter(data => data.id === idDetail);
		setImageSlider(dataCurrentDetail[0].pictures);
	}, [idDetail]);

	const name = dataCurrentDetail[0].host.name.split(' '); 
	const rating = dataCurrentDetail[0].rating;
	const description  = dataCurrentDetail[0].description;
	const equipments = dataCurrentDetail[0].equipments;

	return (
		<>
			<Header/>
			<Slider imageSlider={imageSlider}/>
			<main className="Detail">
				<div className="Detail_content">
					<div className="Detail_content_infos">
						<h1>{dataCurrentDetail[0].title}</h1>
						<p>{dataCurrentDetail[0].location}</p>
						<div>
							{dataCurrentDetail[0].tags.map((tag, index) => {
								return (
									<button key={index}>{tag}</button>
								)
							})}
						</div>
					</div>
					<div className="Detail_content_host">
						<div>
							<div className='Detail_content_host_name'>
								<span>{name[0]}</span>
								<span>{name[1]}</span>
							</div>
							<img src={dataCurrentDetail[0].host.picture} alt="host of this Detail" />
						</div>
							
						<div className="Detail_content_host_stars">
							{[...Array(5)].map((star, index) => {
								const ratingValue = index + 1;
								return (
									<img key={index} src={ratingValue <= rating ? redStar : greyStar} alt="star" />
								)
							})}
						</div>
					</div>
				</div>
				<div className="Detail_collapse">
					<div className="Detail_collapse_item">
						<Collapse title={'Description'} content={description} />	
					</div>
					<div className="Detail_collapse_item">
						<Collapse title={'Équipements'} content={equipments}/>
					</div>	
				</div>
			</main>
			<Footer/>
		</>
	)
}

export default Detail;