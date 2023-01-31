import { GetStaticPaths, GetStaticProps } from 'next';
import { ParsedUrlQuery } from 'querystring';
import { Product } from 'types/common';
import Main from 'layouts/MainLayout';
import { getPageTitle } from 'utils/utils';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { DEFAULT_LOCALE, DEFAULT_TRANSLATE_NAMESPACE } from 'utils/constants';
import CaseStudy from 'components/CaseStudy/CaseStudy';
import { getOurProductsTranslated } from 'content/ourProducts';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

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

	const product = getOurProductsTranslated(DEFAULT_LOCALE).find(product => product.slug === slug);

	return {
		props: {
			product,
			...(await serverSideTranslations(context.locale ?? DEFAULT_LOCALE, [DEFAULT_TRANSLATE_NAMESPACE]))
		}
	};
};

const CaseStudyPage = ({ product }: Props) => {
	const router = useRouter();
	const [translatedProduct, setTranslatedProduct] = useState(product);

	useEffect(() => {
		const currentProduct = getOurProductsTranslated(router.locale).find(p => p?.slug === product?.slug);
		setTranslatedProduct(currentProduct);
	}, [product, router.locale]);

	if (!product) return null;

	return (
		<Main title={getPageTitle(product.title)}>
			<CaseStudy product={translatedProduct} />
		</Main>
	);
};

export default CaseStudyPage;
