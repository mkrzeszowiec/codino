import { Tooltip } from 'react-tooltip';
import { useTranslation } from 'next-i18next';
import { event } from 'nextjs-google-analytics';
import GameStartRocketIcon from 'components/game/GameStartRocketIcon';

interface GameButtonProps {
	isGameOpening: boolean;
	onClick: () => void;
}

const GAME_START_ID = 'gameStartButton';

const GameStartButton: React.FC<GameButtonProps> = ({ onClick, isGameOpening }) => {
	const { t } = useTranslation();

	const onClickStartButton = () => {
		onClick();
		event('click_open_game_button', {
			category: 'Game'
		});
	};

	return (
		<>
			<Tooltip className="gameStartButton__tooltip" anchorId={GAME_START_ID} place="bottom">
				{t('components.game.play')}
			</Tooltip>

			<div
				id={GAME_START_ID}
				className={`gameStartButton  ${isGameOpening ? 'gameStartButton--launch' : ''}`}
				onClick={onClickStartButton}
			>
				<GameStartRocketIcon />
			</div>
		</>
	);
};

export default GameStartButton;
