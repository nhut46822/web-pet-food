import React from "react";
import PropTypes from "prop-types";

const AboutHeader = (props) => {
	return (
		<div>
			<div className="shop-header">
				<img
					className="shop-header__image"
					src="https://www.coxwellvet.com/wp-content/uploads/sites/29/2018/10/dog-food.jpg"
					alt=""
				/>
				<div className="shop-header__modal">
					<div className="shop-header__modal__content">
						<h2>SHOP</h2>
						<button>Home / About</button>
					</div>
				</div>
			</div>
			<div className="about-main__me">
				<div className="home-pet__title">
					<img
						src="https://kamleshyadav.com/templatemonster/pets-food/wp-content/uploads/2019/06/pets-food4.png"
						alt=""
					/>
					<h2>Who We Are</h2>
					<p className="about-main__me__text">Best Food Store</p>
				</div>

				<div className="about-main__me__content">
					<div className="about-main__me__content__image">
						<img
							src="https://kamleshyadav.com/templatemonster/pets-food/wp-content/uploads/2019/07/pets-food20.jpg"
							alt=""
						/>
					</div>
					<div className="about-main__me__content__description">
						<h6>
							At vero eos et accusamus et iusto odio dignissimos
							ducimus qui blanditiis praesentium voluptatum
							deleniti atque
						</h6>
						<p className="about-main__me__content__description__info">
							Nam libero tempore, cum soluta nobis est eligendi
							optio cumque nihil impedit quo minus id quod maxime
							placeat facere possimus, omnis voluptas assumenda
							est, omnis dolor repellendus. Temporibus autem
							quibusdam et aut officiis debitis aut rerum
							necessitatibus saepe eveniet ut et voluptates
							repudiandae sint et molestiae
						</p>
						<div className="about-main__me__content__description__wrapper">
							<div className="home-pet__content__description__benefit">
								<img
									src="https://kamleshyadav.com/templatemonster/pets-food/wp-content/uploads/2019/06/pets-food4.png"
									alt=""
								/>
								<p className="about-main__me__content__description__benefit">
									Itaque earum rerum hic tenetur
								</p>
							</div>
							<div className="home-pet__content__description__benefit">
								<img
									src="https://kamleshyadav.com/templatemonster/pets-food/wp-content/uploads/2019/06/pets-food4.png"
									alt=""
								/>
								<p className="about-main__me__content__description__benefit">
									At vero eos et accusamus et iusto
								</p>
							</div>
							<div className="home-pet__content__description__benefit">
								<img
									src="https://kamleshyadav.com/templatemonster/pets-food/wp-content/uploads/2019/06/pets-food4.png"
									alt=""
								/>
								<p className="about-main__me__content__description__benefit">
									Nemo enim ipsam voluptatem quia
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

AboutHeader.propTypes = {};

export default AboutHeader;
