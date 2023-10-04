import Main from 'components/layout/MainLayout';
import SubpageIntro from 'components/SubpageIntro/SubpageIntro';
import { getPageTitle } from 'utils/utils';
import { GetStaticProps } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { DEFAULT_LOCALE, DEFAULT_TRANSLATE_NAMESPACE } from 'utils/constants';
import { useTranslation } from 'next-i18next';
import ArticleThumbnail from 'components/ArticleThumbnail/ArticleThumbnail';
import { ARTICLES } from "../assets/mock";

const BlogPage = () => {
	const { t } = useTranslation();

	return (
		<Main title={getPageTitle(t('common.subpages.blog'))}>
			<div className="container">
				<SubpageIntro title={t('components.blog.header')} description={''} className="articlesHeader" />

				<div className="articles">
					{ARTICLES.map((article, index) => (
						<ArticleThumbnail article={article} className={`articles__item articles__item--${index + 1}`} key={index} />
					))}
				</div>
			</div>
		</Main>
	);
};

export const getStaticProps: GetStaticProps = async ({ locale }) => ({
	props: {
		...(await serverSideTranslations(locale ?? DEFAULT_LOCALE, [DEFAULT_TRANSLATE_NAMESPACE])),
	},
});

export default BlogPage;
