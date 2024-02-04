import styles from './SocialsBox.module.scss';
import { AiFillFacebook, AiFillInstagram } from 'react-icons/ai';

interface Props {
    className?: string;
}

export const SocialsBox = ({className}: Props) => {
    return (
        <div className={`${styles.socialsBox} ${className}`}>
            <a href="http://www.facebook.pl"><AiFillFacebook/></a>
            <a href="http://www.instagram.com"><AiFillInstagram/></a>
        </div>
    );
}