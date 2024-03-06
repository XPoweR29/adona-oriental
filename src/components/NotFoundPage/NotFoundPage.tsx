import styles from './NotFoundPage.module.scss';
import img404 from '../../assets/img/notFound.png';

export const NotFoundPage = () => {
    return (
        <div className={styles.notFound}>
            <div className={styles.wrapper}>
                <img src={img404} draggable="false"/>
                <p className={styles.text}>
                    Przykro nam, ale strona, której szukasz nie istnieje lub została przeniesiona...
                </p>
                <a href="/">Wróć na stronę głowną</a>
            </div>
        </div>
    );
}