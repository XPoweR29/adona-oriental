import styles from './SocialsBox.module.scss';
import { AiFillFacebook, AiFillInstagram } from 'react-icons/ai';

interface Props {
    className?: string;
}

export const SocialsBox = ({className}: Props) => {
    return (
        <div className={`${styles.socialsBox} ${className}`}>
            <a href="http://www.facebook.pl" target='_blank'><AiFillFacebook/></a>
            <a href="http://www.instagram.com" target='_blank'><AiFillInstagram/></a>
        </div>
    );
}