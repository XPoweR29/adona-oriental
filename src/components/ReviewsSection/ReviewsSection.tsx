import styles from './ReviewsSection.module.scss';
import lanterns from '../../assets/img/lanterns_2.png';
import { ReviewSwiper } from '../ReviewSwiper/ReviewSwiper';

export const ReviewsSection = () => {
	return (
		<section className={styles.reviews} id='reviews'>
			<div className={styles.wrapper}>
				<img src={lanterns} className={styles.sectionImg} />
				<h2 className={styles.reviews__title}>Co mówią nasi goście?</h2>
				<p className={styles.reviews__text}>
					Opinie naszych klientów są dla nas najważniejsze. Poznaj ich
					doświadczenia i smakuj razem z nami prawdziwie orientalne smaki!
				</p>

				<ReviewSwiper />
			</div>
		</section>
	);
};
