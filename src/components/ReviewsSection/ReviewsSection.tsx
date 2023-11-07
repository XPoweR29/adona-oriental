import styles from './ReviewsSection.module.scss';
import lanterns from '../../assets/img/lanterns_2.png';
import corner1 from '../../assets/img/corner_1.png';
import corner2 from '../../assets/img/corner_2.png';
import { AiFillStar } from 'react-icons/ai';
import { IoIosArrowBack } from 'react-icons/io';

export const ReviewsSection = () => {
    return (
			<section className={styles.reviews} id='reviews'>
				<img src={lanterns} className={styles.sectionImg} />
                
				<div className={styles.wrapper}>
					<h2 className={styles.reviews__title}>Co mówią nasi goście?</h2>
					<p className={styles.reviews__text}>
						Opinie naszych klientów są dla nas najważniejsze. Poznaj ich
						doświadczenia i smakuj razen z nami prawdzieiw orientalne smaki
					</p>

                    <div className={styles.reviews__box}>
                        <img src={corner1} className={styles.corner1} />
                        <img src={corner2} className={styles.corner2} />

                        <div className={styles.card}>
                            <p className={styles.card__user}>Paulina Sternat</p>
                            <div className={styles.card__rating}><AiFillStar/><AiFillStar/><AiFillStar/></div>
                            <p className={styles.card__text}>I liket it all very much. Świetne jedzenie i jeszcze lepsza obsługa. Polecam gorąco jeśli tylko będziecie w pobliżu!</p>
                        </div>

                        <div className={styles.card}>
                            <p className={styles.card__user}>Paulina Sternat</p>
                            <div className={styles.card__rating}><AiFillStar/><AiFillStar/><AiFillStar/></div>
                            <p className={styles.card__text}>I liket it all very much. Świetne jedzenie i jeszcze lepsza obsługa. Polecam gorąco jeśli tylko będziecie w pobliżu!</p>
                        </div>

                        <div className={styles.card}>
                            <p className={styles.card__user}>Paulina Sternat</p>
                            <div className={styles.card__rating}><AiFillStar/><AiFillStar/><AiFillStar/></div>
                            <p className={styles.card__text}>I liket it all very much. Świetne jedzenie i jeszcze lepsza obsługa. Polecam gorąco jeśli tylko będziecie w pobliżu!</p>
                        </div>
                    </div>

                        <div className={styles.reviews__buttons}>
                            <button className={styles.prev}><IoIosArrowBack/></button>
                            <button className={styles.next}><IoIosArrowBack/></button>
                        </div>
				</div>
			</section>
		);
}