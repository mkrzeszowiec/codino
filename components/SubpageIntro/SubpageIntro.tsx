import SectionTitle from 'components/SectionTitle/SectionTitle';

interface SubPageIntroProps {
	title: string;
	description?: string;
	className?: string;
}

const SubpageIntro: React.FC<SubPageIntroProps> = ({ title, description = '', className = '' }) => (
	<div className={`subpageIntro ${className}`}>
		<SectionTitle className="subpageIntro__title">{title}</SectionTitle>
		{description && <p className="subpageIntro__description">{description}</p>}
	</div>
);

export default SubpageIntro;
