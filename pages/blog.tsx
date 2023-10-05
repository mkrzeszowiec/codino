import Main from 'components/layout/MainLayout';
import SubpageIntro from 'components/SubpageIntro/SubpageIntro';
import { getPageTitle } from 'utils/utils';
import { useTranslation } from 'next-i18next';
import ArticleThumbnail from 'components/ArticleThumbnail/ArticleThumbnail';
import fs from 'fs';
import matter from 'gray-matter';
import { DEFAULT_LOCALE, DEFAULT_TRANSLATE_NAMESPACE } from '../utils/constants';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

export async function getStaticProps({ locale }) {
	try {
		const files = fs.readdirSync('public/content/blog');

		const articles = files.map(fileName => {
			const slug = fileName.replace('.md', '');
			const readFile = fs.readFileSync(`public/content/blog/${fileName}`, 'utf-8');
			const { data: content } = matter(readFile);

			return {
				slug,
				content,
			};
		});

		return {
			props: { articles, ...(await serverSideTranslations(locale ?? DEFAULT_LOCALE, [DEFAULT_TRANSLATE_NAMESPACE])) },
		};
	} catch (error) {
		return {
			props: {
				...(await serverSideTranslations(locale ?? DEFAULT_LOCALE, [DEFAULT_TRANSLATE_NAMESPACE])),
			},
		};
	}
}

const BlogPage = ({ articles }) => {
	const { t } = useTranslation();

	return (
		<Main title={getPageTitle(t('common.subpages.blog'))}>
			<div className="container">
				<SubpageIntro title={t('components.blog.header')} description={''} className="articlesHeader" />

				<div className="articles">
					{articles.map((article, index) => (
						<ArticleThumbnail
							article={article.content}
							className={`articles__item articles__item--${index + 1}`}
							key={index}
						/>
					))}
				</div>
			</div>
		</Main>
	);
};

export default BlogPage;
