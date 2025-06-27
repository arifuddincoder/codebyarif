import { createBrowserRouter } from "react-router";
import RootLayout from "../layouts/RootLayout";
import NotFound from "../pages/NotFound";
import Home from "../pages/Home/Home";
import Projects from "../pages/Projects/Projects";
import Contact from "../pages/Contact/Contact";

export const router = createBrowserRouter([
	{
		path: "/",
		Component: RootLayout,
		errorElement: <NotFound></NotFound>,
		children: [
			{
				index: true,
				Component: Home,
			},
			{
				path: "/projects",
				Component: Projects,
			},
			{
				path: "/contact",
				Component: Contact,
			},
		],
	},
]);
