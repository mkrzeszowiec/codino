import Image from 'next/image';
import SectionTitle from 'components/SectionTitle/SectionTitle';

const CareerHeader = () => (
	<section className="careerHeader">
		<div className="careerHeader__texts">
			<SectionTitle className="careerHeader__title">Kariera w Codino</SectionTitle>

			<p className="careerHeader__description">
				W Codino szukamy ambitnych programistów, którzy chcą rozwijać swoje umiejętności i karierę w
				dynamicznie rozwijającej się branży IT. Oferujemy możliwość pracy przy interesujących projektach dla różnych
				branż oraz przy wykorzystaniu najnowszych technologii.
			</p>
		</div>

		<div className="careerHeader__imageWrapper">
			<Image className="careerHeader__image" src={'/images/career-header.png'} width={400} height={500} alt="" />
		</div>
	</section>
);

export default CareerHeader;
