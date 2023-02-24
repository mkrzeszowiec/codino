import type { NextApiRequest, NextApiResponse } from 'next';
import { promises as fs } from 'fs';
import { generateHashCode } from 'utils/utils';

const GAME_SCORES_FILE_NAME = 'scores.json';

export interface Score {
	id: number;
	name: string;
	value: string;
	key: string;
	date: string;
}

export default async function handler(req: NextApiRequest, res: NextApiResponse<Score[]>) {
	const { method, body } = req;

	switch (method) {
		case 'GET':
			res.status(200).json(await readCurrentScores());
			break;

		case 'POST':
			if (isCorrectKey(body)) {
				res.status(200).json(await handlePost(body));
			} else {
				res.status(403).end(`Incorrect key`);
			}
			break;

		default:
			res.setHeader('Allow', ['POST', 'GET']);
			res.status(405).end(`Method ${method} Not Allowed`);
	}
}

const handlePost = async (body): Promise<Score[]> => {
	const newScores = await getNewScores(body);
	await writeCurrentScores(newScores);
	return newScores;
};

const getNewScores = async (body): Promise<Score[]> => {
	const currentScores = await readCurrentScores();
	const newScore = { ...body, id: currentScores.length + 1 } as Score;
	delete newScore.key;
	return [...currentScores, newScore] as Score[];
};

const readCurrentScores = async (): Promise<Score[]> => {
	const currentScores = await fs.readFile(GAME_SCORES_FILE_NAME, 'utf8');
	return currentScores ? JSON.parse(currentScores) : [];
};

const writeCurrentScores = async (scores: Score[]): Promise<void> =>
	await fs.writeFile(GAME_SCORES_FILE_NAME, JSON.stringify(scores));

const isCorrectKey = (body): boolean => generateHashCode(body.value) === body.key;
