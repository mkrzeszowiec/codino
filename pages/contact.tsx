import Main from 'layouts/MainLayout';
import Map from 'components/Map/Map';
import Contact from 'components/Contact/Contact';

const ContactPage = () => {
	return (
		<Main containerClassName="contactPage" title="Contact - Codino">
			<div className="container">
				<Contact />
			</div>

			<Map />
		</Main>
	);
};

export default ContactPage;
