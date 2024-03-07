import { useContext } from 'react';
import styles from './InfoModal.module.scss';
import { AppContext } from '../Context/AppContext';
import corner from '../../assets/img/corner_2.png';
import roof from '../../assets/img/roof.png';
import cookie from '../../assets/img/cookie.png';

interface Props {
	modalContent: string | undefined;
	clearModalTimer: () => void;
}

export const InfoModal = ({ modalContent, clearModalTimer }: Props) => {
	const { setShowInfoModal } = useContext(AppContext)!;

	return (
		<div className={styles.modal}>
			<div className={styles.container}>
			<div className={styles.backgroundDiv}></div>
				<div className={styles.wrapper}>
					<button
						className={styles.closeBtn}
						onClick={() => {
							setShowInfoModal(false);
							clearModalTimer();
						}}>
						Zamknij
					</button>
					<p
						className={styles.content}
						dangerouslySetInnerHTML={{ __html: modalContent! }}></p>
				</div>

				<img src={corner} draggable='false' className={styles.corner1} />
				<img src={corner} draggable='false' className={styles.corner2} />
				<img src={cookie} draggable='false' className={styles.cookie} />
				<img src={roof} draggable='false' className={styles.roof} />
			</div>
		</div>
	);
};
