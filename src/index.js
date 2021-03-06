import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import "./sass/index.scss";
import { BrowserRouter as Router } from "react-router-dom";

import { ProductProvider } from "./ProductProvider";

ReactDOM.render(
	<React.StrictMode>
		<ProductProvider>
			<Router>
				<App />
			</Router>
		</ProductProvider>
	</React.StrictMode>,
	document.getElementById("root")
);
