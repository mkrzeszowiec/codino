import Image from 'next/image';
import SectionTitle from 'components/SectionTitle/SectionTitle';

const CareerHeader = () => (
	<section className="careerHeader">
		<div className="careerHeader__texts">
			<SectionTitle className="careerHeader__title">Kariera w Codino</SectionTitle>

			<p className="careerHeader__description">
				Krótki ogólny opis firmy Codino. consectetur adipiscing elit. Nam scelerisque mauris ut risus efficitur, sed
				molestie purus rutrum. Suspendisse varius lorem ac dictum facilisis. Nunc vel ex et ante sollicitudin pharetra.
				Nunc quis interdum nisi. Vestibulum bibendum, tellus sed ultrices sodales,
			</p>
		</div>

		<div className="careerHeader__imageWrapper">
			<Image className="careerHeader__image" src={'/images/career-header.png'} width={400} height={500} alt="" />
		</div>
	</section>
);

export default CareerHeader;
