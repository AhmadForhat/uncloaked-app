import React, { useContext } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Home from 'Views/Privative/Home';

import Introduction from 'Views/Public/Introduction';
import Login from 'Views/Public/Login';

import { AuthContext } from 'context/Auth';

const Router = (): JSX.Element => {
	const { isLogged } = useContext(AuthContext);

	const privativeRoutes = createBrowserRouter([
		{
			path: '/',
			element: <Home />,
		},
	]);

	const publicRoutes = createBrowserRouter([
		{
			path: '/',
			element: <Introduction />,
		},
		{
			path: '/login',
			element: <Login />,
		},
	]);

	const routes = isLogged ? privativeRoutes : publicRoutes;

	return <RouterProvider data-testid="router-provider" router={routes} />;
};

export default Router;
