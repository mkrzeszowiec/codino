import { useContext, useState } from 'react';
import { useTranslation } from 'next-i18next';
import { post } from 'utils/api';
import { generateHashCode, getFormattedCurrentDate } from 'utils/utils';
import { GameContext } from './context';

interface GameOverProps {
	score: number;
	onScoreSend: (nick: string, score: number) => void;
}

export const GameOver: React.FC<GameOverProps> = ({ score, onScoreSend }) => {
	const { t } = useTranslation();
	const { setIsInputFocus, isInputFocus } = useContext(GameContext);
	const [nick, setNick] = useState('');

	const onFormSubmit = async event => {
		event.preventDefault();

		await post('/api/scores', {
			name: nick,
			value: score,
			key: generateHashCode(score),
			date: getFormattedCurrentDate()
		});

		setIsInputFocus(false);
		onScoreSend(nick, score);
	};

	const handleInputChange = event => {
		setNick(event.target.value);
	};

	const onFocus = () => setIsInputFocus(true);
	const onBlur = () => setIsInputFocus(false);

	return (
		<>
			<h1 className="gameTitleScreen__title">{t('components.game.gameOver')}</h1>
			<h2 className="gameTitleScreen__score">
				{t('components.game.yourScore')}
				<span className="gameTitleScreen__scoreValue">{score}</span>
			</h2>

			<form onSubmit={onFormSubmit} className="gameTitleScreen__form">
				<label htmlFor="gameTitleScreen__inputLabel">{t('components.game.addYourName')}</label>
				<input
					onKeyDown={e => e.stopPropagation()}
					required
					id="scoreInput"
					placeholder=""
					onChange={handleInputChange}
					onFocus={onFocus}
					onBlur={onBlur}
					type="text"
					className="gameTitleScreen__input"
					autoComplete="off"
					autoFocus
				/>

				<button type="submit" className="gameHighScores__button button button--border-white">
					{t('components.game.add')}
				</button>
			</form>

			<p className={`gameTitleScreen__tip ${isInputFocus ? 'gameTitleScreen__tip--disabled' : ''}`}>
				{t('components.game.pressToShowScoreBoard')}
			</p>

			<p className={`gameTitleScreen__tip ${isInputFocus ? 'gameTitleScreen__tip--disabled' : ''}`}>
				{t('components.game.pressSpaceToPlayAgain')}
			</p>
			<p>{t('components.game.pressEscToClose')}</p>
		</>
	);
};
