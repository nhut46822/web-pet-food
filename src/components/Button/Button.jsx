import React from "react";
import PropTypes from "prop-types";

const Button = (props) => {
	const { size, mobile } = props;
	const sizeLarge = size === "large" ? "large" : "";

	const sizeSm = size === "sm" ? "sm" : "";

	const mobileSize = mobile === "big" ? "big" : "";

	return (
		<button
			className={`btn-main 
	 ${sizeLarge} ${sizeSm} ${mobileSize}`}
		>
			{props.children}
		</button>
	);
};

Button.propTypes = {};

export default Button;
