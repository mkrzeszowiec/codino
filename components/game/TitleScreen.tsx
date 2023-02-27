import { useTranslation } from 'next-i18next';
import { GameOver } from 'components/game/GameOver';

interface GameTitleScreenProps {
	type: 'game-start' | 'game-over';
	score?: number;
	onScoreSend: (nick: string, score: number) => void;
}

const GameTitleScreen: React.FC<GameTitleScreenProps> = ({ type, score, onScoreSend }) => {
	const { t } = useTranslation();

	return (
		<div className="gameTitleScreen">
			{type === 'game-start' && (
				<>
					<h1 className="gameTitleScreen__title">{t('components.game.pressToPlay')}</h1>
					<p>{t('components.game.control')}</p>
					<p>{t('components.game.pressToShowScoreBoard')}</p>
					<p>{t('components.game.pressEscToClose')}</p>
				</>
			)}

			{type === 'game-over' && <GameOver onScoreSend={onScoreSend} score={score} />}
		</div>
	);
};

export default GameTitleScreen;
