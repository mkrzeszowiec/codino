import React from 'react';
import Image from 'next/image';
import ReactMarkdown from 'react-markdown';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { materialDark } from 'react-syntax-highlighter/dist/cjs/styles/prism';
import { Article } from 'types/common';

interface Props {
	article: Article;
}

const ArticleContent = ({ article }: Props) => {
	return (
		<article className="articleContent">
			<ReactMarkdown
				components={{
					p: ({ node, children }) => {
						if ((node as any).children[0].tagName === 'img') {
							const image: any = node.children[0];
							return (
								<div className="image">
									<Image src={`/images/${image.properties.src}`} alt={image.properties.alt} width="600" height="300" />
								</div>
							);
						}

						return <p>{children}</p>;
					},
					code({ className, children }) {
						const language = className.replace('language-', '');
						return <SyntaxHighlighter style={materialDark} language={language} children={children} />;
					},
				}}
			>
				{article.content}
			</ReactMarkdown>
		</article>
	);
};

export default ArticleContent;
