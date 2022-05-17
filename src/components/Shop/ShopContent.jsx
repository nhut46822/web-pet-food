import React, { useState } from "react";
import PropTypes from "prop-types";
import ProductItem from "../ProductItem/ProductItem";
import ShopItem from "./ShopItem";
import products, { getQuantityProducts } from "../../assets/fake-data/product";
import ShopSideBar from "./ShopSideBar";

const ShopContent = (props) => {
	const [productList, setProductList] = useState(products);
	let newAllProduct = [...products];

	const handleChangeProducts = (e) => {
		const newProductList = newAllProduct.filter((item, index) => {
			return item.title
				.toUpperCase()
				.includes(e.target.value.toUpperCase());
		});
		console.log("newProductList", newProductList);

		setProductList(newProductList);
	};

	return (
		<div className="shop-content">
			<div className="shop-content__product">
				<div className="shop-content__product__title">
					<p>Showing all {products.length} results</p>

					<select name="" id="">
						<option value="">Default sorting</option>
						<option value="">Increase</option>
						<option value="">Decrease</option>
					</select>
				</div>

				<div className="shop-content__product__list">
					<ShopItem data={productList} />
				</div>
			</div>

			<div className="shop-content__side-bars">
				<div className="shop-content__side-bars__search">
					<h2>PRODUCT SEARCH</h2>
					<div className="shop-content__side-bars__search__info">
						<input
							type="text"
							name=""
							id=""
							placeholder="Search products..."
							onChange={handleChangeProducts}
						/>
						<button className="btn-common">Search</button>
					</div>
				</div>

				<div className="shop-content__side-bars__search category">
					<h2>PRODUCT CATEGORIES</h2>

					<li>Uncategorized</li>
				</div>

				<ShopSideBar />
			</div>
		</div>
	);
};

ShopContent.propTypes = {};

export default ShopContent;
