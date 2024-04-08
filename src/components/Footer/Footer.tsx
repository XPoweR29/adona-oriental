import styles from './Footer.module.scss';
import logo from '../../assets/img/logo.png';
import { FaFacebookSquare } from 'react-icons/fa';
import dev_logo from '../../assets/img/dev_logo.svg';

export const Footer = () => {
	return (
		<footer className={styles.footer} id='footer'>
			<div className={styles.wrapper}>
				<div className={styles.major}>
					<div className={styles.footer__logo}>
						<a href='#'>
							<img src={logo} />
						</a>
						<p>
							&copy; <span>{new Date().getFullYear()}</span>
						</p>
					</div>

					<div className={styles.footer__social}>
						<a
							className={styles.link}
							href='https://www.facebook.com/adona.bb/?locale=pl_PL'
							target='_blank'>
							<FaFacebookSquare className={styles.icon} />
							adona/bielsko
						</a>

						<a
							className={styles.link}
							href='https://www.facebook.com/profile.php?id=61555388113531&locale=pl_PL'
							target='_blank'>
							<FaFacebookSquare className={styles.icon} />
							adona/kęty
						</a>

						<a
							className={styles.link}
							href='https://www.facebook.com/p/Restauracja-Adona-%C5%BBywiec-61550512836846/?paipv=0&eav=AfZ8rmCImDgGWPPiXpu1Ohf6U-wqQQ6eWwZkEHG27BfJdg8PKaUR0_Ah7MjpqSP-7ec&_rdr'
							target='_blank'>
							<FaFacebookSquare className={styles.icon} />
							adona/żywiec
						</a>
					</div>
				</div>

				<div className={styles.footer__signature}>
					<p>Designed & Developed by</p>
					<a href='https://webcraft-studio.pl/' target='_blank' rel='noopener noreferrer'>
						<img src={dev_logo} />
					</a>
				</div>
			</div>
		</footer>
	);
};
