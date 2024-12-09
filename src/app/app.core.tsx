import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import { RouterProvider } from "react-router-dom"
import router from "./app.router"

import "./app.tailwind.css"

const rootElement = document.getElementById("root")!
if (!rootElement) {
	throw new Error("Root element with id 'root' not found in the DOM. Please disable Extensions in your browser.")
}
const root = createRoot(rootElement)
root.render(
	<StrictMode>
		<RouterProvider router={router} />
	</StrictMode>
)
