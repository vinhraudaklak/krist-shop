 import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home/Home";
import Products from "../pages/ProductsPage/ProductsPage";
import DetailPage from "../pages/DetailPage/DetailPage";
export const router = createBrowserRouter([
	{
		path: "/",
		element: <Home />,
	},
	{
		path: "/products",
		element: <Products />,
	},
	{
		path: "/productDetail",
		element: <DetailPage />,
	},
]);
