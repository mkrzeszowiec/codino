import { GetStaticPaths, GetStaticProps } from 'next';
import Image from 'next/image';
import { ParsedUrlQuery } from 'querystring';
import { Article } from 'types/common';
import MainLayout from 'components/layout/MainLayout';
import { getPageTitle } from 'utils/utils';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { DEFAULT_LOCALE, DEFAULT_TRANSLATE_NAMESPACE } from 'utils/constants';
import Breadcrumbs from 'components/Breadcrumbs/Breadcrumbs';
import ArticleDetails from 'components/ArticleDetails/ArticleDetails';
import ArticleContent from 'components/ArticleContent/ArticleContent';
import { getPostData } from 'utils/article-utils';

export const getStaticPaths: GetStaticPaths = async () => {
	return {
		paths: [],
		fallback: true,
	};
};

interface Params extends ParsedUrlQuery {
	slug: string;
}

type Props = {
	article: Article;
};

export const getStaticProps: GetStaticProps = async context => {
	const { slug } = context.params as Params;

	if (!slug) {
		return {
			notFound: true,
		};
	}

	const article = getPostData(slug);

	return {
		props: {
			article,
			...(await serverSideTranslations(context.locale ?? DEFAULT_LOCALE, [DEFAULT_TRANSLATE_NAMESPACE])),
		},
	};
};

const ArticlePage = ({ article }: Props) => {
	if (!article) return null;
	const { title, mainPhotoUrl, content } = article;

	return (
		<MainLayout title={getPageTitle(article.title)}>
			<article className="article">
				<div className="container">
					<Breadcrumbs className="article__breadcrumbs" currentPage={title} type={'blog'} />

					<h1 className="article__title">{title}</h1>

					<ArticleDetails article={article} />

					<div className="article__coverWrapper">
						<Image className="article__cover" src={mainPhotoUrl} width={1500} height={1500} alt="" />
					</div>

					<div className="article__content">
						<ArticleContent article={article} />
					</div>
				</div>
			</article>
		</MainLayout>
	);
};

export default ArticlePage;
