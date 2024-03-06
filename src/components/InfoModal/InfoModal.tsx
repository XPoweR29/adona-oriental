import { useContext } from 'react';
import styles from './InfoModal.module.scss';
import { AppContext } from '../Context/AppContext';
import corner from '../../assets/img/corner_2.png';
import logo from '../../assets/img/logo.png';
import { IoMdClose } from 'react-icons/io';

interface Props {
	modalContent: string | undefined;
	clearModalTimer: () => void;
}

export const InfoModal = ({ modalContent, clearModalTimer }: Props) => {
	const { setShowInfoModal } = useContext(AppContext)!;

	return (
		<div className={styles.modal}>
			<div className={styles.container}>
				<div className={styles.wrapper}>
					<button
						className={styles.closeBtn}
						onClick={() => {
							setShowInfoModal(false);
							clearModalTimer();
						}}>
						<IoMdClose />
					</button>
					<p
						className={styles.content}
						dangerouslySetInnerHTML={{ __html: modalContent! }}></p>
				</div>

				<img src={corner} draggable='false' className={styles.corner1} />
				<img src={corner} draggable='false' className={styles.corner2} />
				<div className={styles.logoWrapper}>
					<img src={logo} draggable='false' className={styles.logo} />
				</div>
			</div>
		</div>
	);
};
