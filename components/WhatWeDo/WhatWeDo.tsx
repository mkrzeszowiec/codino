import Link from 'next/link';
import Position from './Position';

const WhatWeDo = () => {
	return (
		<section className="whatWeDo" data-aos="fade-down">
			<div className="whatWeDo__info">
				<h3 className="whatWeDo__title">
					Czym zajmujemy się w <span className="highlighted-text">Codino?</span>
				</h3>
				<p className="whatWeDo__description">
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur nobis optio perferendis quis.
					Blanditiis, fuga.
				</p>

				<div className="whatWeDo__highlight">
					Rozwijaj biznesy online przy pomocy najnowszych technologii{' '}
					<Link className="highlighted-text" href="/contact">
						razem z nami
					</Link>
					.
				</div>
			</div>

			<div className="whatWeDo__positions">
				<Position title="Backend developer" description="Lorem ipsum dolor sit amet." />
				<Position title="DevOps engineer" description="Lorem ipsum dolor sit amet." />
				<Position title="Frontend developer" description="Lorem ipsum dolor sit amet." />
			</div>
		</section>
	);
};

export default WhatWeDo;
