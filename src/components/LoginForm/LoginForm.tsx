import styles from './LoginForm.module.scss';

interface Props {
	email: string;
	setEmail: React.Dispatch<React.SetStateAction<string>>;
	password: string;
	setPassword: React.Dispatch<React.SetStateAction<string>>;
    resetPrompt: (show: boolean)=> void;
    loginSubmit: (e: React.FormEvent)=> Promise<void>
}

export const LoginForm = ({email, setEmail, password, setPassword, resetPrompt,loginSubmit}: Props) => {

	return (
		<form className={styles.form} onSubmit={loginSubmit}>
			<input
				type='email'
				placeholder='email'
				value={email}
				onChange={(e) => setEmail(e.target.value)}
				required
			/>
			<input
				type='password'
				placeholder='hasło'
				value={password}
				onChange={(e) => setPassword(e.target.value)}
				required
			/>
			<button
				className={styles.form__resetBtn}
                type='button'
				onClick={() => resetPrompt(true)}>
				Resetuj hasło
			</button>
			<button className={styles.form__button} type='submit'>
				Zaloguj
			</button>
		</form>
	);
};
