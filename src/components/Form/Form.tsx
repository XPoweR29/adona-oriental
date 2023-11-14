import styles from './Form.module.scss';
import { Icon } from '@iconify/react';

const sendForm = (e: React.FormEvent) => {
	e.preventDefault();
	console.log('Wysyłam formularz.');
};

export const Form = () => {
	return (
		<form className={styles.form} onSubmit={sendForm}>
			<div className={styles.inputBox}>
				<input type='text' name='name' placeholder='Imię' required />
				<input type='email' name='email' placeholder='Adres email' required />
				<input type='phone' name='phone' placeholder='Numer telefonu' required />
				<textarea name='message' placeholder='Napisz wiadomość...' required></textarea>

				<button type='submit'><Icon icon='fa:send' /></button>
			</div>

			<div className={styles.gdpr}>
				<input type='checkbox' name='gdpr' required/>
				<p>
					Akceptuję Regulamin i wyrażam zgodę na przetwarzanie moich danych
					osobowych.
				</p>
			</div>
		</form>
	);
};
