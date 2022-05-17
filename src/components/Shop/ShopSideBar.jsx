import React from "react";
import PropTypes from "prop-types";
import products, { getQuantityProducts } from "../../assets/fake-data/product";

const ShopSideBar = (props) => {
	return (
		<>
			<div className="shop-content__side-bars__product">
				<h2>PRODUCTS</h2>
				{products.slice(0, 5).map((item, index) => (
					<div
						key={index}
						className="shop-content__side-bars__product__item"
					>
						<div className="shop-content__side-bars__product__item__image">
							<img src={item.image} alt="" />
						</div>
						<div className="shop-content__side-bars__product__item__content">
							<div className="shop-content__side-bars__product__item__content__title">
								{item.title}
							</div>
							<div className="shop-content__side-bars__product__item__content__price">
								{item.priceOld && <del>{item.priceOld}.00</del>}
								{item.price}.00
							</div>
						</div>
					</div>
				))}
			</div>

			<div className="shop-content__side-bars__product">
				<h2>TOP RATED PRODUCTS</h2>
				{products.slice(1, 6).map((item, index) => (
					<div
						key={index}
						className="shop-content__side-bars__product__item"
					>
						<div className="shop-content__side-bars__product__item__image">
							<img src={item.image} alt="" />
						</div>
						<div className="shop-content__side-bars__product__item__content">
							<div className="shop-content__side-bars__product__item__content__title">
								{item.title}
							</div>
							<div className="shop-content__side-bars__product__item__content__price">
								{item.priceOld && <del>{item.priceOld}.00</del>}
								{item.price}.00
							</div>
						</div>
					</div>
				))}
			</div>
		</>
	);
};

ShopSideBar.propTypes = {};

export default ShopSideBar;
