import Main from 'layouts/MainLayout';
import TeamHeader from 'components/TeamHeader/TeamHeader';
import { getPageTitle } from 'utils/utils';

const TeamPage = () => (
	<Main title={getPageTitle('Title')}>
		<div className="container">
			<TeamHeader />
		</div>
	</Main>
);

export default TeamPage;
