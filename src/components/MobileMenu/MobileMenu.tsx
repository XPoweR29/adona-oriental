import styles from './MobileMenu.module.scss';
import { menuLinks } from '../NavBar/NavBar';
import { useEffect, useContext } from 'react';
import { AppContext } from '../Context/AppContext';

interface Props {
	mobileMenuShown: (val: boolean) => void;
}

export const MobileMenu = ({mobileMenuShown}: Props) => {
	const {setMenuShown} = useContext(AppContext)!;

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
					onClick={()=>{
						if(link.name == 'Menu') {
							setMenuShown(true);
						}
						mobileMenuShown(false);
					}}	
					>
					{link.name}
				</a>
			))}
		</div>
	);
};
