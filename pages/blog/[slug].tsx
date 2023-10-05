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
	const { title, author, mainPhotoUrl, content } = article;

	return (
		<MainLayout title={getPageTitle(article.title)}>
			<article className="article">
				<div className="container">
					<Breadcrumbs className="article__breadcrumbs" currentPage={title} type={'blog'} />

					<h1 className="article__title">{title}</h1>

					<div className="article__bottomInfoWrapper">
						{author.imageUrl && (
							<div className="article__authorImageWrapper">
								<Image className="article__authorImage" src={author.imageUrl} alt="" width={36} height={36} />
							</div>
						)}

						<div className="article__otherInfo">
							<p className="article__authorName">{author.name}</p>

							<div className="article__timeWrapper">
								<p className="article__date">Jun 14</p>
								<span className="article__divider" />
								<p className="article__readTime">8 min read</p>
							</div>
						</div>
					</div>

					<div className="article__coverWrapper">
						<Image className="article__cover" src={mainPhotoUrl} width={1500} height={1500} alt="" />
					</div>

					<div className="article__content">{content}</div>
				</div>
			</article>
		</MainLayout>
	);
};

export default ArticlePage;
