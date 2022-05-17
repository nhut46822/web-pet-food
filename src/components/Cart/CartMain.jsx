import React from "react";
import PropTypes from "prop-types";
import CartContent from "./CartContent";

const CartMain = (props) => {
	return (
		<div className="cart-main">
			<div className="shop-header">
				<img
					className="shop-header__image"
					src="https://www.coxwellvet.com/wp-content/uploads/sites/29/2018/10/dog-food.jpg"
					alt=""
				/>
				<div className="shop-header__modal">
					<div className="shop-header__modal__content">
						<h2>SHOP</h2>
						<button>Home / Cart</button>
					</div>
				</div>
			</div>
			<CartContent />
		</div>
	);
};

CartMain.propTypes = {};

export default CartMain;
