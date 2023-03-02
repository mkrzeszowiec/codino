import { useTranslation } from 'next-i18next';
import { event } from 'nextjs-google-analytics';
import { Tooltip } from 'react-tooltip';
import GameStartRocketIcon from 'components/game/GameStartRocketIcon';

interface GameFloatingButtonProps {
	isVisible: boolean;
	isLaunchGameAnimating: boolean;
	onClickStartGame: () => void;
}

const GAME_BUTTON_ID = 'gameFloatingButton';

const GameFloatingButton: React.FC<GameFloatingButtonProps> = ({
	isVisible,
	isLaunchGameAnimating,
	onClickStartGame
}) => {
	const { t } = useTranslation();

	const onClickStartButton = () => {
		onClickStartGame();
		event('click_open_game_bottom_button', {
			category: 'Game'
		});
	};

	const containerClasses = `gameStartButton gameStartButton--white ${
		isLaunchGameAnimating ? 'gameStartButton--launch' : ''
	}`;

	return (
		<div className={`gameFloatingButton ${isVisible ? 'gameFloatingButton--show' : ''}`}>
			<Tooltip className="gameStartButton__tooltip" anchorId={GAME_BUTTON_ID} place="bottom">
				{t('components.game.play')}
			</Tooltip>

			<div id={GAME_BUTTON_ID} className={containerClasses} onClick={onClickStartButton}>
				<GameStartRocketIcon isWhite />
			</div>
		</div>
	);
};

export default GameFloatingButton;
