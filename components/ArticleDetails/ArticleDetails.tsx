import { Article } from 'types/common';
import Image from 'next/image';

interface ArticleThumbnailProps {
	article: Article;
	className?: string;
}

const ArticleDetails: React.FC<ArticleThumbnailProps> = ({ article, className = '' }) => {
	const { authorImageUrl, authorName, date, readTime } = article;

	return (
		<div className={`articleDetails ${className}`}>
			{authorImageUrl && (
				<div className="articleDetails__authorImageWrapper">
					<Image className="articleDetails__authorImage" src={authorImageUrl} alt="" width={36} height={36} />
				</div>
			)}

			<div className="articleDetails__otherInfo">
				<p className="articleDetails__authorName">{authorName}</p>

				<div className="articleDetails__timeWrapper">
					<p className="articleDetails__date">{date}</p>
					<span className="articleDetails__divider" />
					<p className="articleDetails__readTime">{readTime}</p>
				</div>
			</div>
		</div>
	);
};
export default ArticleDetails;
