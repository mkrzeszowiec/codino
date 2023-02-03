import { useState, useEffect, useRef } from 'react';
import useOnClickOutside from 'use-onclickoutside';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Button from 'components/Button/Button';
import NavItem from 'components/Header/NavItem';
import Logo from 'components/icons/Logo';
import { useTranslation } from 'next-i18next';
import LanguageButton from 'components/LanguageButton/LanguageButton';

interface HeaderProps {
	isErrorPage?: boolean;
}

const Header = ({ isErrorPage }: HeaderProps) => {
	const { t } = useTranslation();

	const router = useRouter();
	const arrayPaths = ['/'];

	const [onTop, setOnTop] = useState(!(!arrayPaths.includes(router.pathname) || isErrorPage));
	const [menuOpen, setMenuOpen] = useState(false);
	const navRef = useRef(null);

	const headerClass = () => {
		setOnTop(window.pageYOffset === 0);
	};

	useEffect(() => {
		if (!arrayPaths.includes(router.pathname) || isErrorPage) {
			return;
		}

		headerClass();
		window.onscroll = () => headerClass();
	}, []);

	const closeMenu = () => {
		setMenuOpen(false);
	};

	const onClickHamburgerButton = () => {
		setMenuOpen(true);
	};

	useOnClickOutside(navRef, closeMenu);

	return (
		<header className={`site-header ${!onTop ? 'site-header--fixed' : ''}`}>
			<div className="site-header__wrapper">
				<Link href="/" aria-label="Go to the homepage">
					<h1 className="site-logo">
						<Logo />
					</h1>
				</Link>

				<nav ref={navRef} className={`site-nav ${menuOpen ? 'site-nav--open' : ''}`}>
					<NavItem />
				</nav>

				<Button className="site-header__hire-button" label={t('common.getHired')} href={'/career'} />

				<LanguageButton className="site-header__languageButton" />

				<div className="site-header__actions">
					<button onClick={onClickHamburgerButton} className="site-header__btn-menu" aria-label="Open the menu">
						<i className="btn-hamburger" aria-hidden="true">
							<span></span>
						</i>
					</button>
				</div>
			</div>
		</header>
	);
};

export default Header;
