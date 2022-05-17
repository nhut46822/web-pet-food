import React, { useEffect, useRef, useState } from "react";
import PropTypes from "prop-types";
import products from "../../assets/fake-data/product";

const ProductItem = (props) => {
	const { indexTransform } = props;
	const widthProductElememt = useRef();
	const [widthProduct, setWidthProduct] = useState(0);

	const numberTransform = indexTransform * widthProduct;

	useEffect(() => {
		setWidthProduct(widthProductElememt.current.offsetWidth + 2);
	}, [indexTransform, widthProduct]);

	const styleProductItem = {
		transform: `translateX(-${numberTransform}px)`,
		transition: `transform 0.36s ease-out`,
	};

	return (
		<>
			{products.map((item, index) => (
				<div
					key={index}
					className="product-item"
					style={styleProductItem}
				>
					<div className="product-item__detail home-productList__content__item">
						<img src={item.image} alt="" />
						<div
							ref={widthProductElememt}
							className="product-item__detail__content"
						>
							<p>{item.title}</p>
							{item.priceOld && <del>${item.priceOld}.00</del>}
							<span>${item.price}.00</span>
						</div>
					</div>
				</div>
			))}
		</>
	);
};

ProductItem.propTypes = {};

export default ProductItem;
