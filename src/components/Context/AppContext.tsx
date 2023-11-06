import { createContext } from 'react';

type AppContextType = {
	isMobile: boolean;
	mediumBreakpoint: boolean;
};

export const AppContext = createContext<AppContextType | null>(null);
