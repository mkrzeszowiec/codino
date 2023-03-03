import { Trans } from 'next-i18next';
import Logo from 'components/icons/Logo';
import NavItem from 'components/Header/NavItem';
import Image from "next/image";

const Footer = () => {
	const currentYear = new Date().getFullYear();

	return (
		<footer className="siteFooter">
			<Image src={`/images/footer-background.svg`} className="siteFooter__image" alt="" width={4000} height={500} />

			<div className="container">
				<div className="siteFooter__top">
					<div className="siteFooter__description">
						<Logo />

						<p className="siteFooter__subtitle">
							<Trans i18nKey={'components.pageIntro.header'} />
						</p>
					</div>

					<div className="siteFooter__links">
						<NavItem />
					</div>
				</div>

				<p className="siteFooter__copyright">© {currentYear} Codino. All rights reserved.</p>
			</div>
		</footer>
	);
};

export default Footer;
