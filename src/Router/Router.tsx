import React, { useContext } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Home from 'Views/Privative/Home';

import Introduction from 'Views/Public/Introduction';
import AnalyticsTree from 'Views/Public/AnalyticsTree';
import AnalyticsCardSorting from 'Views/Public/AnalyticsCardSorting';
import AnalyticsUseBerry from 'Views/Public/AnalyticsUseBerry';

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
			path: '/analytics-tree',
			element: <AnalyticsTree />,
		},
		{
			path: 'analytics-card-sorting',
			element: <AnalyticsCardSorting />,
		},
		{
			path: 'analytics-useberry',
			element: <AnalyticsUseBerry />,
		},
	]);

	const routes = isLogged ? privativeRoutes : publicRoutes;

	return <RouterProvider data-testid="router-provider" router={routes} />;
};

export default Router;
