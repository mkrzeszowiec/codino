import NavItem from 'components/Header/NavItem';
import Logo from 'components/icons/Logo';

const Footer = () => {
	return (
		<footer className="site-footer">
			<div className="container">
				<div className="site-footer__top">
					<div className="site-footer__description">
						<Logo />

						<p>
							<span className="highlighted-text">Lorem ipsum dolor sit amet</span>, consectetur adipisicing elit. In,
							recusandae!
						</p>

						<ul className="site-footer__social-networks">
							<li>
								<a href="#">
									<i className="icon-facebook"></i>
								</a>
							</li>
							<li>
								<a href="#">
									<i className="icon-twitter"></i>
								</a>
							</li>
							<li>
								<a href="#">
									<i className="icon-linkedin"></i>
								</a>
							</li>
							<li>
								<a href="#">
									<i className="icon-instagram"></i>
								</a>
							</li>
							<li>
								<a href="#">
									<i className="icon-youtube-play"></i>
								</a>
							</li>
						</ul>
					</div>

					<div className="site-footer__links">
						<NavItem />
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
