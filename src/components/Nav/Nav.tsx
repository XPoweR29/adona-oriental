import styles from './Nav.module.scss';
import { useContext, useState } from 'react';
import logo from '../../assets/img/logo.png';
import { AppContext } from '../Context/AppContext';
import { BurgerBtn } from '../BurgerBtn/BurgerBtn';
import { NavBar } from '../NavBar/NavBar';
import { SocialsBox } from '../SocialsBox/SocialsBox';
import { MobileMenu } from '../MobileMenu/MobileMenu';

export const Nav = () => {
	const { isMobile } = useContext(AppContext)!;
	const [mobileMenuShown, setMobileMenuSHown] = useState(false);

	return (
		<nav className={styles.nav}>
			<div className={styles.wrapper}>
				<a href='' className={styles.nav__logo} hrefLang='#'>
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
						<NavBar className={styles.nav__navBar} key={1}/>,
						<SocialsBox className={styles.nav__socials} key={2}/>,
					]
				)}
			</div>

			{mobileMenuShown && <MobileMenu setMenuShown={setMobileMenuSHown}/>}
		</nav>
	);
};

// TODO: Zaimplemetować zmianę tła po rozpoczęciu scrolowania.
// IMPROVE: Po zaczęciu scrollowania logo może się nieco zmniejszć żeby nawigacja nie zabierała tyle miejsca.
// TODO: Zrobić mobile menu - całkiem podobne do tego z poprzedniego projektu.
