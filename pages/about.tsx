import Main from 'layouts/MainLayout';
import SubpageIntro from 'components/SubpageIntro/SubpageIntro';
import MeetCodino from 'components/MeetCodino/MeetCodino';
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
				<SubpageIntro
					title="About us"
					description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus at atque, aut blanditiis commodi consequuntur cupiditate dolore dolorem, ducimus earum est et facilis ipsam maiores natus nostrum obcaecati odit pariatur rem repellendus, reprehenderit velit voluptate voluptates! Accusamus alias, blanditiis deserunt eaque eum expedita inventore necessitatibus obcaecati perspiciatis sequi, ut voluptate."
				/>

				<MeetCodino />
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
