import { Article } from 'types/common';
import Image from 'next/image';

interface ArticleThumbnailProps {
	article: Article;
	className?: string;
}

const ArticleThumbnail: React.FC<ArticleThumbnailProps> = ({ article, className = '' }) => {
	const { title, author, mainPhotoUrl, slug, shortDescription } = article;

	return (
		<div className={`articleThumbnail ${className}`}>
			<a href={`/blog/${slug}`} className="articleThumbnail__url"></a>
			<div className="articleThumbnail__cover" style={{ backgroundImage: `url(${mainPhotoUrl})` }} />

			<article className="articleThumbnail__infoWrapper">
				<h1 className="articleThumbnail__title">{title}</h1>
				<h1 className="articleThumbnail__shortDescription">{shortDescription}</h1>

				<div className="articleThumbnail__bottomInfoWrapper">
					{author.imageUrl && (
						<div className="articleThumbnail__authorImageWrapper">
							<Image className="articleThumbnail__authorImage" src={author.imageUrl} alt="" width={36} height={36} />
						</div>
					)}

					<div className="articleThumbnail__otherInfo">
						<p className="articleThumbnail__authorName">{author.name}</p>

						<div className="articleThumbnail__timeWrapper">
							<p className="articleThumbnail__date">Jun 14</p>
							<span className="articleThumbnail__divider" />
							<p className="articleThumbnail__readTime">8 min read</p>
						</div>
					</div>
				</div>
			</article>
		</div>
	);
};
export default ArticleThumbnail;
