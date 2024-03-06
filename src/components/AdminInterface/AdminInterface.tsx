import styles from './AdminInterface.module.scss';
import 'react-quill/dist/quill.snow.css';
import { User, onAuthStateChanged, signOut } from 'firebase/auth';
import ReactQuill from 'react-quill';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { auth } from '../../../firebase.config';
import { ModalConfig, getFirestoreData } from '../../utils/getFirestoreData';
import { ToggleSwitch } from '../ToggleSwitch/ToggleSwitch';
import { Icon } from '@iconify/react/dist/iconify.js';
import { updateFirestoreData } from '../../utils/updateFirebaseData';
import { toast, ToastContainer } from 'react-toastify';
import { Loader } from '../Loader/Loader';

export const AdminInterface = () => {
	const navigate = useNavigate();
	const [authUser, setAuthUser] = useState<User | null>(null);
	const [modalContent, setModalContent] = useState<string | undefined>(undefined);
	const [showInfoModal, setShowInfoModal] = useState<boolean | undefined>(undefined);
	const [isDataModified, setIsDataModified] = useState(false);

	useEffect(() => {
		const listen = onAuthStateChanged(auth, (user) => {
			if (user) {
				setAuthUser(user);
			} else {
				setAuthUser(null);
				navigate('/');
			}
		});

		return () => {
			listen();
			signOut(auth);
		};
	}, [navigate]);

	useEffect(() => {
		(async () => {
			const configData: ModalConfig | undefined = await getFirestoreData(
				'1tu7lzQPMdDnGZCFv5IO'
			);
			setModalContent(configData?.modalContent || '');
			setShowInfoModal(configData?.modalEnabled);
			console.log('Pobieram dane...');
		})();
	}, []);

	const saveChanges = async () => {
		try {
			await updateFirestoreData('1tu7lzQPMdDnGZCFv5IO', { modalContent, modalEnabled: showInfoModal });
			setIsDataModified(false);
			toast.success('Zmiany zostały zapisane', {
				position: 'bottom-right',
				theme: 'colored',
			});
		} catch (err) {
			toast.error('Wystąpił błąd, spróbój później');
		}
	};

	const handleContentChange = () => {
		setModalContent(modalContent);
		setIsDataModified(true);
	};

	const handleLogOut = () => {
		const logoutConfirm = !isDataModified || window.confirm('Masz niepzaisane zmiany. Czy napewno chcesz się wylogować?');
		if(logoutConfirm){
			signOut(auth);
		}
	};

	const modules = {
		toolbar: [
			[{ header: [1, 2, 3, false] }],
			[{ color: [] }],
			['bold', 'italic', 'underline', 'strike', 'blockquote'],
			[
				{ list: 'ordered' },
				{ list: 'bullet' },
				{ indent: '-1' },
				{ indent: '+1' },
			],
			['link'],
			['clean'],
		],
	};

	return (
		<>
			{authUser && modalContent ? (
				<div className={styles.wrapper}>
					<button className={styles.logOutBtn} onClick={handleLogOut}>
						<Icon icon='basil:logout-solid' />
						Wyloguj
					</button>
					<div className={styles.option}>
						<p className={styles.txt}>Okno powiadomienia:</p>
						<ToggleSwitch
							id='switch1'
							currnetState={showInfoModal}
							switchState={setShowInfoModal}
							modified={setIsDataModified}
						/>
					</div>
					<ReactQuill
						className={styles.quill}
						value={modalContent}
						onChange={handleContentChange}
						modules={modules}
						placeholder='Wpisz treść powiadomienia...'
					/>
					<button className={styles.saveBtn} onClick={saveChanges}>Zapisz</button>

					<ToastContainer />
				</div>) 
				:
				<Loader />}
		</>
	);
};
