import { useEffect, useState } from 'react';
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


export const App = () => {
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
	const [menuShown, setMenuShown] = useState(false);

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

	const contextValues = {
		isMobile,
		isLarge,
		mediumBreakpoint,
		breakpoint,
		setMenuShown
	};



	return (
		<AppContext.Provider value={contextValues}>
			<Nav />
			<HomeSection />
			<AboutSection />
			<WhySection />
			<ReviewsSection />
			<ContactSection />
			<Footer />
			{menuShown && <Menu/>}
			<ToastContainer />
		</AppContext.Provider>
	);
};
