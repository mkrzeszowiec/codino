import MainLayout from 'layouts/MainLayout';
import PageIntro from 'components/PageIntro/PageIntro';
import Products from 'components/Products/Products';
import WhatWeDo from 'components/WhatWeDo/WhatWeDo';
import TechnologiesCarousel from 'components/TechnologiesCarousel/TechnologiesCarousel';
import StartWork from 'components/StartWork/StartWork';
import { GetStaticProps } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { DEFAULT_LOCALE, DEFAULT_TRANSLATE_NAMESPACE } from 'utils/constants';
import GameButton from 'components/GameButton/GameButton';
import { useState } from 'react';
import GameMain from 'components/game/GameMain';

const IndexPage = () => {
	const [isGameMode, setIsGameMode] = useState(false);
	const [isGame, setIsGame] = useState(false);

	const onClickGame = () => {
		if (isGameMode) {
			setIsGame(false);
			return setIsGameMode(false);
		}

		setIsGameMode(true);

		setTimeout(() => {
			setIsGame(true);
		}, 500);
	};

	return (
		<MainLayout containerClassName={`homepagePage ${isGameMode ? 'gameMode' : ''}`}>
			<GameButton onClick={onClickGame} />
			{isGame ? (
				<section className="pageIntro">
					<GameMain />
				</section>
			) : (
				<PageIntro />
			)}

			<div className="container">
				<WhatWeDo />
			</div>

			<TechnologiesCarousel />
			<Products />

			<div className="container" data-aos="fade-down">
				<StartWork />
			</div>
		</MainLayout>
	);
};

export const getStaticProps: GetStaticProps = async ({ locale }) => ({
	props: {
		...(await serverSideTranslations(locale ?? DEFAULT_LOCALE, [DEFAULT_TRANSLATE_NAMESPACE]))
	}
});

export default IndexPage;
