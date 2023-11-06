import styles from './HomeSection.module.scss';
import { AiOutlineClockCircle } from 'react-icons/ai';
import { FaLocationDot } from 'react-icons/fa6';
import { IoIosArrowDown } from 'react-icons/io';
import { SocialsBox } from '../SocialsBox/SocialsBox';
import { RefObject, useContext, useEffect, useRef } from 'react';
import { AppContext } from '../Context/AppContext';

export const HomeSection = () => {
	const { isMobile } = useContext(AppContext)!;
	const cta = useRef(null) as RefObject<HTMLAnchorElement>;

	useEffect(() => {
		const interval = setInterval(() => {
			cta.current?.classList.add(`${styles.animate}`);

			setTimeout(() => {
				cta.current?.classList.remove(`${styles.animate}`);
			}, 1000);
		}, 5000);

		return () => clearInterval(interval);
	}, []);

	return (
		<section className={styles.home} id='home'>
			<div className={styles.wrapper}>
				<h1 className={styles.home__title}>
					Z nami odkryjesz orientalne smaki <span>Azji</span>
				</h1>

				<div className={styles.home__info}>
					<div className={styles.home__hours}>
						<AiOutlineClockCircle />
						<span>10:00 - 22:00</span>
					</div>

					<div className={styles.home__locations}>
						<div className={styles.location}>
							<FaLocationDot />
							<span>Bielsko-Biała</span>
						</div>
						<div className={styles.location}>
							<FaLocationDot />
							<span>Żywiec</span>
						</div>
						<div className={styles.location}>
							<FaLocationDot />
							<span>Nowy Targ</span>
						</div>
						<div className={styles.location}>
							<FaLocationDot />
							<span>Kęty</span>
						</div>
					</div>
				</div>

				{isMobile ? <SocialsBox className={styles.home__socials}/> 
				: 
				<button className={styles.home__menuBtn}>Zobacz Menu</button>}

				<a ref={cta} href='#about' className={styles.home__cta}>
					<IoIosArrowDown />
				</a>
			</div>
		</section>
	);
};