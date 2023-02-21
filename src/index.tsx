import React from 'react';
import ReactDOM from 'react-dom/client';
import { ErrorBoundary } from 'react-error-boundary';

import ErrorFallback from 'components/ErrorFallback';

import * as serviceWorkerRegistration from './serviceWorkerRegistration';
import Router from './Router';
import GlobalStyle from 'themes/globalstyles';
import { AuthProvider } from 'context/Auth';

const root = ReactDOM.createRoot(
	document.getElementById('root') as HTMLElement,
);

console.log(process.env.REACT_APP_BASE_API);

root.render(
	<React.StrictMode>
		<ErrorBoundary FallbackComponent={ErrorFallback}>
			<GlobalStyle />
			<AuthProvider>
				<Router />
			</AuthProvider>
		</ErrorBoundary>
	</React.StrictMode>,
);

serviceWorkerRegistration.register();
