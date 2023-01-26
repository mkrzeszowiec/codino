import Button from 'components/Button/Button';
import SectionTitle from 'components/SectionTitle/SectionTitle';
import Image from 'next/image';
import { useTranslation } from 'next-i18next';

const ServicesIntro = () => {
	const { t } = useTranslation();

	return (
		<section className="servicesIntro">
			<div className="servicesIntro__infoWrapper">
				<SectionTitle className="servicesIntro__title">Oferta</SectionTitle>
				<p className="servicesIntro__description">
					Nasza oferta skierowana jest do firm, które poszukują nowoczesnych i skutecznych rozwiązań programistycznych.
					Oferujemy szeroki wachlarz usług, od projektowania i tworzenia aplikacji mobilnych i webowych po wsparcie
					techniczne i utrzymanie systemów. Nasz zespół składa się z doświadczonych programistów, dzięki czemu możemy
					zapewnić najwyższą jakość i skuteczność naszych rozwiązań.
				</p>

				<Button label={t('common.contact')} type="border-black" href="/contact" />
			</div>

			<div className="servicesIntro__imageWrapper">
				<Image className="servicesIntro__image" src="/images/services-header.png" width={600} height={600} alt="" />
			</div>
		</section>
	);
};

export default ServicesIntro;
