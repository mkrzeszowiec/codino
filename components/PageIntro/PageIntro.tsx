import { useEffect, useState } from 'react';
import Button from 'components/Button/Button';
import HeroAnimation from 'components/HeroAnimation/HeroAnimation';
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
		<section className="pageIntro">
			{!getIsServerSide() && <HeroAnimation />}

			<div className="container">
				<div className="pageIntro__content">
					<h2 className="pageIntro__title">
						<span className="highlighted-text">Trusted by </span>
						customers, partners and the industry
					</h2>

					<h3 className="pageIntro__subtitle">
						Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto assumenda dignissimos dolorum pariatur
						quis soluta sunt temporibus ut, veniam? Accusantium dolorem exercitationem expedita explicabo fugiat.
					</h3>

					<Button label="Contact" href="/contact" type="border-white" />
				</div>
			</div>
		</section>
	);
};

export default PageIntro;
