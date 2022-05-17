import React from "react";
import PropTypes from "prop-types";
import useStore from "../../CustomHooks";

const CartContent = (props) => {
	const {
		totalProduct,
		handleQualityProduct,
		handleClearCart,
		handleRemoveCart,
	} = useStore();

	const subTotal = totalProduct.reduce((acc, item) => {
		console.log("quantity", item.quantity);
		console.log("price", item.price);
		return acc + item.quantity * item.price;
	}, 0);

	const tax = ((subTotal * 2.25) / 100).toFixed(2);

	const totalPrice = (parseFloat(subTotal) + parseFloat(tax)).toFixed(2);

	return (
		<div className="cart-main__container">
			<div className="cart-main__container__title">
				<h1>Your cart</h1>
			</div>

			<div className="cart-main__container__content">
				{totalProduct.map((item, index) => {
					const { id, image, title, price, quantity } = item;

					return (
						<div key={index}>
							<div className="cart-main__container__content__item">
								<div className="cart-main__container__content__item__image cart-main__container__content__item__wrapper">
									<h2>Product</h2>
									<img src={image} alt="" />
								</div>

								<div className="cart-main__container__content__item__name cart-main__container__content__item__wrapper">
									<h2>Name</h2>
									<p>{title}</p>
								</div>

								<div className="cart-main__container__content__item__price cart-main__container__content__item__wrapper">
									<h2>Price</h2>
									<p>{price}.00</p>
								</div>

								<div className="cart-main__container__content__item__quantity cart-main__container__content__item__wrapper">
									<h2>Quantity</h2>
									<p>
										<button
											onClick={() =>
												handleQualityProduct(
													id,
													"decrease"
												)
											}
										>
											-
										</button>
										<button>{quantity}</button>
										<button
											onClick={() =>
												handleQualityProduct(
													id,
													"increase"
												)
											}
										>
											+
										</button>
									</p>
								</div>

								<div className="cart-main__container__content__item__remove cart-main__container__content__item__wrapper">
									<h2>Remove</h2>
									<i
										className="fas fa-trash"
										onClick={() => handleRemoveCart(id)}
									></i>
								</div>

								<div className="cart-main__container__content__item__total cart-main__container__content__item__wrapper">
									<h2>Item total</h2>
									<p>
										{quantity} x {price}
										.00
									</p>
								</div>
							</div>
							<div className="cart-main__container__content__line"></div>
						</div>
					);
				})}
			</div>

			<div className="cart-main__container__total">
				<div className="cart-main__container__total__wrapper">
					<button
						className="cart-main__container__total__wrapper__btn"
						onClick={handleClearCart}
					>
						CLEAR CART
					</button>
					<p>
						SubTotal: <span>${subTotal.toFixed(2)}</span>
					</p>
					<p>
						Tax: <span>${tax}</span>
					</p>
					<p>
						Total: <span>${totalPrice}</span>
					</p>
				</div>
				<div className="clear"></div>
			</div>
		</div>
	);
};

CartContent.propTypes = {};

export default CartContent;
