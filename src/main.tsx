import ReactDOM from "react-dom/client";
import "./main.scss";
import {createBrowserRouter, Navigate, RouterProvider,} from "react-router-dom";
import { AdminInterface } from "./components/AdminInterface/AdminInterface";
import LoginPage from "./components/LoginPage/LoginPage";
import { AppContextProvider } from "./components/Context/AppContext";
import { App } from "./App";
import { MenuManager } from "./components/MenuManager/MenuManager";
import { AdminContextProvider } from "./components/Context/AdminContext";

const router = createBrowserRouter([
	{
		path: "/",
		element: (
			<AppContextProvider>
				<App/>
			</AppContextProvider>
		),
	},
	{
		path: "/admin-config",
		element: <LoginPage />,
	},
	{
		path: "/interface",
		element: <AdminInterface />,
		children: [
			{
				path: "menu-manager",
				element: (
					<AdminContextProvider>
						<MenuManager />
					</AdminContextProvider>
				),
			},
		],
	},
	{
		path: "*",
		element: <Navigate to="/" />,
	},
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
	<RouterProvider router={router} />
);
