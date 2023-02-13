import { useTranslation } from 'next-i18next';

interface GameTitleScreenProps {
	type?: 'game-start' | 'game-over';
}

const GameTitleScreen: React.FC<GameTitleScreenProps> = ({ type = 'game-start' }) => {
	const { t } = useTranslation();

	return (
		<div className="gameTitleScreen">
			{type === 'game-start' && <p className="gameTitleScreen-message">{t('components.game.pressToPlay')}</p>}

			{type === 'game-over' && (
				<>
					<h1 className="gameTitleScreen-title gameTitleScreen-game-over">{t('components.game.gameOver')}</h1>
					<p className="gameTitleScreen-message">{t('components.game.pressToPlayAgain')}</p>
				</>
			)}
		</div>
	);
};

export default GameTitleScreen;
