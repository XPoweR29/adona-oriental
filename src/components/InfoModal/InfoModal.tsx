import { useContext, useEffect, } from 'react';
import styles from './InfoModal.module.scss';
import { AppContext } from '../Context/AppContext';

interface Props {
    modalContent: string | undefined;
    clearModalTimer: () => void;
}

export const InfoModal = ({modalContent, clearModalTimer}: Props) => {
    const {setShowInfoModal} = useContext(AppContext)!;

    //FIXME: pozwól scrollować to bedzie sie dało odłonić przycisk!
	useEffect(() => {
		document.body.style.overflow = 'hidden';

		return () => {
			document.body.style.overflow = 'visible';
		};
	});

	return (
		<div className={styles.modal}>
			<div className={styles.container}>
				<div className={styles.wrapper}>
					<p className={styles.content}>{modalContent}</p>
					<button className={styles.closeBtn} onClick={() => {
                        setShowInfoModal(false);
                        clearModalTimer();
                    }}>Zamknij</button>
				</div>
			</div>
		</div>
	);
};

//FIXME: Odpowiednie zabezpieczenie danych konfiguracyjnych firebase
//TODO: Stworzenie zabezpieczonej ścieżki prowadzącej do konfiguracji modala.
//IMPROVE: Własny hook pobiearnia danych z firebase może okazać się jednak pomocny ale nie niezbędny.
