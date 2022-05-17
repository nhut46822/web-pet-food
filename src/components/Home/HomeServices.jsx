import React from "react";
import PropTypes from "prop-types";

const HomeServices = (props) => {
	return (
		<div className="home-services">
			<img
				className="home-services__image"
				src="https://www.thesprucepets.com/thmb/yvGahRV-mwixoURka1J4rNgbQRg=/1280x854/filters:fill(auto,1)/dog-food-144564301-resized-1-56a26ad43df78cf7727563d1.jpg"
				alt=""
			/>
			<div className="home-services__content">
				<div className="home-pet__title home-services__content__image">
					<img
						className="home-services__content__image__detail"
						src="https://kamleshyadav.com/templatemonster/pets-food/wp-content/uploads/2019/06/pets-food5.png"
						alt=""
					/>
					<h2>We Provide Services</h2>
					<p>Best Food Services</p>
				</div>
				<div className="home-services__content__listItem">
					<div className="home-services__content__listItem__item ">
						<img
							src="https://kamleshyadav.com/templatemonster/pets-food/wp-content/uploads/2019/06/pets-food9.png"
							alt=""
						/>
						<h2>Veg Food</h2>
						<p>
							Ut enim ad minim veniam, quis nostrud exercitation
							ullamco laboris nisi ut aliquip ex ea commodo
							consequat
						</p>
						<div className="line"></div>
					</div>
					<div className="home-services__content__listItem__item home-services__content__listItem__item__second ">
						<img
							src="https://kamleshyadav.com/templatemonster/pets-food/wp-content/uploads/2019/06/pets-food10.png"
							alt=""
						/>
						<h2>Non Veg Food</h2>
						<p>
							Ut enim ad minim veniam, quis nostrud exercitation
							ullamco laboris nisi ut aliquip ex ea commodo
							consequat
						</p>
						<div className="line"></div>
					</div>
					<div className="home-services__content__listItem__item">
						<img
							src="https://kamleshyadav.com/templatemonster/pets-food/wp-content/uploads/2019/06/pets-food11.png"
							alt=""
						/>
						<h2>Healthy Food</h2>
						<p>
							Ut enim ad minim veniam, quis nostrud exercitation
							ullamco laboris nisi ut aliquip ex ea commodo
							consequat
						</p>
						<div className="line"></div>
					</div>
				</div>
			</div>
		</div>
	);
};

HomeServices.propTypes = {};

export default HomeServices;
