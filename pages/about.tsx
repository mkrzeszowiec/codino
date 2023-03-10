import Main from 'components/layout/MainLayout';
import SubpageIntro from 'components/SubpageIntro/SubpageIntro';
import HowWeWork from 'components/aboutUs/HowWeWork';
import TeamHeader from 'components/aboutUs/TeamHeader';
import TeamStats from 'components/aboutUs/TeamStats';
import { getPageTitle } from 'utils/utils';
import { GetStaticProps } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { DEFAULT_LOCALE, DEFAULT_TRANSLATE_NAMESPACE } from 'utils/constants';
import { useTranslation } from 'next-i18next';

const AboutPage = () => {
	const { t } = useTranslation();

	return (
		<Main title={getPageTitle(t('common.subpages.about'))}>
			<div className="container">
				<SubpageIntro title={t('components.about.header')} description={t('components.about.description')} />
			</div>

			<TeamStats />

			<div className="container">
				<HowWeWork />
				<TeamHeader />
			</div>
		</Main>
	);
};

export const getStaticProps: GetStaticProps = async ({ locale }) => ({
	props: {
		...(await serverSideTranslations(locale ?? DEFAULT_LOCALE, [DEFAULT_TRANSLATE_NAMESPACE]))
	}
});

export default AboutPage;
