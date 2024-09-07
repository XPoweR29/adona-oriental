import styles from './Menu.module.scss';
import logo from '../../assets/img/logo.png';
import mosaic from '../../assets/img/menu_mosaic.png';
import fans from '../../assets/img/fans.png';
import frame from '../../assets/img/menu_frame.png';
import { IoMdClose } from 'react-icons/io';
// import menu from '../../assets/menu/menu.json';
import { MenuItem } from '../MenuItem/MenuItem';
import { useContext, useEffect } from 'react';
import { AppContext } from '../Context/AppContext';
import { useMenuManager } from '../../hooks/useMenuManager';
import { Spinner } from '../Spinner/Spinner';
export const Menu = () => {
	const { setMenuShown, breakpoint, menu, loading } = useContext(AppContext)!;
	const {refreshMenuList} = useMenuManager();

	useEffect(() => {
		if(breakpoint.md) document.body.style.overflow = 'hidden';
		return () => {
			document.body.style.overflow = 'visible';
		};
	}, [breakpoint.md]);

	useEffect(() => {
		(async () => {
			await refreshMenuList();
		})();
	}, []);

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

				{loading ? <Spinner/>:

				(<div className={styles.content}>
					{menu.map((group) => (
						<div className={styles.group} key={group.id}>
							<h3 className={styles.group__title}>{group.name}</h3>
							<ul className={styles.group__list}>
								{group.dishes.map(({ name, engName, price, id }) => (
									<MenuItem
										name={name}
										engName={engName}
										price={Number(price)}
										key={id}
									/>
								))}
							</ul>
						</div>
					))}
				</div>)}
			</div>
			<div className={styles.menuBg}></div>
		</>
	);
};
