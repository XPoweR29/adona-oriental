import { DishGroup } from "./types";

export type AppContextType = {
	isMobile: boolean;
	isLarge: boolean;
	mediumBreakpoint: boolean;
	breakpoint: Breakpoints;
	menuShown: boolean;
	setMenuShown: (val: boolean) => void;
	showInfoModal: boolean;
	setShowInfoModal: (show: boolean) => void;
	menu: DishGroup[];
	setMenu: React.Dispatch<React.SetStateAction<DishGroup[]>>;
	configData: any;
	setConfigData: React.Dispatch<React.SetStateAction<any>>;
	loading: boolean;
	setLoading: React.Dispatch<React.SetStateAction<boolean>>;
};
