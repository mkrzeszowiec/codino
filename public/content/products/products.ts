import { Product } from 'types/common';

import RECAST_PL from 'public/content/products/pl/recast';
import GIVEO_PL from 'public/content/products/pl/giveo';
import NEXTBIKE_PL from 'public/content/products/pl/nextbike';
import DATABASES_PL from 'public/content/products/pl/databases';
import INSIGHTS_PL from 'public/content/products/pl/insights';
import AXISROOMS_PL from 'public/content/products/pl/axisrooms';
import ZIPZERO_PL from 'public/content/products/pl/zipzero';

import RECAST_EN from 'public/content/products/en/recast';
import GIVEO_EN from 'public/content/products/en/giveo';
import NEXTBIKE_EN from 'public/content/products/en/nextbike';
import DATABASES_EN from 'public/content/products/en/databases';
import INSIGHTS_EN from 'public/content/products/en/insights';
import AXISROOMS_EN from 'public/content/products/en/axisrooms';
import ZIPZERO_EN from 'public/content/products/en/zipzero';

const OUR_PRODUCTS_PL: Product[] = [
	RECAST_PL,
	ZIPZERO_PL,
	NEXTBIKE_PL,
	AXISROOMS_PL,
	INSIGHTS_PL,
	DATABASES_PL,
	GIVEO_PL
];

const OUR_PRODUCTS_EN: Product[] = [
	RECAST_EN,
	ZIPZERO_EN,
	NEXTBIKE_EN,
	AXISROOMS_EN,
	INSIGHTS_EN,
	DATABASES_EN,
	GIVEO_EN
];

export const getOurProductsTranslated = (locale?: string): Product[] => {
	return locale === 'pl' ? OUR_PRODUCTS_PL : OUR_PRODUCTS_EN;
};
