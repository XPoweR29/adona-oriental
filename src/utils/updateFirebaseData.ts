import {doc, updateDoc} from 'firebase/firestore';
import { db } from '../../firebase.config';
import { ModalConfig } from './getFirestoreData';

export const updateFirestoreData = async (documentID: string, newData: Partial<ModalConfig>) => {
    try {
        const docRef = doc(db, 'config', documentID);
        await updateDoc(docRef, newData);
        console.log(`Dane zostały zaktulaizowane`);
    } catch(err) {
        console.error(`Błąd aktualizacji danych: ${err}`);
        throw new Error(`Błąd aktualizacji danych`);
    };
};