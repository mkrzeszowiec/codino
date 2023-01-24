import Main from 'layouts/MainLayout';
import Map from 'components/Map/Map';
import Contact from 'components/Contact/Contact';
import { getPageTitle } from 'utils/utils';

const ContactPage = () => (
	<Main containerClassName="contactPage" title={getPageTitle('Contact')}>
		<div className="container">
			<Contact />
		</div>

		<Map />
	</Main>
);

export default ContactPage;
