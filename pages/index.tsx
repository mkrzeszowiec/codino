import { useState } from 'react';
import { GetStaticProps } from 'next';
import MainLayout from 'layouts/MainLayout';
import PageIntro from 'components/PageIntro/PageIntro';
import Products from 'components/Products/Products';
import WhatWeDo from 'components/WhatWeDo/WhatWeDo';
import TechnologiesCarousel from 'components/TechnologiesCarousel/TechnologiesCarousel';
import StartWork from 'components/StartWork/StartWork';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import GameMain from 'components/game/GameMain';
import NoSsr from 'components/NoSsr/NoSsr';
import GameStartButton from 'components/GameButton/GameStartButton';
import GameCloseButton from 'components/GameButton/GameCloseButton';
import usePortal from 'hooks/usePortal';
import { getIsServerSide } from 'utils/utils';
import { DEFAULT_LOCALE, DEFAULT_TRANSLATE_NAMESPACE } from 'utils/constants';

const IndexPage = () => {
	//todo refactor states
	const [isGameOpening, setIsGameOpening] = useState(false);
	const [isAnimating, setIsAnimating] = useState(false);
	const [isGameMode, setIsGameMode] = useState(false);
	const Portal = usePortal(getIsServerSide() ? '' : document.querySelector('.site-header__actions'));

	const onClickGame = () => {
		if (isGameOpening) {
			return closeGame();
		}
		setIsAnimating(true);

		setTimeout(() => {
			setIsGameOpening(true);
		}, 1200);

		setTimeout(() => {
			setIsGameMode(true);
		}, 1800);
	};

	const closeGame = () => {
		setIsGameOpening(false);
		setIsGameMode(false);
		setIsAnimating(false);
	};

	return (
		<MainLayout containerClassName={`homepagePage ${isGameOpening ? 'gameMode' : ''}`}>
			{isGameMode ? (
				<GameCloseButton isGameMode={isGameMode} onClick={closeGame} />
			) : (
				<Portal>
					<GameStartButton isGameOpening={isAnimating} onClick={onClickGame} />
				</Portal>
			)}

			<NoSsr>
				{isGameMode ? (
					<section className="pageIntro">
						<GameMain onClose={closeGame} />
					</section>
				) : (
					<PageIntro />
				)}
			</NoSsr>

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
