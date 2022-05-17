import { createContext, useState } from "react";

import products from "./assets/fake-data/product";

const ProductContext = createContext(products);

export const ProductProvider = (props) => {
	const [totalProduct, setTotalProduct] = useState([]);

	const handleAddToCart = (item, index) => {
		const newProductList = [...totalProduct];
		const isCartItem = newProductList.some((product, index) => {
			return product.id === item.id;
		});

		if (!isCartItem) {
			setTotalProduct([...totalProduct, item]);
		} else {
			const productItem = newProductList.find((product, index) => {
				return product.id === item.id;
			});

			const newProducts = newProductList.map((item, index) => {
				return productItem.id === item.id
					? { ...productItem, quantity: productItem.quantity + 1 }
					: item;
			});

			setTotalProduct(newProducts);
		}
	};

	const handleQualityProduct = (id, action) => {
		const duplicate = totalProduct.find((item) => {
			return item.id === id;
		});

		if (action === "increase") {
			const newTotalProduct = totalProduct.map((product, index) => {
				return product.id === duplicate.id
					? { ...duplicate, quantity: product.quantity + 1 }
					: product;
			});
			setTotalProduct(newTotalProduct);
		} else {
			const newTotalProduct = totalProduct.map((product, index) => {
				return product.id === duplicate.id
					? {
							...duplicate,
							quantity:
								product.quantity - 1 <= 0
									? 1
									: product.quantity - 1,
					  }
					: product;
			});
			setTotalProduct(newTotalProduct);
		}
	};

	const handleClearCart = () => {
		setTotalProduct([]);
	};

	const handleRemoveCart = (id) => {
		const cartProducts = [...totalProduct];

		const indexCartRemove = cartProducts.findIndex((item, index) => {
			return item.id === id;
		});

		cartProducts.splice(indexCartRemove, 1);

		setTotalProduct(cartProducts);
	};

	const dataContext = {
		handleAddToCart,
		totalProduct,
		handleQualityProduct,
		handleClearCart,
		handleRemoveCart,
	};

	return (
		<ProductContext.Provider value={dataContext}>
			{props.children}
		</ProductContext.Provider>
	);
};

export default ProductContext;
