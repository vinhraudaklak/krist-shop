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
		path: "/Products",
		element: <Products />,
	},
	{
		path: "/Products/:id",
		element: <DetailPage />,
	},
]);
