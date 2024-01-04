import styles from './SocialsBox.module.scss';
import { AiFillFacebook, AiFillInstagram } from 'react-icons/ai';

interface Props {
    className?: string;
}

export const SocialsBox = ({className}: Props) => {
    return (
        <div className={`${styles.socialsBox} ${className}`}>
            <a href="#"><AiFillFacebook/></a>
            <a href="#"><AiFillInstagram/></a>
        </div>
    );
}