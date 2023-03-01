import { useState, useRef } from 'react';
import useOnClickOutside from 'use-onclickoutside';
import { useScrollPosition } from '@n8tb1t/use-scroll-position';
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
	const arrayPaths = ['/'];
	const { t } = useTranslation();
	const router = useRouter();

	const shouldHaveFixedHeader = !arrayPaths.includes(router.pathname) || isErrorPage;
	const [onTop, setOnTop] = useState(!shouldHaveFixedHeader);
	const [menuOpen, setMenuOpen] = useState(false);
	const navRef = useRef(null);

	useScrollPosition(
		({ currPos }) => {
			if (shouldHaveFixedHeader) {
				return;
			}
			setOnTop(currPos.y === 0);
		},
		[router.pathname]
	);

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

				<div className="site-header__actions">
					<Button className="site-header__hire-button" label={t('common.getHired')} href={'/career'} />
					<LanguageButton className="site-header__languageButton" />

					<button onClick={onClickHamburgerButton} className="site-header__btn-menu" aria-label="Open the menu">
						<i className="btn-hamburger" aria-hidden="true">
							<span />
						</i>
					</button>
				</div>
			</div>
		</header>
	);
};

export default Header;
