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
