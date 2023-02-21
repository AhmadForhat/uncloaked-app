import React, { useEffect, useRef, useState } from 'react';

interface deferredPromptProps {
	prompt: () => void;
	userChoice: { outcome: null };
}

const Introduction = () => {
	const [isOpenButton, setOpenButton] = useState(false);
	const deferredPrompt = useRef<deferredPromptProps | null>(null);

	useEffect(() => {
		window.addEventListener('beforeinstallprompt', (e: any) => {
			setOpenButton(true);
			deferredPrompt.current = e;
		});
	}, []);

	const handleClick = async () => {
		if (deferredPrompt.current !== null) {
			deferredPrompt.current.prompt();
			const { outcome } = await deferredPrompt.current.userChoice;
			if (outcome === 'accepted') {
				deferredPrompt.current = null;
			}
		}
	};

	return (
		<div data-testid="introduction-container">
			Introduction
			{isOpenButton && <button onClick={handleClick}>Download app!</button>}
		</div>
	);
};

export default Introduction;
