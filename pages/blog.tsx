import Main from 'components/layout/MainLayout';
import SubpageIntro from 'components/SubpageIntro/SubpageIntro';
import { getPageTitle } from 'utils/utils';
import { GetStaticProps } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { DEFAULT_LOCALE, DEFAULT_TRANSLATE_NAMESPACE } from 'utils/constants';
import { useTranslation } from 'next-i18next';
import ArticleThumbnail from 'components/ArticleThumbnail/ArticleThumbnail';
import { Article } from 'types/common';

const ARTICLES: Article[] = [
	{
		title: 'Lorem ipsum 1',
		slug: 'test-1',
		content: '',
		author: {
			name: 'Marek K',
			imageUrl: 'Marek K',
		},
		mainPhotoUrl: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/210284/users-2.png',
		shortDescription: '',
		date: '04 Oct 23',
	},
	{
		title: 'Lorem ipsum 2',
		slug: 'test-1',
		content: '',
		author: {
			name: 'Marek K',
			imageUrl: 'Marek K',
		},
		mainPhotoUrl: 'https://cdn-images-1.medium.com/v2/resize:fit:500/1*28phnQtCgyCSTL4nPeclrg.gif',
		shortDescription: 'dsadssdsda',
		date: '04 Oct 23',
	},
	{
		title: 'Lorem ipsum d dsdsad adsdsa ',
		slug: 'test-1',
		content: '',
		author: {
			name: 'Marek K',
			imageUrl: 'Marek K',
		},
		mainPhotoUrl: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/210284/flex-3.jpg',
		shortDescription: '',
		date: '04 Oct 23',
	},
	{
		title: 'Lorem ipsum 2',
		slug: 'test-1',
		content: '',
		author: {
			name: 'Marek K',
			imageUrl: 'Marek K',
		},
		mainPhotoUrl: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/210284/flex-1.jpg',
		shortDescription: '',
		date: '04 Oct 23',
	},
	{
		title: 'Test 1223',
		slug: 'test-1',
		content: '',
		author: {
			name: 'Marek K',
			imageUrl: 'Marek K',
		},
		mainPhotoUrl: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/210284/flex-5.jpg',
		shortDescription: '',
		date: '04 Oct 23',
	},
];

const BlogPage = () => {
	const { t } = useTranslation();

	return (
		<Main title={getPageTitle(t('common.subpages.blog'))}>
			<div className="container">
				<SubpageIntro title={t('components.blog.header')} description={''} />

				<div className="articles">
					{ARTICLES.map((article, index) => (
						<ArticleThumbnail article={article} className={`articles__item articles__item--${index + 1}`} key={index} />
					))}
				</div>
			</div>
		</Main>
	);
};

export const getStaticProps: GetStaticProps = async ({ locale }) => ({
	props: {
		...(await serverSideTranslations(locale ?? DEFAULT_LOCALE, [DEFAULT_TRANSLATE_NAMESPACE])),
	},
});

export default BlogPage;
