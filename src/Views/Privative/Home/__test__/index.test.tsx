import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Home from '..';

describe('Home', () => {
	it('Should render the home container', () => {
		render(<Home />);

		expect(screen.getByTestId('home-container')).toBeInTheDocument();
	});
});
