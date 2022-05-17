import React, { useState } from "react";
import PropTypes from "prop-types";
import ProductItem from "../ProductItem/ProductItem";
import products from "../../assets/fake-data/product";

const HomeProductList = (props) => {
	const [indexTransform, setIndexTransform] = useState(0);

	const handleIndexTransform = (index) => {
		if (index <= 0) {
			index = 0;
			setIndexTransform(index);
			return;
		} else if (index >= products.length - 4) {
			index = products.length - 4;
			setIndexTransform(index);
			return;
		}

		setIndexTransform(index);
	};

	return (
		<div className="home-productList">
			<div className="home-pet__title">
				<img
					src="https://kamleshyadav.com/templatemonster/pets-food/wp-content/uploads/2019/06/pets-food4.png"
					alt=""
				/>
				<h2 className="home-product__content__title">
					Featured Products
				</h2>
				<p>Trending Products</p>
			</div>
			<div className="home-productList__content">
				<div
					onClick={() => handleIndexTransform(indexTransform - 1)}
					className={` home-productList__content__btn home-productList__content__prev ${
						indexTransform === 0 ? "disable" : ""
					}`}
				>
					<i className="fas fa-chevron-left"></i>
				</div>
				<ProductItem indexTransform={indexTransform} />
				<div
					onClick={() => handleIndexTransform(indexTransform + 1)}
					className={`home-productList__content__btn home-productList__content__next ${
						indexTransform === products.length - 4 ? "disable" : ""
					}`}
				>
					<i className="fas fa-chevron-right"></i>
				</div>
			</div>
		</div>
	);
};

HomeProductList.propTypes = {};

export default HomeProductList;
