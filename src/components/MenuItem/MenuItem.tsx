import styles from './MenuItem.module.scss';

interface Props {
    name: string;
    engName: string;
    price: number;
	className?: string;
}

export const MenuItem = ({name, engName, price, className}: Props) => {
	return (
		<div className={`${styles.item} ${className}`}>
			<div className={styles.name}>
				<p className={styles.polish}>{name}</p>
				<p className={styles.english}>{engName}</p>
			</div>
			<div className={styles.price}>{price.toFixed(2)} zł</div>
		</div>
	);
};
