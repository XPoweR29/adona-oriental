import { useContext } from 'react';
import styles from '../ContactSection/ContactSection.module.scss';
import { FaLocationDot, FaPhone } from 'react-icons/fa6';
import { AppContext } from '../Context/AppContext';

interface Props {
    address: string;
    city: string;
    phone: string;
	localize: string;
}

export const ContactItem = ({address, city, phone, localize}: Props) => {
	const {breakpoint} = useContext(AppContext)!;

	return (
		<div className={styles.contact__item}>
			<a href={localize} target={breakpoint.md ? '_blank' : ''} rel='noopener noreferer'><FaLocationDot className={styles.icon}/><span>{city}</span>, {address}</a>
			<a href={`tel:${phone}`}><FaPhone className={styles.icon}/>{phone}</a>
		</div>
	);
};
