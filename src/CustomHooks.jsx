import { useContext } from "react";
import ProductProvider from "./ProductProvider";

const useStore = () => {
	const valueContext = useContext(ProductProvider);
	return valueContext;
};

export default useStore;
