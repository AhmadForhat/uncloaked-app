import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import loveImage from './assets/love.png';
import styleImage from './assets/style.png';
import {
	Container,
	ContainerContent,
	ContainerStepLines,
	ContainerSteps,
	Line,
} from './styles';
import Button from 'components/atoms/Button';

type stepsProps = 'style' | 'love';

type StepProp = {
	image: string;
	text: string;
	title: string;
	alt: string;
	onNext?: () => void;
	onSkip?: () => void;
	lineActived: {
		first: boolean;
		second: boolean;
	};
};

const Introduction = () => {
	const navigate = useNavigate();
	const [currentStepName, setCurrentStepName] = useState<stepsProps>('style');

	const handleGoToLogin = () => navigate('/analytics-tree');

	const steps = {
		style: {
			image: styleImage,
			text: 'We are here to help you in this journey and find what do you like to use',
			title: 'Exploring our own styles',
			alt: 'Feeling trending',
			onNext: () => setCurrentStepName('love'),
			onSkip: handleGoToLogin,
			lineActived: {
				first: true,
				second: false,
			},
		},
		love: {
			image: loveImage,
			text: 'Showing ourselves to the world that way everyone can know how amazing you are',
			title: 'Find some close that fit with what you believe',
			alt: 'Loving ourselve',
			onNext: handleGoToLogin,
			onSkip: handleGoToLogin,
			lineActived: {
				first: false,
				second: true,
			},
		},
	};

	const { image, title, text, onNext, onSkip, lineActived, alt }: StepProp =
		steps[currentStepName];

	return (
		<Container data-testid="introduction-container">
			<ContainerStepLines>
				<Line actived={lineActived.first} />
				<Line actived={lineActived.second} />
			</ContainerStepLines>
			<img alt={alt} src={image} />
			<ContainerContent>
				<h2>{title}</h2>
				<p>{text}</p>
				<ContainerSteps>
					<Button onClick={onSkip} text="Skip" variant="label" />
					<Button onClick={onNext} text="Next" variant="primary" />
				</ContainerSteps>
			</ContainerContent>
		</Container>
	);
};

export default Introduction;
