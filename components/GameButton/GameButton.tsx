import Image from 'next/image';
import { useTranslation } from 'next-i18next';

interface GameButtonProps {
	isGameMode: boolean;
	onClick: () => void;
}

const GameButton: React.FC<GameButtonProps> = ({ isGameMode, onClick }) => {
	const { t } = useTranslation();

	return (
		<div className="gameButtonWrapper folder-corner">
			<button
				className="gameButton"
				onClick={onClick}
				title={isGameMode ? t('components.game.close') : t('components.game.play')}
			>
				<Image src={`/images/${isGameMode ? 'close' : 'game'}.svg`} alt="" height={16} width={16} />
			</button>
		</div>
	);
};

export default GameButton;
