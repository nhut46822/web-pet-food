import React, { useContext } from "react";
import PropTypes from "prop-types";
import useStore from "../../CustomHooks";

const ShopItem = (props) => {
	const { data } = props;
	const { handleAddToCart } = useStore();

	return (
		<div className="shop-wrap">
			{data.map((item, index) => (
				<div key={index} className="shop-item">
					{item.sale && (
						<div className="shop-item__sale btn-common">Sale!</div>
					)}
					<div className="shop-item__image">
						<img src={item.image} alt="" />
					</div>
					<div className="shop-item__content">
						<h3 className="shop-item__content__title">
							{item.title}
						</h3>
						{item.priceOld && (
							<del className="shop-item__content__price-older">
								${item.priceOld}.00
							</del>
						)}
						<p className="shop-item__content__price">
							${item.price}.00
						</p>
						<div className="shop-item__content__btn">
							<button
								className="btn-common"
								onClick={() => handleAddToCart(item, index)}
							>
								Add to cart
							</button>
						</div>
					</div>
				</div>
			))}
		</div>
	);
};

ShopItem.propTypes = {};

export default ShopItem;
