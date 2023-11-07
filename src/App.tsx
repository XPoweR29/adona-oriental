import { useEffect, useState } from 'react';
import { HomeSection } from './components/HomeSection/HomeSection';
import { Nav } from './components/Nav/Nav';
import { AppContext } from './components/Context/AppContext';
import { AboutSection } from './components/AboutSection/AboutSection';
import { WhySection } from './components/WhySection/WhySection';
import { ReviewsSection } from './components/ReviewsSection/ReviewsSection';

export const App = () => {
  const [isMobile, setIsMobile] = useState<boolean>(window.innerWidth < 768);
  const [mediumBreakpoint, setMediumBreakpoint] = useState<boolean>(window.innerWidth >= 576);


  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
      setMediumBreakpoint(window.innerWidth >= 576);
    };
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    }
  }, []);

  const contextValues = {
    isMobile,
    mediumBreakpoint
  }

	return (
		<AppContext.Provider value={contextValues}>
			<Nav />
			<HomeSection />
      <AboutSection />
      <WhySection/>
      <ReviewsSection/>
		</AppContext.Provider>
	);
};
