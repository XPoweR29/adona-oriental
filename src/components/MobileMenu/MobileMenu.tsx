import styles from './MobileMenu.module.scss';
import { menuLinks } from '../NavBar/NavBar';
import { useEffect } from 'react';

interface Props {
	setMenuShown: (val: boolean) => void;
}

export const MobileMenu = ({setMenuShown}: Props) => {
	useEffect(() => {
		document.body.style.overflow = 'hidden';

		return () => {
			document.body.style.overflow = 'visible';
		}
	});

	return (
		<div className={styles.mobileMenu}>
			{menuLinks.map((link, index) => (
				<a 
					className={styles.mobileMenu__link} 
					href={link.href} 
					key={index}
					style={{animationDelay: `${index*0.1}s`}}
					onClick={()=>setMenuShown(false)}	
					>
					{link.name}
				</a>
			))}
		</div>
	);
};
