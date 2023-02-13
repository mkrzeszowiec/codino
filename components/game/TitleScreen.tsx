import { useTranslation } from 'next-i18next';

interface GameTitleScreenProps {
	type: 'game-start' | 'game-over';
}

const GameTitleScreen: React.FC<GameTitleScreenProps> = ({ type }) => {
	const { t } = useTranslation();

	return (
		<div className="gameTitleScreen">
			{type === 'game-start' && (
				<>
					<h1 className="gameTitleScreen__title">{t('components.game.pressToPlay')}</h1>
					<p>{t('components.game.control')}</p>
				</>
			)}

			{type === 'game-over' && (
				<>
					<h1 className="gameTitleScreen__title">{t('components.game.gameOver')}</h1>
					<p>{t('components.game.pressToPlayAgain')}</p>
				</>
			)}
		</div>
	);
};

export default GameTitleScreen;
