import NavItem from 'components/Header/NavItem';
import Logo from 'components/icons/Logo';

const Footer = () => {
	return (
		<footer className="siteFooter">
			<div className="container">
				<div className="siteFooter__top">
					<div className="siteFooter__description">
						<Logo />

						<p>
							<span className="highlighted-text">Lorem ipsum dolor sit amet</span>, consectetur adipisicing elit. In,
							recusandae!
						</p>
					</div>

					<div className="siteFooter__links">
						<NavItem />
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
