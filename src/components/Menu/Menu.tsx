import styles from './Menu.module.scss';
import logo from '../../assets/img/logo.png';
import mosaic from '../../assets/img/menu_mosaic.png';
import fans from '../../assets/img/fans.png';
import frame from '../../assets/img/menu_frame.png';
import { IoMdClose } from 'react-icons/io';
import menu from '../../assets/menu/menu.json';
import { MenuItem } from '../MenuItem/MenuItem';
import { useContext, useEffect } from 'react';
import { AppContext } from '../Context/AppContext';
export const Menu = () => {
	const { setMenuShown, breakpoint } = useContext(AppContext)!;

	useEffect(() => {
		if(breakpoint.md) document.body.style.overflow = 'hidden';
		return () => {
			document.body.style.overflow = 'visible';
		};
	});

	return (
		<>
			<div className={styles.menu}>
				<img draggable='false' className={styles.mosaicImg} src={mosaic} />
				<img draggable='false' className={styles.frameImg} src={frame} />
				<img draggable='false' className={styles.fansImg} src={fans} />

				<div className={styles.headingBar}>
					<img className={styles.headingBar__logo} src={logo} />
					<h2 className={styles.headingBar__title}>Menu</h2>
					<button
						className={styles.headingBar__closeBtn}
						onClick={() => setMenuShown(false)}>
						<IoMdClose />
					</button>
				</div>

				<div className={styles.content}>
					{menu.map((menu, i) => (
						<div className={styles.group} key={i}>
							<h3 className={styles.group__title}>{menu.groupName}</h3>
							<ul className={styles.group__list}>
								{menu.items.map(({ name, engName, price }, i) => (
									<MenuItem
										name={name}
										engName={engName}
										price={price}
										key={i}
									/>
								))}
							</ul>
						</div>
					))}
				</div>
			</div>
			<div className={styles.menuBg}></div>
		</>
	);
};
