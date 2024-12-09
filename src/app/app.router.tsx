import { createHashRouter, RouteObject } from "react-router-dom"
import Home from "../pages/Home"

const routers: RouteObject[] = [
	{
		path: "/",
		element: <Home />,
	},
]

export default createHashRouter(routers)
