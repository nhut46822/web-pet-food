import React, { useState } from "react";
import dogEat from "../../assets/images/dog-cat-eat.jpg";
import catEat from "../../assets/images/cat-eat.jpg";
import Button from "../Button/Button";
import HomeSlide from "./HomeSlide";
import HomePet from "./HomePet";
import HomeDiscount from "./HomeDiscount";
import HomeProduct from "./HomeProduct";
import ProductItem from "../ProductItem/ProductItem";
import HomeServices from "./HomeServices";
import HomeProductList from "./HomeProductList";
import HomeReview from "./HomeReview";
import HomeUpdate from "./HomeUpdate";

const HomeMain = () => {
	const [activeDot, setaAtiveDot] = useState(1);

	const handleActiveDot = (index) => {
		setaAtiveDot(index);
	};

	return (
		<div className="home-page">
			<HomeSlide
				activeDot={activeDot}
				handleActiveDot={handleActiveDot}
			/>

			<HomePet />

			<HomeDiscount />

			<HomeProduct>
				<ProductItem />
			</HomeProduct>

			<HomeServices />

			<HomeProductList />

			<HomeReview />

			<HomeUpdate />
		</div>
	);
};

export default HomeMain;
