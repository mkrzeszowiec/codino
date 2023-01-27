import { GetStaticPaths, GetStaticProps } from 'next';
import { ParsedUrlQuery } from 'querystring';
import { Product } from 'types/common';
import { OUR_PRODUCTS } from 'content/ourProducts';
import Main from 'layouts/MainLayout';
import { getPageTitle } from 'utils/utils';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { DEFAULT_LOCALE, DEFAULT_TRANSLATE_NAMESPACE } from 'utils/constants';
import CaseStudy from 'components/CaseStudy/CaseStudy';

export const getStaticPaths: GetStaticPaths = async () => {
	return {
		paths: [],
		fallback: true
	};
};

interface Params extends ParsedUrlQuery {
	slug: string;
}

type Props = {
	product: Product;
};

export const getStaticProps: GetStaticProps = async context => {
	const { slug } = context.params as Params;

	if (!slug) {
		throw Error('Product not found');
	}

	const product = OUR_PRODUCTS.find(product => product.slug === slug);

	return {
		props: {
			product,
			...(await serverSideTranslations(context.locale ?? DEFAULT_LOCALE, [DEFAULT_TRANSLATE_NAMESPACE]))
		}
	};
};

const CaseStudyPage = ({ product }: Props) => {
	if (!product) return null;

	return (
		<Main title={getPageTitle(product.title)}>
			<CaseStudy product={product} />
		</Main>
	);
};

export default CaseStudyPage;
