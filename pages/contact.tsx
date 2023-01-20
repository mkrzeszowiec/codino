import Main from 'layouts/Main';
import SubpageIntro from 'components/SubpageIntro/SubpageIntro';
import Map from 'components/Map/Map';

const ContactPage = () => {
	return (
		<Main title="Contact - Codino">
			<div className="container">
				<SubpageIntro
					title="Contact"
					description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. A cupiditate delectus dolor, fugiat id"
				/>
			</div>

			<Map />
		</Main>
	);
};

export default ContactPage;
