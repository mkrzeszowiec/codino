interface SubPageIntroProps {
	title: string;
	description: string;
}

const SubpageIntro: React.FC<SubPageIntroProps> = ({ title, description = '' }) => (
	<div className="subpageIntro">
		<h3 className="subpageIntro__title">{title}</h3>
		<p className="subpageIntro__description">{description}</p>
	</div>
);

export default SubpageIntro;
