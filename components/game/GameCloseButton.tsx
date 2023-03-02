import Image from 'next/image';
import { useTranslation } from 'next-i18next';
import { event as googleEvent } from 'nextjs-google-analytics/dist/interactions/event';

interface GameButtonProps {
	isGameMode: boolean;
	onClick: () => void;
}

const GameCloseButton: React.FC<GameButtonProps> = ({ isGameMode, onClick }) => {
	const { t } = useTranslation();

	const onClickCloseButton = () => {
		onClick();

		googleEvent('click_corner_close_button', {
			category: 'Game'
		});
	};

	return (
		<div className="gameButtonWrapper folder-corner">
			<button
				className="gameButton"
				onClick={onClickCloseButton}
				title={isGameMode ? t('components.game.close') : t('components.game.play')}
			>
				<Image src={`/images/${isGameMode ? 'close' : 'game'}.svg`} alt="" height={16} width={16} />
			</button>
		</div>
	);
};

export default GameCloseButton;
