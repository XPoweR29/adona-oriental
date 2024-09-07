import { createContext, useState, ReactNode, useEffect } from "react";
import { Breakpoints, DishGroup } from "../../types/types";
import { AppContextType } from "../../types/AppContextType";
import { ModalConfig } from "../../utils/getFirestoreData";

export const AppContext = createContext<AppContextType | null>(null);

export const AppContextProvider = ({ children }: { children: ReactNode }) => {
	const [menu, setMenu] = useState<DishGroup[]>([]);
	const [breakpoint, setBreakpoint] = useState<Breakpoints>({
		sm: window.innerWidth >= 576,
		md: window.innerWidth >= 768,
		lg: window.innerWidth >= 992,
		xl: window.innerWidth >= 1200,
		xxl: window.innerWidth >= 1400,
	});
	const [isMobile, setIsMobile] = useState<boolean>(window.innerWidth < 768);
	const [isLarge, setIsLarge] = useState<boolean>(window.innerWidth >= 992);
	const [mediumBreakpoint, setMediumBreakpoint] = useState<boolean>(
		window.innerWidth >= 576
	);
	const [menuShown, setMenuShown] = useState<boolean>(false);
	const [showInfoModal, setShowInfoModal] = useState<boolean>(false);
	const [configData, setConfigData] = useState<ModalConfig | undefined>(
		undefined
	);
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		const handleResize = () => {
			setIsMobile(window.innerWidth < 768);
			setIsLarge(window.innerWidth >= 992);
			setMediumBreakpoint(window.innerWidth >= 576);

			setBreakpoint({
				sm: window.innerWidth >= 576,
				md: window.innerWidth >= 768,
				lg: window.innerWidth >= 992,
				xl: window.innerWidth >= 1200,
				xxl: window.innerWidth >= 1400,
			});
		};
		window.addEventListener("resize", handleResize);

		return () => {
			window.removeEventListener("resize", handleResize);
		};
	}, []);

	// declare type for all these vars in AppContextType!
	const contextValues = {
		menu,
		setMenu,
		isMobile,
		isLarge,
		mediumBreakpoint,
		breakpoint,
		menuShown,
		setMenuShown,
		showInfoModal,
		setShowInfoModal,
		configData,
		setConfigData,
		loading,
		setLoading,
	};

	return (
		<AppContext.Provider value={contextValues}>
			{children}
		</AppContext.Provider>
	);
};
