import Main from 'layouts/Main';
import SubpageIntro from 'components/SubpageIntro/SubpageIntro';

const AboutPage = () => (
	<Main title="About us - Codino">
		<div className="container">
			<SubpageIntro
				title="About us"
				description="Lorem ipsum"
			/>
		</div>
	</Main>
);

export default AboutPage;
