import styles from './LoginPage.module.scss';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../../firebase.config';
import { ToastContainer, toast } from 'react-toastify';
import { LoginForm } from '../LoginForm/LoginForm';
import { ResetPrompt } from '../ResetPrompt/ResetPrompt';

const LoginPage = () => {
	const navigate = useNavigate();
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [resetPrompt, setResetPrompt] = useState(false);

	const logIn = async (e: React.FormEvent): Promise<void> => {
		e.preventDefault();
		try {
			const userCredential = await signInWithEmailAndPassword(
				auth,
				email,
				password
			);
			console.log(userCredential);
			navigate('/interface');
		} catch (err: any) {
			console.error(`Błąd logowania: ${err.message}`);
			let message;
			
			switch (err.code) {
				case 'auth/network-request-failed':
					message = 'Brak połączenia z siecią';
					break;

				case 'auth/too-many-requests':
					message = 'Przekroczono limit prób. Prosimy spróbować później';
					break;
					
					default:
						message = 'Nieprawidłowe dane logowania';
						break;
					}
					
			toast.error(message, {position: 'bottom-right', theme: 'colored'});
		}
	};

	return (
		<section className={styles.loginPage}>
			<div className={styles.wrapper}>
				{
					( resetPrompt?
						<ResetPrompt resetPrompt={setResetPrompt}/>
						:
						<LoginForm
							email={email}
							setEmail={setEmail}
							password={password}
							setPassword={setPassword}
							loginSubmit={logIn}
							resetPrompt={setResetPrompt}
						/> 
					)
				}
			</div>
			<ToastContainer />
		</section>
	);
};

export default LoginPage
