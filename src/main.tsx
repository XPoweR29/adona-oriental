import ReactDOM from 'react-dom/client';
import './main.scss';
import { App } from './App';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { AdminInterface } from './components/AdminInterface/AdminInterface';
import LoginPage from './components/LoginPage/LoginPage';
import { NotFoundPage } from './components/NotFoundPage/NotFoundPage';



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
	{
		path: '*',
		element: <NotFoundPage />,
	},
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
	<RouterProvider router={router} />
);
