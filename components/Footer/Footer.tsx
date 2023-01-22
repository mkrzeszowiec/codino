import NavItem from 'components/Header/NavItem';
import Logo from 'components/icons/Logo';

const Footer = () => {
	const currentYear = new Date().getFullYear();

	return (
		<footer className="siteFooter">
			<div className="container">
				<div className="siteFooter__top">
					<div className="siteFooter__description">
						<Logo />

						<p className="siteFooter__subtitle">
							<span className="highlighted-text">Lorem ipsum dolor sit amet</span>, consectetur adipisicing elit. In,
							recusandae!
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
