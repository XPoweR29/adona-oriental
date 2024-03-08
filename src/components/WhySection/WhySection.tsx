import styles from './WhySection.module.scss';
import { Icon } from '@iconify/react';
import frame from '../../assets/img/frame.png';
import { AnimeFeature } from '../AnimeFeature/AnimeFeature';

export const WhySection = () => {
	return (
		<section className={styles.why} id='why'>
			<div className={styles.wrapper}>
				<h2 className={styles.why__title}>Dlaczego my?</h2>
				<p className={styles.why__text}>
					Z nami doświadczysz smaków, które zdobyły uznanie naszych klientów
				</p>

				<div className={styles.why__features}>

				<AnimeFeature>
					<div className={styles.feature}>
						<Icon icon='fluent-emoji-high-contrast:leafy-green' className={styles.feature__icon}/>
						<h3 className={styles.feature__name}>Świeże składniki</h3>
						<p className={styles.feature__text}>
							Każde dania tworzymy z najświeższych składników, aby dostarczyć Ci
							autentyczny smak Orientu.
						</p>
					</div>
				</AnimeFeature>

				<AnimeFeature delay={0.2}>
					<div className={styles.feature}>
						<Icon icon='teenyicons:discount-solid' className={styles.feature__icon}/>
						<h3 className={styles.feature__name}>Najlepsze oferty</h3>
						<p className={styles.feature__text}>Nasz priorytet to dostarczanie klientom najatrakcyjniejszych ofert w kuchni azjatyckiej.</p>
					</div>
				</AnimeFeature>    


				<AnimeFeature delay={0.4}>
					<div className={styles.feature}>
						<Icon icon='carbon:delivery' className={styles.feature__icon}/>
						<h3 className={styles.feature__name}>Szybka dostawa</h3>
						<p className={styles.feature__text}>
							Zamówienia obsługujemy błyskawicznie, aby dostarczyć Ci smaki Azji bez zbędnego czekania. Szybka dostawa to nasza specjalność.
						</p>
					</div>
				</AnimeFeature> 
				</div>
			</div>

            <div className={styles.why__hero}>
                <p>Twój smakowy kompas Azji</p>
                <img src={frame} className={styles.frame}/>
            </div>
		</section>
	);
};
