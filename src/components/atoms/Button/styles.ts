import styled from 'styled-components';

interface ContainerProps {
	variant: 'label' | 'primary';
}

export const Container = styled.button<ContainerProps>`
	font-family: 'bebas-neue-pro-expanded', sans-serif;
	font-weight: 600;
	font-style: normal;
	font-size: 21px;
	padding: 16px 24px;
	background-color: ${({ theme, variant }) =>
		variant === 'primary' ? theme.colors.gray.darker : 'none'};
	background: ${({ variant }) => variant === 'label' && 'none'};
	border: none;
	color: ${({ theme, variant }) =>
		variant === 'primary'
			? theme.colors.ice.lighter
			: theme.colors.gray.default};
	border-radius: 10px;
	cursor: pointer;

	:hover {
		opacity: 90%;
	}
`;
