import React from "react";
import PropTypes from "prop-types";

const HomeProduct = (props) => {
	return (
		<div className="home-product mt-left-right">
			<div className="home-pet__title">
				<img
					src="https://kamleshyadav.com/templatemonster/pets-food/wp-content/uploads/2019/06/pets-food4.png"
					alt=""
				/>
				<h2 className="home-product__content__title">
					Popular Products
				</h2>
				<p>New Products</p>
			</div>

			<div className="home-product__productList">{props.children}</div>
		</div>
	);
};

HomeProduct.propTypes = {};

export default HomeProduct;
