import { useState } from 'react';
import { GetStaticProps } from 'next';
import useGame from 'hooks/useGame';
import { useScrollPosition } from '@n8tb1t/use-scroll-position';
import MainLayout from 'components/layout/MainLayout';
import PageIntro from 'components/PageIntro/PageIntro';
import Products from 'components/Products/Products';
import WhatWeDo from 'components/WhatWeDo/WhatWeDo';
import TechnologiesCarousel from 'components/TechnologiesCarousel/TechnologiesCarousel';
import StartWork from 'components/StartWork/StartWork';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import GameMain from 'components/game/GameMain';
import NoSsr from 'components/NoSsr/NoSsr';
import GameCloseButton from 'components/game/GameCloseButton';
import GameFloatingButton from 'components/game/GameFloatingButton';
import { DEFAULT_LOCALE, DEFAULT_TRANSLATE_NAMESPACE } from 'utils/constants';

const IndexPage = () => {
	const { isGameOpening, isAnimating, isGameMode, onClickGame, closeGame } = useGame();
	const [isVisibleBottomGameButton, setIsVisibleBottomGameButton] = useState(false);

	useScrollPosition(({ currPos }) => setIsVisibleBottomGameButton(currPos.y < -200), []);

	return (
		<MainLayout containerClassName={`homepagePage ${isGameOpening ? 'gameMode' : ''}`}>
			{isGameMode && <GameCloseButton isGameMode={isGameMode} onClick={closeGame} />}

			<NoSsr>
				{isGameMode ? (
					<section className="pageIntro">
						<GameMain onClose={closeGame} />
					</section>
				) : (
					<>
						<PageIntro isLaunchGameAnimating={isAnimating} onClickStartGame={onClickGame} />
						<GameFloatingButton
							isVisible={isVisibleBottomGameButton}
							isLaunchGameAnimating={isAnimating}
							onClickStartGame={onClickGame}
						/>
					</>
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
