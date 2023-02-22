import React from 'react';
import { Container } from './styles';

interface ButtonProps {
	text: string;
	variant: 'label' | 'primary';
	onClick: () => void;
}

const Button = ({ text, variant, onClick }: ButtonProps): JSX.Element => {
	return (
		<Container onClick={onClick} variant={variant}>
			{text}
		</Container>
	);
};

export default Button;
