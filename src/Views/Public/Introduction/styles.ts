import styled from 'styled-components';

interface LineProps {
	actived: boolean;
}

export const Container = styled.div`
	display: grid;
	grid-template-rows: auto auto 1fr;
	height: 100vh;

	img {
		width: 100%;
		margin: 0 auto;
	}
`;

export const ContainerStepLines = styled.div`
	display: grid;
	grid-template-columns: 1fr 1fr;
	align-items: center;
	justify-content: center;
	width: 100%;
	padding: 42px 0;
`;

export const Line = styled.div<LineProps>`
	width: 100%;
	height: ${({ actived }) => (actived ? '3px' : '2px')};
	background-color: ${({ actived, theme }) =>
		actived ? theme.colors.gray.darker : theme.colors.gray.light};
`;

export const ContainerSteps = styled.div`
	display: flex;
	justify-content: space-between;
	margin-bottom: auto;
`;

export const ContainerContent = styled.div`
	display: grid;
	grid-template-rows: auto 1fr auto;
	padding: 32px;

	p {
		padding: 12px 0;
	}
`;
