import { createContext } from 'react';

type AppContextType = {
	isMobile: boolean;
	setIsMobile: (val: boolean) => void;
};

export const AppContext = createContext<AppContextType | null>(null);
