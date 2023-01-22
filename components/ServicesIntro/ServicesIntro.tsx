import Button from 'components/Button/Button';
import SectionTitle from 'components/SectionTitle/SectionTitle';

const ServicesIntro = () => {
	return (
		<section className="servicesIntro">
			<div className="servicesIntro__infoWrapper">
				<SectionTitle className="servicesIntro__title">Services</SectionTitle>
				<p className="servicesIntro__description">
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. A dicta eaque, eos esse eveniet fuga, illum magnam
					minus natus repellat sequi, similique sint unde veniam.
				</p>

				<Button label="Contact" type="border-black" href="/contact" />
			</div>

			<div className="servicesIntro__imageWrapper">
				<img className="servicesIntro__image" src="/images/services-header.png" alt="" />
			</div>
		</section>
	);
};

export default ServicesIntro;
