import Image from 'next/image';
import SectionTitle from 'components/SectionTitle/SectionTitle';

const TeamHeader = () => (
	<section className="teamHeader">
		<div className="teamHeader__texts">
			<SectionTitle className="teamHeader__title">Zespół</SectionTitle>

			<p className="teamHeader__description">
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vitae porttitor enim. Fusce ultrices varius
				lectus, id aliquet libero posuere a. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin placerat
				lectus, id aliquet libero posuere a. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin placerat
				sodales tellus vel rhoncus.
			</p>
		</div>

		<div className="teamHeader__imageWrapper">
			<Image className="teamHeader__image" src={'/images/team-header.png'} width={400} height={450} alt="" />
		</div>
	</section>
);

export default TeamHeader;
