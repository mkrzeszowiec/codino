import SectionTitle from 'components/SectionTitle/SectionTitle';

interface SubPageIntroProps {
	title: string;
	description: string;
}

const SubpageIntro: React.FC<SubPageIntroProps> = ({ title, description = '' }) => (
	<div className="subpageIntro">
		<SectionTitle className="subpageIntro__title">{title}</SectionTitle>
		<p className="subpageIntro__description">{description}</p>
	</div>
);

export default SubpageIntro;
