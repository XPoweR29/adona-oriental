import ReactDOM from 'react-dom/client';
import './main.scss';
import { App } from './App';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { AdminInterface } from './components/AdminInterface/AdminInterface';
import LoginPage from './components/LoginPage/LoginPage';



const router = createBrowserRouter([
	{
		path: '/',
		element: <App/>,
	},
	{
		path: '/admin-config',
		element: <LoginPage />,
	},
	{
		path: '/interface',
		element: <AdminInterface />,
	},
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
	<RouterProvider router={router} />
);
