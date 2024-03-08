import { useState, useRef } from 'react';
import styles from './Form.module.scss';
import { Icon } from '@iconify/react';
import { validateForm } from '../../utils/formValidation';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import emailjs from '@emailjs/browser';

export interface formState {
	name: string;
	email: string;
	phone: string;
	message: string;
}

const initialState: formState = {
	name: '',
	email: '',
	phone: '',
	message: '',
};

export const Form = () => {
	const [errors, setErrors] = useState<{ [key in keyof formState]?: string }>(
		{}
	);
	const [formState, setFormState] = useState<formState>(initialState);
	const form = useRef(null);

	const sendForm = (e: React.FormEvent) => {
		e.preventDefault();

		if (validateForm(formState, setErrors)) {
			emailjs
				.sendForm(
					import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
					import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
					form.current!,
					import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
				)
				.then(
					() => {
						console.log('Formularz został poprawnie wysłany.');
					},
					(error) => {
						console.log(error.text);
					}
				);

			toast.success('Dziękujemy za kontakt!', {
				position: 'bottom-right',
				theme: 'colored',
			});
			setFormState(initialState);
		} else {
			console.error('Błąd walidacji formularza!');
		}
	};

	const handleChange = (
		e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
	) => {
		setFormState((prev) => ({
			...prev,
			[e.target.name]: e.target.value,
		}));

		setErrors((prev) => ({ ...prev, [e.target.name]: null }));
	};

	return (
		<form className={styles.form} onSubmit={sendForm} ref={form}>
			<div className={styles.inputBox}>
				<div className={styles.inputContainer}>
					<input
						type='text'
						name='name'
						placeholder='Imię'
						value={formState.name}
						onChange={handleChange}
						required
					/>
					<p
						className={`${styles.error} ${
							errors.name && styles['error--active']
						}`}>
						{errors.name}
					</p>
				</div>

				<div className={styles.inputContainer}>
					<input
						type='email'
						name='email'
						placeholder='Adres email'
						value={formState.email}
						onChange={handleChange}
						required
					/>
					<p
						className={`${styles.error} ${
							errors.email && styles['error--active']
						}`}>
						{errors.email}
					</p>
				</div>

				<div className={styles.inputContainer}>
					<input
						type='phone'
						name='phone'
						placeholder='Numer telefonu (opcjonalnie)'
						value={formState.phone}
						onChange={handleChange}
					/>
					<p
						className={`${styles.error} ${
							errors.phone && styles['error--active']
						}`}>
						{errors.phone}
					</p>
				</div>

				<textarea
					name='message'
					placeholder='Napisz wiadomość...'
					value={formState.message}
					onChange={handleChange}
					required></textarea>

				<button type='submit'>
					<Icon icon='fa:send' />
				</button>
			</div>

			<div className={styles.gdpr}>
				<input type='checkbox' name='gdpr' required />
				<p>
					Akceptuję Regulamin i wyrażam zgodę na przetwarzanie moich danych
					osobowych.
				</p>
			</div>
		</form>
	);
};
