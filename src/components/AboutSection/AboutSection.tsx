import styles from './AboutSection.module.scss';
import bgSectionImg_one from '../../assets/img/asian_food.png';
import bgSectionImg_two from '../../assets/img/seasonings.png';
import aboutImg from '../../assets/img/interior-img.jpg';
import bgSectionMosaic from '../../assets/img/mosaic 2.png';
import { useContext } from 'react';
import { AppContext } from '../Context/AppContext';

export const AboutSection = () => {
	const { isMobile, mediumBreakpoint } = useContext(AppContext)!;

	return (
		<section className={styles.about} id='about'>
			<div className={styles.wrapper}>
				<img src={bgSectionMosaic} draggable='false' className={styles.bgMosaic_one} />
				<img src={bgSectionMosaic} draggable='false' className={styles.bgMosaic_two} />
				{mediumBreakpoint && (<img src={bgSectionImg_one} draggable='false' className={styles.sectionImg_one} />)}
				
				<div className={styles.about__box}>
					{!isMobile && <img src={aboutImg} draggable='false' className={styles.about__img} />}

					<div className={styles.about__content}>
						<h2 className={styles.title}>O nas</h2>
						<p className={styles.text}>
							Kochamy kuchnię azjatycką i z pasją przygotowujemy potrawy w stylu
							japońskim, tajskim, chińskim i wietnamskim. Nasze dania są
							wyjątkowe, ponieważ korzystamy tylko z najświeższych składników,
							bez dodatków konserwantów.
						</p>
						<p className={styles.text}>
							Wszystkie potrawy tworzymy z miłością do smaków Orientu, a w ich
							przygotowaniu wspierają nas doświadczeni mistrzowie kuchni z
							Dalekiego Wschodu.
						</p>
						<p className={styles.text}>
							Gotowi jesteśmy podzielić się tym smakiem z Tobą, abyś mógł
							przeżyć prawdziwą podróż kulinarną.
						</p>

						{!mediumBreakpoint && (
							<img src={bgSectionImg_one} draggable='false' className={styles.sectionImg_one} />
						)}
					</div>

					{mediumBreakpoint && (
						<img src={bgSectionImg_two} draggable='false' className={styles.sectionImg_two} />
					)}
				</div>
			</div>
		</section>
	);
};
