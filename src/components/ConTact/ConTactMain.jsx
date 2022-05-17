import React from "react";
import PropTypes from "prop-types";

const ConTactMain = (props) => {
	return (
		<div className="contact-main">
			<div className="shop-header">
				<img
					className="shop-header__image"
					src="https://www.coxwellvet.com/wp-content/uploads/sites/29/2018/10/dog-food.jpg"
					alt=""
				/>
				<div className="shop-header__modal">
					<div className="shop-header__modal__content">
						<h2>SHOP</h2>
						<button>Home / Contact</button>
					</div>
				</div>
			</div>

			<div className="contact-main__content">
				<div className="home-pet__title contact-main__content__header">
					<img
						src="https://kamleshyadav.com/templatemonster/pets-food/wp-content/uploads/2019/06/pets-food4.png"
						alt=""
					/>
					<h2>Get In Touch</h2>
					<p className="contact-main__content__header__title">
						Best Food Store
					</p>
				</div>

				<div className="contact-main__content__filled">
					<div className="contact-main__content__filled__input">
						<div className="contact-main__content__filled__input__item">
							<input type="text" placeholder="Your Name" />
						</div>
						<div className="contact-main__content__filled__input__item">
							<input type="text" placeholder="Contact No." />
						</div>
					</div>
					<div className="contact-main__content__filled__input">
						<div className="contact-main__content__filled__input__item">
							<input type="text" placeholder="Your Email..." />
						</div>
						<div className="contact-main__content__filled__input__item">
							<input type="text" placeholder="Subject" />
						</div>
					</div>
					<textarea
						className="contact-main__content__filled__textarea"
						name=""
						id=""
						cols="30"
						rows="10"
						placeholder="Message"
					></textarea>

					<div className="contact-main__content__filled__btn">
						<button className="contact-main__content__filled__btn__main">
							Submit
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

ConTactMain.propTypes = {};

export default ConTactMain;
