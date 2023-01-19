import HeroAnimation from '../hero-animation/HeroAnimation';
import Button from 'components/button/Button';
import { useEffect, useState } from 'react';
import { getIsServerSide } from 'utils/utils';

const PageIntro = () => {
	const [showing, setShowing] = useState(false);

	useEffect(() => {
		setShowing(true);
	}, []);

	if (!showing) {
		return null;
	}

	return (
		<section className="page-intro">
			{!getIsServerSide() && <HeroAnimation />}

			<div className="container">
				<div className="page-intro__content">
					<h2 className="page-intro__title">
						<span className="highlighted-text">Trusted by </span>
						customers, partners and the industry
					</h2>

					<h3 className="page-intro__subtitle">
						Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto assumenda dignissimos dolorum pariatur
						quis soluta sunt temporibus ut, veniam? Accusantium dolorem exercitationem expedita explicabo fugiat.
					</h3>

					<Button label="Contact" href="/contact" type="border" />
				</div>
			</div>
		</section>
	);
};

export default PageIntro;
