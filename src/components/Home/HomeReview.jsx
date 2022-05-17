import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";

const reviewPeople = [
	{
		title: "Testimonial",
		description:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed malesuada euismod imperdiet. Aenean pretium risus sit amet diam varius convallis. Nulla congue erat ac imperdiet sollicitudin. Morbi accumsan arcu nunc, quis convallis eros pharetra sed. Sed nec ligula sit amet magna euismod lobortis",
		name: "Emma Doe",
		image: "https://kamleshyadav.com/templatemonster/pets-food/wp-content/uploads/2021/11/Speakers44.jpg",
	},
	{
		title: "Testimonial",
		description:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed malesuada euismod imperdiet. Aenean pretium risus sit amet diam varius convallis. Nulla congue erat ac imperdiet sollicitudin. Morbi accumsan arcu nunc, quis convallis eros pharetra sed. Sed nec ligula sit amet magna euismod lobortis",
		name: "David Parker",
		image: "https://kamleshyadav.com/templatemonster/pets-food/wp-content/uploads/2021/11/Speakers11.jpg",
	},
	{
		title: "Testimonial",
		description:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed malesuada euismod imperdiet. Aenean pretium risus sit amet diam varius convallis. Nulla congue erat ac imperdiet sollicitudin. Morbi accumsan arcu nunc, quis convallis eros pharetra sed. Sed nec ligula sit amet magna euismod lobortis",
		name: "Emma Doe",
		image: "https://kamleshyadav.com/templatemonster/pets-food/wp-content/uploads/2021/11/Speakers44.jpg",
	},
];

const HomeReview = (props) => {
	const [indexReviewPeople, setIndexReviewPeople] = useState(0);

	const slideReviewPresent = indexReviewPeople * -100;

	const styleSlide = {
		transform: `translateX(${slideReviewPresent}%)`,
		transition: "transform 0.35s ease-in-out",
	};

	const handleSlideReview = (index) => {
		if (index < 0) index = 2;
		if (index > 2) index = 0;
		setIndexReviewPeople(index);
	};

	useEffect(() => {
		const autoChangeSlide = setInterval(() => {
			handleSlideReview(indexReviewPeople + 1);
		}, 2000);

		return () => {
			clearInterval(autoChangeSlide);
		};
	}, [indexReviewPeople]);

	return (
		<div className="home-review">
			<img
				className="home-review__image"
				src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/heart-healthy-food-1580231690.jpg?crop=1.00xw:0.752xh;0,0.192xh&resize=1200:*"
				alt=""
			/>
			<div className="home-review__container">
				<div className="home-pet__title">
					<img
						className="home-services__content__image__detail"
						src="https://kamleshyadav.com/templatemonster/pets-food/wp-content/uploads/2019/06/pets-food5.png"
						alt=""
					/>
					<h2>Customer Review</h2>
					<p>Testimonials</p>
				</div>

				<div className="home-review__container__content__slide__description__btn">
					<div
						className="home-review__container__content__slide__description__btn__icon"
						onClick={() => handleSlideReview(indexReviewPeople - 1)}
					>
						<i className="fas fa-arrow-left"></i>
					</div>
					<div
						className="home-review__container__content__slide__description__btn__icon"
						onClick={() => handleSlideReview(indexReviewPeople + 1)}
					>
						<i className="fas fa-arrow-right"></i>
					</div>
				</div>
				<div className="home-review__container__content">
					{reviewPeople.map((item, index) => (
						<div
							className="home-review__container__content__slide"
							style={styleSlide}
							key={index}
						>
							<div className="home-review__container__content__slide__img">
								<img src={item.image} alt="" />
							</div>
							<div className="home-review__container__content__slide__description">
								<h3>{item.title}</h3>
								<p className="home-review__container__content__slide__description__text">
									{item.description}
								</p>
								<p className="home-review__container__content__slide__description__name">
									{item.name}
									<span>- Client</span>
								</p>
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

HomeReview.propTypes = {};

export default HomeReview;
