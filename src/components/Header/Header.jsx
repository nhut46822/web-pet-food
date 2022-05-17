import React, { useState } from "react";
import PropTypes from "prop-types";
import logo from "../../assets/images/logo-pets-food.png";
import { Link } from "react-router-dom";
import useStore from "../../CustomHooks";

const listInfo = [
	{
		title: "CALL US TODAY:",
		info: "1800-456-852",
	},
	{
		title: "OUR ADDRESS:",
		info: "7050 Yukon Tucson",
	},
	{
		title: "OPENING HOURS:",
		info: "Mon - Sat 8am - 6pm",
	},
];

const listNavbar = [
	{
		title: "Home",
		path: "/",
	},
	{
		title: "About",
		path: "/about",
	},
	{
		title: "Shop",
		path: "/shop",
	},
	{
		title: "News",
		path: "/news",
	},
	{
		title: "Contact",
		path: "/contact",
	},
	{
		// title: "Cart",
		path: "/cart",
	},
];

const Header = (props) => {
	const [activeIndex, setActiveIndex] = useState(0);
	const [activeNavbar, setActiveNavbar] = useState(false);

	const { totalProduct } = useStore();

	const handleActiveTitle = (index) => {
		setActiveIndex(index);
	};

	const handleActiveNavbar = () => {
		setActiveNavbar(!activeNavbar);
	};

	const amountProduct = totalProduct.reduce((acc, item) => {
		return acc + item.quantity;
	}, 0);

	return (
		<header className="header-wrapper">
			<div className="header mt-left-right">
				<div className="header-top">
					<div className="header-top__logo">
						<img src={logo} alt="" />
					</div>
					<div className="header-top__contact">
						<div className="header-top__contact__info">
							{listInfo.map((item, index) => (
								<div
									key={index}
									className="header-top__info-wrapper"
								>
									<div className="header-top__contact__info__title">
										{item.title}
									</div>
									<div className="header-top__contact__info__desc">
										{item.info}
									</div>
								</div>
							))}
						</div>
					</div>
				</div>
				<div className="header-separate"></div>
				<div className="header-navbar">
					<div
						className="header-navbar__icon"
						onClick={handleActiveNavbar}
					>
						<i
							className={`fas fa-${
								activeNavbar ? "times" : "bars"
							} `}
						></i>
					</div>
					<div
						className={`header-navbar__pages ${
							activeNavbar ? "active" : ""
						}`}
					>
						{listNavbar.map((item, index) => (
							<div
								key={index}
								className={`header-navbar__pages__title ${
									activeIndex === index ? "active" : ""
								}`}
								onClick={() => handleActiveTitle(index)}
							>
								<Link to={item.path}>
									{item.title || (
										<div className="title__wrapper__icon">
											<i className="fas fa-shopping-cart"></i>
											<div className="title__wrapper__icon__quantity">
												{amountProduct}
											</div>
										</div>
									)}
								</Link>
							</div>
						))}
					</div>
					<div className="header-navbar__social">
						<div className="header-navbar__social__item">
							<i className=" fab fab fa-facebook-f"></i>
						</div>
						<div className="header-navbar__social__item">
							<i className=" fab fa-twitter"></i>
						</div>
						<div className="header-navbar__social__item">
							<i className=" fab fa-google"></i>
						</div>
						<div className="header-navbar__social__item">
							<i className=" fab fa-instagram"></i>
						</div>
					</div>
				</div>
			</div>
		</header>
	);
};

Header.propTypes = {};

export default Header;
