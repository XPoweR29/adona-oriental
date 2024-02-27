import { useCallback, useEffect, useRef, useState } from 'react';
import { HomeSection } from './components/HomeSection/HomeSection';
import { Nav } from './components/Nav/Nav';
import { AppContext } from './components/Context/AppContext';
import { AboutSection } from './components/AboutSection/AboutSection';
import { WhySection } from './components/WhySection/WhySection';
import { ReviewsSection } from './components/ReviewsSection/ReviewsSection';
import { ContactSection } from './components/ContactSection/ContactSection';
import { Footer } from './components/Footer/Footer';
import { ToastContainer } from 'react-toastify';
import { Menu } from './components/Menu/Menu';
import { GallerySection } from './components/GallerySection/GallerySection';
import { InfoModal } from './components/InfoModal/InfoModal';
import { ModalConfig, getFirestoreData } from './utils/getFirestoreData';

export const App = () => {
	const modalTimerRef = useRef<NodeJS.Timeout | null>(null);
	const [breakpoint, setBreakpoint] = useState({
		sm: window.innerWidth >= 576,
		md: window.innerWidth >= 768,
		lg: window.innerWidth >= 992,
		xl: window.innerWidth >= 1200,
		xxl: window.innerWidth >= 1400,
	});

	const [isMobile, setIsMobile] = useState<boolean>(window.innerWidth < 768);
	const [isLarge, setIsLarge] = useState<boolean>(window.innerWidth >= 992);
	const [mediumBreakpoint, setMediumBreakpoint] = useState<boolean>(window.innerWidth >= 576);
	const [menuShown, setMenuShown] = useState<boolean>(false);
	const [showInfoModal, setShowInfoModal] = useState<boolean>(false);
	const [configData, setConfigData] = useState<ModalConfig | undefined>(undefined);

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
		window.addEventListener('resize', handleResize);

		return () => {
			window.removeEventListener('resize', handleResize);
		};
	}, []);

	useEffect(() => {
		(async () => {
			const configData = await getFirestoreData('1tu7lzQPMdDnGZCFv5IO');
			setConfigData(configData);
			if (configData?.modalEnabled) {
				modalTimerRef.current = setTimeout(() => {
					setShowInfoModal(true);
				}, 1000);
			}
		})();
	}, []);

	const clearModalTimer = useCallback(() => {
		if(modalTimerRef.current) clearTimeout(modalTimerRef.current);
	}, []);

	const contextValues = {
		isMobile,
		isLarge,
		mediumBreakpoint,
		breakpoint,
		setMenuShown,
		showInfoModal,
		setShowInfoModal,
	};

	return (
		<AppContext.Provider value={contextValues}>
			<Nav />
			<HomeSection />
			<AboutSection />
			<WhySection />
			<GallerySection />
			<ReviewsSection />
			<ContactSection />
			<Footer />
			{menuShown && <Menu />}
			{showInfoModal && <InfoModal modalContent={configData?.modalContent} clearModalTimer={clearModalTimer}/>}
			<ToastContainer />
		</AppContext.Provider>
	);
};
