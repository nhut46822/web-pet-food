import React from "react";
import PropTypes from "prop-types";

const HomeUpdate = (props) => {
	return (
		<div className="home-update">
			<div className="home-services">
				<div className="home-services__content home-update__content">
					<div className="home-pet__title">
						<img
							src="https://kamleshyadav.com/templatemonster/pets-food/wp-content/uploads/2019/06/pets-food4.png"
							alt=""
						/>
						<h2 className="home-product__content__title">
							Latest Update
						</h2>
						<p>Blogs</p>
					</div>
					<div className="home-services__content__listItem home-update__content__wrapper">
						<div className="home-services__content__listItem__item home-update__content__description">
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
							{/* <div className="line"></div> */}
						</div>
						<div className="home-services__content__listItem__item home-update__content__description home-update__content__description__separate">
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
							{/* <div className="line"></div> */}
						</div>
						<div className="home-services__content__listItem__item home-update__content__description">
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
							{/* <div className="line"></div> */}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

HomeUpdate.propTypes = {};

export default HomeUpdate;
