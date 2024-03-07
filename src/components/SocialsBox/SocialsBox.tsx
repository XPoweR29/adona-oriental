import styles from './SocialsBox.module.scss';
import { AiFillFacebook } from 'react-icons/ai';

interface Props {
	className?: string;
}

export const SocialsBox = ({className}: Props) => {
    return (
			<div className={`${styles.socialsBox} ${className}`}>
				<a
					href='https://www.facebook.com/adona.bb/?locale=pl_PL'
					target='_blank'>
					<AiFillFacebook />
				</a>
			</div>
		);
}
