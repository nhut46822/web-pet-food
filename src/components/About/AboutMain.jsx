import React from "react";
import PropTypes from "prop-types";
import AboutHeader from "./AboutHeader";
import AboutTeam from "./AboutTeam";
import AboutWork from "./AboutWork";

const AboutMain = (props) => {
	return (
		<div className="about-main">
			<AboutHeader />

			<AboutTeam />

			<AboutWork />
		</div>
	);
};

AboutMain.propTypes = {};

export default AboutMain;
