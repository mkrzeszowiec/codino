import { createContext } from 'react';

export type GameContextType = {
	isInputFocus: boolean;
	setIsInputFocus?: (isInput: boolean) => void;
};

export const GameContext = createContext<GameContextType | null>(null);
