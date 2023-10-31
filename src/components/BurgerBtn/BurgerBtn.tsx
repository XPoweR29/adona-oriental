interface Props {
    className?: string;
	isMobileMenuShown: boolean;
	togglemenu: (val: boolean) => void;
}

export const BurgerBtn = ({className, isMobileMenuShown, togglemenu}: Props) => {
	const burgerHandler = () => {	
		const menuState = isMobileMenuShown;
		togglemenu(!menuState);
	};

	return (
		<button className={`hamburger hamburger--elastic ${className} ${isMobileMenuShown && 'is-active'}`} type='button' onClick={burgerHandler}>
			<span className='hamburger-box'>
				<span className='hamburger-inner'></span>
			</span>
		</button>
	);
};
