import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import AnalyticsTree from '..';

describe('Login', () => {
	it('Should render the login container', () => {
		render(<AnalyticsTree />);

		expect(screen.getByTestId('analytic-tree-container')).toBeInTheDocument();
	});
});
