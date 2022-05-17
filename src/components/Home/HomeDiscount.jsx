import React from "react";
import PropTypes from "prop-types";
import Button from "../Button/Button";

const HomeDiscount = (props) => {
	return (
		<div className="home-discount">
			<img
				src="https://cdn.shopify.com/s/files/1/0508/4767/8644/articles/Redbarn_Chew-A-Bull_Ring_Dog_1200x.jpg?v=1612934715"
				alt=""
			/>
			<div className="home-discount__modal"></div>
			<div className="home-discount__btn">
				<Button size="sm">Buy now</Button>
			</div>
		</div>
	);
};

HomeDiscount.propTypes = {};

export default HomeDiscount;
