import { useTranslation } from 'next-i18next';
import useSwr from 'swr';
import { Score } from '../../pages/api/scores';
import { get } from '../../utils/api';

interface GameHighScoresProps {
	isInputVisible: boolean;
	lastNick: string;
	lastScore: number;
}

export const GameHighScores: React.FC<GameHighScoresProps> = ({ lastScore, lastNick }) => {
	const { t } = useTranslation();
	const { data, error, isLoading } = useSwr<Score[]>('/api/scores', get);

	if (isLoading) return null;
	if (error) return <p>Error</p>;

	const isLastScore = (score: Score): boolean => score.name === lastNick && score.value === lastScore;

	return (
		<div className="gameHighScores">
			<table className="gameHighScores__table">
				<caption className="gameHighScores__title">Tabela wyników</caption>
				<tbody>
					<tr className="gameHighScores__item gameHighScores__item--header">
						<th className="gameHighScores__position" />
						<th className="gameHighScores__value">Wynik</th>
						<th className="gameHighScores__name">Nazwa</th>
						<th className="gameHighScores__date">Data</th>
					</tr>

					{data?.map((score, index) => (
						<tr
							className={`gameHighScores__item ${isLastScore(score) ? 'gameHighScores__item--highlighted' : ''}`}
							key={index}
						>
							<td className="gameHighScores__position">{index + 1}</td>
							<td className="gameHighScores__value">{score.value}</td>
							<td className="gameHighScores__name">{score.name}</td>
							<td className="gameHighScores__date">{score.date}</td>
						</tr>
					))}
				</tbody>
			</table>

			<div className="gameHighScores__footer">
				<p>{t('components.game.pressSpaceToPlayAgain')}</p>
				<p>{t('components.game.pressEscToClose')}</p>
			</div>
		</div>
	);
};

export default GameHighScores;
