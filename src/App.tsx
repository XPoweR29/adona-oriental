import { useCallback, useEffect, useRef, useContext } from "react";
import { HomeSection } from "./components/HomeSection/HomeSection";
import { Nav } from "./components/Nav/Nav";
import { AppContext } from "./components/Context/AppContext";
import { AboutSection } from "./components/AboutSection/AboutSection";
import { WhySection } from "./components/WhySection/WhySection";
import { ReviewsSection } from "./components/ReviewsSection/ReviewsSection";
import { ContactSection } from "./components/ContactSection/ContactSection";
import { Footer } from "./components/Footer/Footer";
import { ToastContainer } from "react-toastify";
import { Menu } from "./components/Menu/Menu";
import { GallerySection } from "./components/GallerySection/GallerySection";
import { InfoModal } from "./components/InfoModal/InfoModal";
import { getFirestoreData } from "./utils/getFirestoreData";

export const App = () => {
	const {
		menuShown,
		configData,
		setConfigData,
		setShowInfoModal,
		showInfoModal,
	} = useContext(AppContext)!;
	const modalTimerRef = useRef<NodeJS.Timeout | null>(null);

	useEffect(() => {
		(async () => {
			const configData = await getFirestoreData("1tu7lzQPMdDnGZCFv5IO");
			setConfigData(configData);
			if (configData?.modalEnabled) {
				modalTimerRef.current = setTimeout(() => {
					setShowInfoModal(true);
				}, 1000);
			}
		})();
	}, []);

	const clearModalTimer = useCallback(() => {
		if (modalTimerRef.current) clearTimeout(modalTimerRef.current);
	}, []);

	return (
		<>
				<Nav />
				<HomeSection />
				<AboutSection />
				<WhySection />
				<GallerySection />
				<ReviewsSection />
				<ContactSection />
				<Footer />
				{menuShown && <Menu />}
				{showInfoModal && (
					<InfoModal
						modalContent={configData?.modalContent}
						clearModalTimer={clearModalTimer}
					/>
				)}
				<ToastContainer />
		</>
	);
};
