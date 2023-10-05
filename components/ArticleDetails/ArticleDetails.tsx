import { Article } from 'types/common';
import Image from 'next/image';

interface ArticleThumbnailProps {
	article: Article;
	className?: string;
}

const ArticleDetails: React.FC<ArticleThumbnailProps> = ({ article, className = '' }) => {
	const { author } = article;

	return (
		<div className={`articleDetails ${className}`}>
			{author.imageUrl && (
				<div className="articleDetails__authorImageWrapper">
					<Image className="articleDetails__authorImage" src={author.imageUrl} alt="" width={36} height={36} />
				</div>
			)}

			<div className="articleDetails__otherInfo">
				<p className="articleDetails__authorName">{author.name}</p>

				<div className="articleDetails__timeWrapper">
					<p className="articleDetails__date">Jun 14</p>
					<span className="articleDetails__divider" />
					<p className="articleDetails__readTime">8 min read</p>
				</div>
			</div>
		</div>
	);
};
export default ArticleDetails;
