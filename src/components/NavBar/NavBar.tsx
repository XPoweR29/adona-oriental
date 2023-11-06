import styles from './NavBar.module.scss';

interface menuLink {
    name: string;
    href: string;
};

interface Props {
    className?: string;
}

export const menuLinks: menuLink[] = [
    {name: 'Start', href: '#'},
    {name: 'O nas', href: '#'},
    {name: 'Menu', href: '#'},
    {name: 'Kontakt', href: '#'}
];

export const NavBar = ({className}: Props) => {
    return (
        <div className={`${styles.navBar} ${className}`}>
            {menuLinks.map((link, index) => <a className={styles.navBar__link} href={link.href} key={index}>{link.name}</a>)}
        </div>
    );
};