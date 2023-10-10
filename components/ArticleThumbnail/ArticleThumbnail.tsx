import { Article } from 'types/common';
import ArticleDetails from 'components/ArticleDetails/ArticleDetails';

interface ArticleThumbnailProps {
	article: Article;
	className?: string;
}

const ArticleThumbnail: React.FC<ArticleThumbnailProps> = ({ article, className = '' }) => {
	const { title, mainPhotoUrl, slug, shortDescription } = article;

	return (
		<div className={`articleThumbnail ${className}`}>
			<a href={`/blog/${slug}`} className="articleThumbnail__url"></a>
			<div className="articleThumbnail__cover" style={{ backgroundImage: `url(${mainPhotoUrl})` }} />

			<article className="articleThumbnail__infoWrapper">
				<h1 className="articleThumbnail__title">{title}</h1>
				<h1 className="articleThumbnail__shortDescription">{shortDescription}</h1>

				<ArticleDetails article={article} />
			</article>
		</div>
	);
};
export default ArticleThumbnail;
