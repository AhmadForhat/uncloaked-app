import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Login from '..';

describe('Login', () => {
	it('Should render the login container', () => {
		render(<Login />);

		expect(screen.getByTestId('login-container')).toBeInTheDocument();
	});
});
