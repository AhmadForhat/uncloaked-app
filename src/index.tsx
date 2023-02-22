import React from 'react';
import ReactDOM from 'react-dom/client';
import { ErrorBoundary } from 'react-error-boundary';

import ErrorFallback from 'components/ErrorFallback';

import * as serviceWorkerRegistration from './serviceWorkerRegistration';
import Router from './Router';
import GlobalStyle from 'themes/globalstyles';
import { AuthProvider } from 'context/Auth';
import { ThemeProvider } from 'styled-components';
import { tokens } from 'themes/tokens';

const root = ReactDOM.createRoot(
	document.getElementById('root') as HTMLElement,
);

root.render(
	<React.StrictMode>
		<ErrorBoundary FallbackComponent={ErrorFallback}>
			<ThemeProvider theme={tokens}>
				<GlobalStyle />
				<AuthProvider>
					<Router />
				</AuthProvider>
			</ThemeProvider>
		</ErrorBoundary>
	</React.StrictMode>,
);

serviceWorkerRegistration.register();
