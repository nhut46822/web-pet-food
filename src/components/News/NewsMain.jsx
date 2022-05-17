import React from "react";
import PropTypes from "prop-types";
import products, { getQuantityProducts } from "../../assets/fake-data/product";

const NewsMain = (props) => {
	const infoBlogPost = [
		{
			title: "Itaque earum rerum hic",
			image: "https://kamleshyadav.com/templatemonster/pets-food/wp-content/uploads/2019/06/pets-food16-570x370-370x240.jpg",
			time: "Nov 16,2021",
		},
		{
			title: "At vero eos et accusamus",
			image: "https://kamleshyadav.com/templatemonster/pets-food/wp-content/uploads/2019/06/pets-food18-570x370-370x240.jpg",
			time: "Nov 16,2021",
		},
		{
			title: "Nam libero tempore, cum",
			image: "https://kamleshyadav.com/templatemonster/pets-food/wp-content/uploads/2019/06/pets-food17-570x370-370x240.jpg",
			time: "Nov 16,2021",
		},
	];

	return (
		<div className="news-main">
			<div className="shop-header">
				<img
					className="shop-header__image"
					src="https://www.coxwellvet.com/wp-content/uploads/sites/29/2018/10/dog-food.jpg"
					alt=""
				/>
				<div className="shop-header__modal">
					<div className="shop-header__modal__content">
						<h2>NEWS</h2>
						<button>Home / News</button>
					</div>
				</div>
			</div>

			<div className="news-main__content">
				<div className="news-main__content__wrapper home-services__content__listItem home-update__content__wrapper">
					<div className="news-main__content__wrapper__item news-main__content__wrapper__item__left">
						<div className="home-services__content__listItem__item home-update__content__description news-main__content__wrapper__item__left__part">
							<img
								src="https://kamleshyadav.com/templatemonster/pets-food/wp-content/uploads/2019/06/pets-food16-570x370-370x240.jpg"
								alt=""
							/>
							<p className="home-update__content__description__time">
								November 16, 2021
							</p>
							<h2>Nam libero tempore, cum</h2>
							<p className="home-update__content__description__info">
								At vero eos et accusamus et iusto odio
								dignissimos ducimus qui blanditiis praesentium
								voluptatum deleniti.
							</p>
							<div className="line"></div>
						</div>
						<div className="home-services__content__listItem__item home-update__content__description home-update__content__description__separate news-main__content__wrapper__item__left__part">
							<img
								src="https://kamleshyadav.com/templatemonster/pets-food/wp-content/uploads/2019/06/pets-food18-570x370-370x240.jpg"
								alt=""
							/>
							<p className="home-update__content__description__time">
								November 16, 2021
							</p>
							<h2>At vero eos et accusamus</h2>
							<p className="home-update__content__description__info">
								At vero eos et accusamus et iusto odio
								dignissimos ducimus qui blanditiis praesentium
								voluptatum deleniti.
							</p>
							<div className="line"></div>
						</div>
						<div className="home-services__content__listItem__item home-update__content__description news-main__content__wrapper__item__left__part">
							<img
								src="https://kamleshyadav.com/templatemonster/pets-food/wp-content/uploads/2019/06/pets-food17-570x370-370x240.jpg"
								alt=""
							/>
							<p className="home-update__content__description__time">
								November 16, 2021
							</p>
							<h2>Nam libero tempore, cum</h2>
							<p className="home-update__content__description__info">
								At vero eos et accusamus et iusto odio
								dignissimos ducimus qui blanditiis praesentium
								voluptatum deleniti.
							</p>
							<div className="line"></div>
						</div>
						<div className="home-services__content__listItem__item home-update__content__description news-main__content__wrapper__item__left__part">
							<img
								src="https://kamleshyadav.com/templatemonster/pets-food/wp-content/uploads/2019/06/pets-food16-570x370-370x240.jpg"
								alt=""
							/>
							<p className="home-update__content__description__time">
								November 16, 2021
							</p>
							<h2>Nam libero tempore, cum</h2>
							<p className="home-update__content__description__info">
								At vero eos et accusamus et iusto odio
								dignissimos ducimus qui blanditiis praesentium
								voluptatum deleniti.
							</p>
							<div className="line"></div>
						</div>
					</div>

					<div className="shop-content__side-bars news-main__content__wrapper__item__right">
						<div className="shop-content__side-bars__search">
							<h2>PRODUCT SEARCH</h2>
							<div className="shop-content__side-bars__search__info">
								<input
									className="news__search"
									type="text"
									name=""
									id=""
									placeholder="Search products..."
									// onChange={handleChangeProducts}
								/>
								<button className="btn-common news__find">
									Search
								</button>
							</div>
						</div>

						<div className="shop-content__side-bars__search category news__category">
							<h2>PRODUCT CATEGORIES</h2>

							<li>Uncategorized</li>
						</div>

						<div className="shop-content__side-bars__product news-main__content__wrapper__item__right__blog">
							<h2>Blog Post</h2>
							{infoBlogPost.map((item, index) => (
								<div
									key={index}
									className="shop-content__side-bars__product__item news__item"
								>
									<div className="shop-content__side-bars__product__item__image news__image">
										<img
											className="news-main__content__wrapper__item__left__part__image"
											src={item.image}
											alt=""
										/>
									</div>
									<div className="shop-content__side-bars__product__item__content">
										<div className="shop-content__side-bars__product__item__content__title news-main__content__wrapper__item__right__blog__title">
											{item.title}
										</div>
										<div className="shop-content__side-bars__product__item__content__price news-main__content__wrapper__item__right__blog__time">
											{item.time}
										</div>
									</div>
								</div>
							))}
						</div>
						<div className="shop-content__side-bars__search">
							<h2>Newsletter</h2>
							<div className="shop-content__side-bars__search__info">
								<input
									className="news__search"
									type="text"
									name=""
									id=""
									placeholder="Enter your email"
									// onChange={handleChangeProducts}
								/>
								<button className="btn-common news__btn ">
									<i className="fas fa-paper-plane"></i>
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

NewsMain.propTypes = {};

export default NewsMain;
