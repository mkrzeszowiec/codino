import Image from 'next/image';

interface GameButtonProps {
	isGameMode: boolean;
	onClick: () => void;
}

const GameButton: React.FC<GameButtonProps> = ({ isGameMode, onClick }) => {
	return (
		<div className="gameButtonWrapper folder-corner">
			<button className="gameButton" onClick={onClick} title={isGameMode ? 'Close' : 'Play'}>
				<Image src={`/images/${isGameMode ? 'close' : 'game'}.svg`} alt="" height={16} width={16} />
			</button>
		</div>
	);
};

export default GameButton;
