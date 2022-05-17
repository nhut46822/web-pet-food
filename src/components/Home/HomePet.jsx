import React from "react";
import PropTypes from "prop-types";
import dogCatEat from "../../assets/images/dog-cat-eat.jpg";
import Button from "../Button/Button";

const HomePet = (props) => {
	return (
		<div className="home-pet">
			<div className="home-pet__title">
				<img
					src="https://kamleshyadav.com/templatemonster/pets-food/wp-content/uploads/2019/06/pets-food4.png"
					alt=""
				/>
				<h2>Welcome To Food Store</h2>
				<p>Best Food Store</p>
			</div>
			<div className="home-pet__content">
				<div className="home-pet__content__image">
					<img src={dogCatEat} alt="" />
				</div>
				<div className="home-pet__content__description">
					<p>
						Ut enim ad minim veniam, quis nostrud exercitation
						ullamco laboris nisi ut aliquip ex ea commodo consequat
					</p>

					<p>
						Nam libero tempore, cum soluta nobis est eligendi optio
						cumque nihil impedit quo minus id quod maxime placeat
						facere possimus, omnis voluptas assumenda est
					</p>

					<div className="home-pet__content__description__benefit">
						<img
							src="https://kamleshyadav.com/templatemonster/pets-food/wp-content/uploads/2019/06/pets-food4.png"
							alt=""
						/>
						<p>Itaque earum rerum hic tenetur</p>
					</div>
					<div className="home-pet__content__description__benefit">
						<img
							src="https://kamleshyadav.com/templatemonster/pets-food/wp-content/uploads/2019/06/pets-food4.png"
							alt=""
						/>
						<p>At vero eos et accusamus et iusto</p>
					</div>
					<div className="home-pet__content__description__benefit">
						<img
							src="https://kamleshyadav.com/templatemonster/pets-food/wp-content/uploads/2019/06/pets-food4.png"
							alt=""
						/>
						<p>Nemo enim ipsam voluptatem quia</p>
					</div>
					<div className="home-pet__content__description__benefit">
						<img
							src="https://kamleshyadav.com/templatemonster/pets-food/wp-content/uploads/2019/06/pets-food4.png"
							alt=""
						/>
						<p>Temporibus autem quibusdam et aut</p>
					</div>
					<div className="separate"></div>
					<Button size="sm" mobile="big">
						Read More
					</Button>
				</div>
			</div>
		</div>
	);
};

HomePet.propTypes = {};

export default HomePet;
