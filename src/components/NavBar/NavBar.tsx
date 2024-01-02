import { useContext } from 'react';
import styles from './NavBar.module.scss';
import { AppContext } from '../Context/AppContext';

interface menuLink {
	name: string;
	href?: string;
	onClick?: (val: any) => void;
}

interface Props {
	className?: string;
}
export const menuLinks: menuLink[] = [
	{ name: 'Start', href: '#' },
	{ name: 'O nas', href: '#about' },
	{ name: 'Menu'},
	{ name: 'Kontakt', href: '#contact' },
];

export const NavBar = ({ className }: Props) => {
    const { setMenuShown } = useContext(AppContext)!;

	return (
		<div className={`${styles.navBar} ${className}`}>
			{menuLinks.map((link, index) => (
				<a className={styles.navBar__link} href={link.href} onClick={()=> link.name == 'Menu' ? setMenuShown(true) : undefined} key={index}>
					{link.name}
				</a>
			))}
		</div>
	);
};
