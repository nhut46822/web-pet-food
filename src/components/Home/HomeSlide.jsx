import React from 'react';
import PropTypes from 'prop-types';
import Button from '../Button/Button';

import bannerImage from '../../assets/images/banner-dog-cat.jpg';

const HomeSlide = (props) => {
	const { activeDot, handleActiveDot } = props;

	return (
		<div className="home-slide">
			<div className="home-slide__image">
				<div className="home-slide__image__item">
					{activeDot ? (
						<img src={bannerImage} alt="" />
					) : (
						<img
							src="https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F24%2F2021%2F02%2F05%2FGettyImages-80285230-2000.jpg"
							alt=""
						/>
					)}
				</div>
			</div>
			<div className="home-slide__dots">
				<p
					className={`home-slide__dots__item ${
						activeDot ? 'active' : ''
					}`}
					onClick={() => handleActiveDot(1)}
				>
					<p className="home-slide__dots__item__scale"></p>
				</p>
				<p
					className={`home-slide__dots__item ${
						!activeDot ? 'active' : ''
					}`}
					onClick={() => handleActiveDot(0)}
				>
					<p className="home-slide__dots__item__scale"></p>
				</p>
			</div>

			<div className="home-slide__content">
				<h2>Welcome To</h2>
				<h1 className="home-slide__content__food-store">Pets Food</h1>
				<p>
					Nam libero tempore, cum soluta nobis est eligendi <br />
					optio cumque nihil impedit quo minus
				</p>
				<Button size="sm">Read More</Button>
			</div>
		</div>
	);
};

HomeSlide.propTypes = {};

export default HomeSlide;
