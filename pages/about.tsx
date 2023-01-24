import Main from 'layouts/MainLayout';
import SubpageIntro from 'components/SubpageIntro/SubpageIntro';
import MeetCodino from 'components/MeetCodino/MeetCodino';
import { getPageTitle } from 'utils/utils';

const AboutPage = () => (
	<Main title={getPageTitle('About us')}>
		<div className="container">
			<SubpageIntro
				title="About us"
				description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus at atque, aut blanditiis commodi consequuntur cupiditate dolore dolorem, ducimus earum est et facilis ipsam maiores natus nostrum obcaecati odit pariatur rem repellendus, reprehenderit velit voluptate voluptates! Accusamus alias, blanditiis deserunt eaque eum expedita inventore necessitatibus obcaecati perspiciatis sequi, ut voluptate."
			/>

			<MeetCodino />
		</div>
	</Main>
);

export default AboutPage;
