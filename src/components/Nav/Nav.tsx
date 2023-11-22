import styles from './Nav.module.scss';
import { useContext, useEffect, useState } from 'react';
import logo from '../../assets/img/logo.png';
import { AppContext } from '../Context/AppContext';
import { BurgerBtn } from '../BurgerBtn/BurgerBtn';
import { NavBar } from '../NavBar/NavBar';
import { SocialsBox } from '../SocialsBox/SocialsBox';
import { MobileMenu } from '../MobileMenu/MobileMenu';

export const Nav = () => {
	const { isMobile } = useContext(AppContext)!;
	const [mobileMenuShown, setMobileMenuSHown] = useState(false);
	const [siteScrolled, setSiteScrolled] = useState<boolean>(window.scrollY >=40);

	useEffect(() => {
		const handleScroll = () => {
			setSiteScrolled(window.scrollY >=40);
		};
		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	});

	return (
		<nav className={styles.nav}>
			{<div className={`${styles.nav__bg} ${siteScrolled&& styles['nav__bg--active']}`}></div>}
			<div className={styles.wrapper}>
				<a href='#' className={styles.nav__logo}>
					<img src={logo} />
				</a>
				{isMobile ? (
					<BurgerBtn
						className={styles.nav__burgerBtn}
						isMobileMenuShown={mobileMenuShown}
						togglemenu={setMobileMenuSHown}
					/>
				) : (
					[
						<NavBar className={styles.nav__navBar} key={1} />,
						<SocialsBox className={styles.nav__socials} key={2} />,
					]
				)}
			</div>

			{mobileMenuShown && <MobileMenu setMenuShown={setMobileMenuSHown} />}
		</nav>
	);
};