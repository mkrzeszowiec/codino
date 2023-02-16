import { Tooltip } from 'react-tooltip';
import { useTranslation } from 'next-i18next';
import { event } from 'nextjs-google-analytics';

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
				className={`gameStartButton ${isGameOpening ? 'gameStartButton--launch' : ''}`}
				onClick={onClickStartButton}
			>
				<svg className="loading" viewBox="0 0 84.6 84.6">
					<defs>
						<filter id="stickyFilter">
							<feGaussianBlur in="SourceGraphic" stdDeviation="2" result="blur" />
							<feColorMatrix
								in="blur"
								mode="matrix"
								values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9"
								result="filter"
							/>
							<feComposite in="SourceGraphic" in2="filter" operator="atop" />
						</filter>
						<linearGradient
							id="gradient"
							className="gradient"
							x1="0%"
							y1="0%"
							x2="0%"
							y2="40%"
							gradientTransform="rotate(45)"
						>
							<stop offset="0%" />
							<stop offset="100%" />
						</linearGradient>
					</defs>
					<clipPath id="clip">
						<circle cx="42.3" cy="42.3" r="41.6" />
					</clipPath>
					<g clipPath="url(#clip)">
						<path className="background" d="M0 0h84.6v84.6H0z" />
						<g className="exhaust">
							<g className="filteredGroup">
								<path className="line1 line lineThick" d="M47.7 49.6L13.4 83.9" />
								<path className="line2 line lineThick" d="M42.3 42.3L8 76.6" />
								<path className="line3 line lineThick" d="M33.5 38.5L-.8 72.8" />

								<path className="line4 line lineDots" d="M45 45.82L10.7 80.12" />
								<path className="line5 line lineDots" d="M38.16 40.06L3.86 74.36" />

								<path className="line6 line lineStatic" d="M39.46 41.15L18.91 61.7" />
								<path className="line7 line lineStatic" d="M43.57 43.77L23.02 64.32" />
							</g>
						</g>
						<g className="rotate">
							<g className="rumble">
								<path
									className="arrow"
									d="M60.8 27.2c.6-2.1-1.3-4-3.4-3.4L19.5 35.3c-2.2.7-2.6 3.6-.8 4.9l15.8 7.6c1.1.5 2 1.4 2.5 2.6L44.4 66c1.3 1.9 4.2 1.4 4.9-.8l11.5-38z"
								/>
							</g>
						</g>
					</g>
				</svg>
			</div>
		</>
	);
};

export default GameStartButton;
