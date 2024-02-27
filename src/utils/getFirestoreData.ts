import { db } from '../../firebase.config';
import { doc, getDoc } from 'firebase/firestore';

export interface ModalConfig {
	modalEnabled: boolean;
	modalContent: string;
};

export const getFirestoreData = async (odcumentID: string): Promise<ModalConfig | undefined> => {
	try {
		const docRef = doc(db, 'config', odcumentID);
		const docSnap = await getDoc(docRef);

		if (docSnap.exists()) {
			return docSnap.data() as ModalConfig;
		} else {
			console.log('Nie znaleziono konfiguracji...');
			return undefined;
		}
	} catch (error) {
		console.error('Błąd podczas pobierania danych:', error);
		throw error;
	}
};
