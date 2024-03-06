import { sendPasswordResetEmail } from 'firebase/auth';
import styles from './ResetPrompt.module.scss';
import { useState } from 'react';
import { toast } from 'react-toastify';
import { auth } from '../../../firebase.config';

interface Props {
	resetPrompt: (show: boolean) => void;
}

export const ResetPrompt = ({resetPrompt}: Props) => {
	const [email, setEmail] = useState('');

	const pwdReset = async (e: React.FormEvent) => {
		e.preventDefault();
		try {
			if (!email) {
				toast.error('Podaj swój adres email');
			} else {
				await sendPasswordResetEmail(auth, email);
				toast.info('Link do resetowania hasła został wysłany na podany adres email', {
                    autoClose: false,
                });
                resetPrompt(false);
			}
		} catch (err) {
			toast.error('Wsytąpił błąd', {
				theme: 'colored',
				position: 'bottom-right',
			});
		}
	};

	return (
		<form className={styles.form} onSubmit={pwdReset}>
			<p className={styles.txt}>
				Podaj adres email na który zostanie wystałny link do resetowania hasła:
			</p>
			<input
				type='email'
				placeholder='email'
				value={email}
				onChange={(e) => setEmail(e.target.value)}
				required
			/>
            <div className={styles.btns}>
                <button className={styles.form__confirmBtn} type='submit'>Wyślij link</button>
                <button className={styles.form__cancelBtn} onClick={()=>resetPrompt(false)} type='button'>Wróć</button>
            </div>
		</form>
	);
};
