import styles from './ToggleSwitch.module.scss';

interface Props {
    id: string;
	currnetState: boolean | undefined;
	switchState: (val: boolean)=>void;
	modified: (val: boolean)=>void;
};

export const ToggleSwitch = ({id, currnetState, switchState, modified}: Props) => {
	const handleSwitch = () => {
		switchState(!currnetState);
		modified(true);
	}

	return (
		<div className={styles['checkbox-wrapper-8']}>
			<input type='checkbox' id={id} onChange={handleSwitch} checked={currnetState} className={`${styles.tgl} ${styles['tgl-skewed']}`} />
			<label
				htmlFor={id}
				data-tg-on='ON'
				data-tg-off='OFF'
				className={styles['tgl-btn']}></label>
		</div>
	);
};
