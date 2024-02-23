import styles from './Footer.module.scss';
import logo from '../../assets/img/logo.png';
import { FaEnvelope, FaFacebookSquare } from 'react-icons/fa';
import { RiInstagramFill } from 'react-icons/ri';

export const Footer = () => {
    return (
			<footer className={styles.footer} id='footer'>
				<div className={styles.wrapper}>

					<div className={styles.footer__logo}>
						<a href='#'><img src={logo} /></a>
						<p>
							&copy; <span>{new Date().getFullYear()}</span>
						</p>
					</div>

					<div className={styles.footer__social}>
						<a className={styles.link} href='mailto:example@gmail.com'>
							<FaEnvelope className={styles.icon} />
							kontakt@adona.pl
						</a>

						<a className={styles.link} href='https://www.facebook.com/adona.bb/?locale=pl_PL' target='_blank'>
							<FaFacebookSquare className={styles.icon} />
							facebook/adona
						</a>

						<a className={styles.link} href='http://instagram.com' target='_blank'>
							<RiInstagramFill className={styles.icon} />
							@adona_oriental
						</a>
					</div>
				</div>
			</footer>
		);
}