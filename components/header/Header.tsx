import { useState, useEffect, useRef } from 'react';
import useOnClickOutside from 'use-onclickoutside';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Button from "../button/Button";
import NavItem from "./NavItem";
import Logo from "../icons/Logo";

type HeaderType = {
    isErrorPage?: Boolean;
}

const Header = ({isErrorPage}: HeaderType) => {
    const router = useRouter();
    const arrayPaths = ['/'];

    const [onTop, setOnTop] = useState((!(!arrayPaths.includes(router.pathname) || isErrorPage)));
    const [menuOpen, setMenuOpen] = useState(false);
    const navRef = useRef(null);

    const headerClass = () => {
        if (window.pageYOffset === 0) {
            setOnTop(true);
        } else {
            setOnTop(false);
        }
    }

    useEffect(() => {
        if (!arrayPaths.includes(router.pathname) || isErrorPage) {
            return;
        }

        headerClass();
        window.onscroll = function () {
            headerClass();
        };
    }, []);

    const closeMenu = () => {
        setMenuOpen(false);
    }

    // on click outside
    useOnClickOutside(navRef, closeMenu);

    return (
        <header className={`site-header ${!onTop ? 'site-header--fixed' : ''}`}>
            <div className="container">
                <Link href="/">
                    <h1 className="site-logo">
                        <Logo/>
                    </h1>
                </Link>
                <nav ref={navRef} className={`site-nav ${menuOpen ? 'site-nav--open' : ''}`}>
                    <NavItem/>
                </nav>

                <Button className="site-header__hire-button" label='Get hired' href={'/dsa'}/>

                <div className="site-header__actions">
                    <button
                        onClick={() => setMenuOpen(true)}
                        className="site-header__btn-menu">
                        <i className="btn-hamburger"><span></span></i>
                    </button>
                </div>
            </div>
        </header>
    )
};


export default Header;
