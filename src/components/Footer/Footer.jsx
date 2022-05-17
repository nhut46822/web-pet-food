import React from "react";
import PropTypes from "prop-types";
import petsFood1 from "../../assets/images/pets-food16.jpg";
import petsFood2 from "../../assets/images/pets-food17.jpg";
import Button from "../Button/Button";

const services = [
	{
		title: "Fast Service",
		path: "",
	},
	{
		title: "Healthy Food",
		path: "",
	},
	{
		title: "Online Stores",
		path: "",
	},
	{
		title: "Help & Contact Us",
		path: "",
	},
	{
		title: "Returns & Refunds",
		path: "",
	},
];

const Footer = (props) => {
	return (
		<footer className="footer">
			<div className="footer-wrapper mt-left-right">
				<div className="footer-wrapper__item ">
					<h2>About us</h2>
					<p>
						Ut enim ad minim veniam, quis nostrud exercitation
						ullamco laboris nisi ut aliquip ex ea commodo consequat
					</p>
					<p className="footer-wrapper__item__time">
						Mon - Fri ...... 8:30 am - 10:00 pm
					</p>
					<p>Sat - Sun ....... 10:00 am - 9:00 pm</p>
				</div>
				<div className="footer-wrapper__item ">
					<h2>Services</h2>
					<div className="footer-wrapper__item__content">
						{services.map((item, index) => (
							<p
								key={index}
								className="footer-wrapper__item__content__item"
							>
								<i className="footer-wrapper__item__content__icon fas fa-chevron-right"></i>
								<span className="footer-wrapper__item__content__text">
									{item.title}
								</span>
							</p>
						))}
					</div>
				</div>
				<div className="footer-wrapper__item ">
					<h2>Blog Posts</h2>
					<div className="footer-wrapper__item__info">
						<div className="footer-wrapper__item__info__img">
							<img src={petsFood1} alt="" />
						</div>
						<div className="footer-wrapper__item__info__content">
							<p>Nam libero tempore, cum</p>
							<span>Nov 16,2021</span>
						</div>
					</div>
					<div className="footer-wrapper__item__info">
						<div className="footer-wrapper__item__info__img">
							<img src={petsFood2} alt="" />
						</div>
						<div className="footer-wrapper__item__info__content">
							<p>At vero eos et accusamus</p>
							<span>Nov 16,2021</span>
						</div>
					</div>
				</div>
				<div className="footer-wrapper__item">
					<h2>Get Updates</h2>
					<p className="footer-wrapper__item__update__text">
						Subscribe Us For Update
					</p>
					<input type="text" placeholder="Your Email" />
					<Button size="large">Subscribe</Button>
				</div>
			</div>
		</footer>
	);
};

Footer.propTypes = {};

export default Footer;
