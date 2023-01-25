import Main from 'layouts/MainLayout';
import TechnologiesCarousel from 'components/TechnologiesCarousel/TechnologiesCarousel';
import CareerHeader from 'components/CareerHeader/CareerHeader';
import AvailableJobs from 'components/AvailableJobs/AvailableJobs';
import { getPageTitle } from 'utils/utils';
import { GetStaticProps } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { NotFoundJobBanner } from 'components/NotFoundJobBanner/NotFoundJobBanner';
import { DEFAULT_LOCALE, DEFAULT_TRANSLATE_NAMESPACE } from 'utils/constants';
import { useTranslation } from 'next-i18next';

const CareerPage = () => {
	const { t } = useTranslation();

	return (
		<Main title={getPageTitle(t('common.subpages.career'))}>
			<div className="container">
				<CareerHeader />
				<AvailableJobs />
				<NotFoundJobBanner />
			</div>

			<TechnologiesCarousel />
		</Main>
	);
};

export const getStaticProps: GetStaticProps = async ({ locale }) => ({
	props: {
		...(await serverSideTranslations(locale ?? DEFAULT_LOCALE, [DEFAULT_TRANSLATE_NAMESPACE]))
	}
});
export default CareerPage;
