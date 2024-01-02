import styles from './MenuItem.module.scss';

interface Props {
    name: string;
    engName: string;
    price: number;
}

export const MenuItem = ({name, engName, price}: Props) => {
	return (
		<li className={styles.item}>
			<div className={styles.name}>
				<p className={styles.polish}>{name}</p>
				<p className={styles.english}>{engName}</p>
			</div>
			<div className={styles.price}>{price.toFixed(2)} zł</div>
		</li>
	);
};
