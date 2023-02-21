import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Introduction from '..';

describe('Introduction', () => {
	it('Should render the introduction container', () => {
		render(<Introduction />);

		expect(screen.getByTestId('introduction-container')).toBeInTheDocument();
	});
});
