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
    {name: 'O nas', href: '#about'},
    {name: 'Menu', href: '#'},
    {name: 'Kontakt', href: '#contact'}
];

export const NavBar = ({className}: Props) => {
    return (
        <div className={`${styles.navBar} ${className}`}>
            {menuLinks.map((link, index) => <a className={styles.navBar__link} href={link.href} key={index}>{link.name}</a>)}
        </div>
    );
};