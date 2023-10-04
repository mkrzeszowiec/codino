import { GetStaticPaths, GetStaticProps } from 'next';
import Image from 'next/image';
import { ParsedUrlQuery } from 'querystring';
import { Article } from 'types/common';
import MainLayout from 'components/layout/MainLayout';
import { getPageTitle } from 'utils/utils';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { DEFAULT_LOCALE, DEFAULT_TRANSLATE_NAMESPACE } from 'utils/constants';
import Breadcrumbs from '../../components/Breadcrumbs/Breadcrumbs';
import { ARTICLES } from '../../assets/mock';

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

	const article = ARTICLES.find(article => article.slug.toLowerCase() === slug.toLowerCase());

	return {
		props: {
			article,
			...(await serverSideTranslations(context.locale ?? DEFAULT_LOCALE, [DEFAULT_TRANSLATE_NAMESPACE])),
		},
	};
};

const ArticlePage = ({ article }: Props) => {
	if (!article) return null;

	return (
		<MainLayout title={getPageTitle(article.title)}>
			<article className="article">
				<div className="container">
					<Breadcrumbs className="article__breadcrumbs" currentPage={article.title} type={'blog'} />

					<div className="article__coverWrapper">
						<Image className="article__cover" src={article.mainPhotoUrl} width={1500} height={1500} alt="" />
					</div>

					<h1 className="article__title">{article.title}</h1>
					<div className="article__content">{article.content}</div>
				</div>
			</article>
		</MainLayout>
	);
};

export default ArticlePage;
