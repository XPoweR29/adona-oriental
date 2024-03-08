import { formState } from '../components/Form/Form';

export const validateForm = (
	inputs: formState,
	setErrors: (val: Partial<formState>) => void
) => {
	const newErrors: { [key in keyof formState]?: string } = {};
	const regName = /^[a-zA-ZąćęłńóśźżĄĆĘŁŃÓŚŹŻ\s']+$/;
	const regNum = /^[0-9]+$/;


	if (inputs.name.trim().length < 3) {
		newErrors.name = 'Imię musi zawierać conajmniej 3 znaki.';
	}

	if (!inputs.name.trim()) {
		newErrors.name = 'Musisz podać swoje imię.';
	}

	if (!regName.test(inputs.name)) {
		newErrors.name = 'Imię nie może zawierać cyfr i znaków specjalnych. ';
	}


	if (!inputs.email.trim()) {
		newErrors.email = 'Podaj swój adres mailowy.';
	}
	if (!/\S+@\S+\.\S+/.test(inputs.email)) {
		newErrors.email = 'Podany adres email jest nieprawidłowy.';
	}

	if (inputs.phone && inputs.phone.length < 9) {
		newErrors.phone = 'Numer telefonu musi posiadać conajmniej 9 cyfr.';
	}
	if (inputs.phone && !regNum.test(inputs.phone)) {
		newErrors.phone = 'Numer telefonu może składać się tylko z cyfr.';
	}


	if (!inputs.message.trim()) {
		newErrors.message = 'Pole "Wiadomość" jest wymagane.';
	}

	setErrors(newErrors);
	return Object.keys(newErrors).length === 0;
};
