import { useEffect, useState } from 'react';
import { HomeSection } from './components/HomeSection/HomeSection';
import { Nav } from './components/Nav/Nav';
import { AppContext } from './components/Context/AppContext';

export const App = () => {
  const [isMobile, setIsMobile] = useState<boolean>(window.innerWidth < 992);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 992);
    };
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    }
  }, []);

  const contextValues = {
    isMobile, setIsMobile
  }

	return (
		<AppContext.Provider value={contextValues}>
			<Nav />
			<HomeSection />
		</AppContext.Provider>
	);
};
