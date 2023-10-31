import styles from './HomeSection.module.scss';

export const HomeSection = () => {
    return (
        <section className={styles.home} id="home">
            <div className={styles.wrapper}>
                <h1 className={styles.home__title}>Z nami odkryjesz orientalne smaki Azji</h1>
            </div>
        </section>
    );
}