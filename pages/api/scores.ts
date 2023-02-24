import type { NextApiRequest, NextApiResponse } from 'next';
import { promises as fs } from 'fs';
import { generateHashCode } from 'utils/utils';

const GAME_SCORES_FILE_NAME = 'scores.json';
const TOP_GAME_SCORES_LIMIT = 10;

export interface Score {
	id: number;
	name: string;
	value: number;
	key: string;
	date: string;
}

export default async function handler(request: NextApiRequest, response: NextApiResponse<Score[]>) {
	const { method, body } = request;

	switch (method) {
		case 'GET':
			response.status(200).json(await getTopScores());
			break;

		case 'POST':
			isCorrectKey(body)
				? response.status(200).json(await handlePost(body))
				: response.status(403).end(`Incorrect key`);
			break;

		default:
			response.setHeader('Allow', ['POST', 'GET']);
			response.status(405).end(`Method ${method} Not Allowed`);
	}
}

const handlePost = async (body): Promise<Score[]> => {
	const newScores = await getNewScores(body);
	await saveScoresToFile(newScores);
	return getTopScores();
};

const getNewScores = async (body): Promise<Score[]> => {
	const currentScores = await readCurrentScoresFromFile();
	const newScore = { ...body, id: currentScores.length + 1 } as Score;
	delete newScore.key;
	return [...currentScores, newScore] as Score[];
};

const readCurrentScoresFromFile = async (): Promise<Score[]> => {
	try {
		const currentScores = await fs.readFile(GAME_SCORES_FILE_NAME, 'utf8');
		return currentScores ? JSON.parse(currentScores) : [];
	} catch (error) {
		await fs.writeFile(GAME_SCORES_FILE_NAME, '');
		return [];
	}
};

const getTopScores = async (): Promise<Score[]> => {
	const scores = await readCurrentScoresFromFile();
	return scores.sort((a, b) => b.value - a.value).slice(0, TOP_GAME_SCORES_LIMIT);
};

const saveScoresToFile = async (scores: Score[]): Promise<void> =>
	await fs.writeFile(GAME_SCORES_FILE_NAME, JSON.stringify(scores));

const isCorrectKey = (body): boolean => generateHashCode(body.value) === body.key;
