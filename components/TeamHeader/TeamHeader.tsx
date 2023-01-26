import Image from 'next/image';
import SectionTitle from 'components/SectionTitle/SectionTitle';

const TeamHeader = () => (
	<section className="teamHeader">
		<div className="teamHeader__texts">
			<SectionTitle className="teamHeader__title">Zespół</SectionTitle>

			<p className="teamHeader__description">
				Nasi programiści to prawdziwi pasjonaci swojego zawodu, którzy łączą wiedzę, doświadczenie i kreatywność, aby
				tworzyć innowacyjne rozwiązania dla naszych klientów. Składamy się z doświadczonych specjalistów
				specjalizujących się w różnych technologiach, którzy zawsze służą pomocą i dostosowują się do indywidualnych
				potrzeb każdego projektu
			</p>
		</div>

		<div className="teamHeader__imageWrapper">
			<Image className="teamHeader__image" src={'/images/team.png'} width={400} height={450} alt="" />
		</div>
	</section>
);

export default TeamHeader;
