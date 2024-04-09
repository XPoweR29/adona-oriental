import { useContext } from 'react';
import { ContactItem } from '../ContactItem/ContactItem';
import styles from './ContactSection.module.scss';
import lanterns from '../../assets/img/lanterns_1.png';
import mosaic from '../../assets/img/mosaic 2.png';
import { Form } from '../Form/Form';
import { AppContext } from '../Context/AppContext';
import { AiOutlineClockCircle } from 'react-icons/ai';
import { Map } from '../Map/Map';

export const ContactSection = () => {
	const { breakpoint } = useContext(AppContext)!;

	return (
		<section className={styles.contact} id='contact'>
			{breakpoint.xxl ? null : (
				<>
					<img src={lanterns} draggable='false' className={styles.sectionImg_lanterns} />
					<img src={mosaic} draggable='false' className={styles.sectionImg_mosaic} />
				</>
			)}

			<div className={styles.wrapper}>
				{breakpoint.xxl && (
					<>
						<img src={lanterns} draggable='false' className={styles.sectionImg_lanterns} />
						<img src={mosaic} draggable='false' className={styles.sectionImg_mosaic} />
					</>
				)}

				<h2 className={styles.contact__title}>Jak możemy cię obsłużyć?</h2>
				<p className={styles.contact__text}>
					Zamów wyjątkowe dania kuchni azjatyckiej lub skontaktuj się z nami,
					aby zadać pytanie. Zachęcamy również do odwiedzenia naszych
					restauracji, aby poczuć smaki Azji na własnym podniebieniu.
				</p>

				<div className={styles.contentBox}>
					<div className={styles.contact__box}>
						{breakpoint.lg && (
							<div className={styles.hours}>
								<AiOutlineClockCircle className={styles.icon} />
								<p>10:00 - 22:00</p>
							</div>
						)}

						<ContactItem
							city='Bielsko-Biała'
							address='Plac Wojska Polskiego 12'
							phone='+48 33 816 62 88'
							localize='https://www.google.com/maps/place/Adona/@49.8237865,19.0488761,17z/data=!4m14!1m7!3m6!1s0x47169f61bb649f5d:0x7064dbbcb5fcf689!2sAdona!8m2!3d49.8237831!4d19.051451!16s%2Fg%2F1tc_prj1!3m5!1s0x47169f61bb649f5d:0x7064dbbcb5fcf689!8m2!3d49.8237831!4d19.051451!16s%2Fg%2F1tc_prj1?entry=ttu'
						/>
						<ContactItem
							city='Żywiec'
							address='ul. Powstańców Śląskich'
							phone='+48 33 862 01 31'
							localize='https://www.google.com/maps/place/Adona+Restauracja+Orientalna/@49.6872233,19.2087646,21z/data=!4m6!3m5!1s0x471428829039cbdb:0x7c8dc42597ca38a0!8m2!3d49.6872222!4d19.2088889!16s%2Fg%2F11b88m3yfx?entry=ttu'
						/>
						<ContactItem
							city='Nowy Targ'
							address='ul. Szaflarska 37'
							phone='+48 184 475 845'
							localize='https://www.google.com/maps/place/Adona/@49.4780983,20.0298998,17z/data=!4m14!1m7!3m6!1s0x4715e4e903eec46f:0x6ae36990cf98863!2sAdona!8m2!3d49.4780948!4d20.0324747!16s%2Fg%2F11c440nvv1!3m5!1s0x4715e4e903eec46f:0x6ae36990cf98863!8m2!3d49.4780948!4d20.0324747!16s%2Fg%2F11c440nvv1?entry=ttu'
						/>
						<ContactItem
							city='Kęty'
							address='Rynek 12'
							phone='+48 33 828 78 33'
							localize='https://www.google.com/maps/place/Restauracja+Adona/@49.8835941,19.2219559,19.25z/data=!4m14!1m7!3m6!1s0x47169b340fda0143:0x761f1edf89bfae96!2sRestauracja+Adona!8m2!3d49.8834733!4d19.2223616!16s%2Fg%2F11sry285_k!3m5!1s0x47169b340fda0143:0x761f1edf89bfae96!8m2!3d49.8834733!4d19.2223616!16s%2Fg%2F11sry285_k?entry=ttu'
						/>

						{breakpoint.lg && <Map className={styles.map} />}
					</div>

					<Form />
				</div>
			</div>
		</section>
	);
};
