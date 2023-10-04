import { Article } from 'types/common';

interface ArticleThumbnailProps {
	article: Article;
	className?: string;
}

const ArticleThumbnail: React.FC<ArticleThumbnailProps> = ({ article, className = '' }) => {
	const { title, author, mainPhotoUrl, slug, shortDescription } = article;

	return (
		<div className={`articleThumbnail ${className}`}>
			<a href={`/${slug}`} className="card">
				<div className="articleThumbnail__cover" style={{ backgroundImage: `url(${mainPhotoUrl})` }} />

				<article className="articleThumbnail__infoWrapper">
					<h1 className="articleThumbnail__title">{title}</h1>
					<h1 className="articleThumbnail__shortDescription">{shortDescription}</h1>
					<p className="articleThumbnail__author">{author.name}</p>
				</article>
			</a>
		</div>
	);
};
export default ArticleThumbnail;
