import { GetStaticProps } from 'next';
import classNames from 'classnames';
import MainLayout from 'components/layout/MainLayout';
import PageIntro from 'components/PageIntro/PageIntro';
import Products from 'components/Products/Products';
import WhatWeDo from 'components/WhatWeDo/WhatWeDo';
import TechnologiesCarousel from 'components/TechnologiesCarousel/TechnologiesCarousel';
import TestimonialsCarousel from "../components/TestimonailsCarousel/TestimonialsCarousel";
import StartWork from 'components/StartWork/StartWork';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import GameMain from 'components/game/GameMain';
import NoSsr from 'components/NoSsr/NoSsr';
import GameCloseButton from 'components/game/GameCloseButton';
import GameFloatingButton from 'components/game/GameFloatingButton';
import useGame from 'hooks/useGame';
import useHomePageLayout from 'hooks/useHomePageLayout';
import { DEFAULT_LOCALE, DEFAULT_TRANSLATE_NAMESPACE } from 'utils/constants';

const IndexPage = () => {
	const { isGameOpening, isAnimating, isGameMode, onClickGame, closeGame } = useGame();
	const { isHeaderOnHero, isVisibleBottomGameButton } = useHomePageLayout();

	return (
		<MainLayout
			containerClassName={classNames('homepagePage', {
				gameMode: isGameOpening,
				'transparent-header': isHeaderOnHero
			})}
		>
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
      <TestimonialsCarousel title={"Referencje"} />

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
