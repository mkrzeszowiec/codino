import MainLayout from 'layouts/MainLayout';
import PageIntro from 'components/PageIntro/PageIntro';
import Products from 'components/Products/Products';
import WhatWeDo from 'components/WhatWeDo/WhatWeDo';
import TechnologiesCarousel from 'components/TechnologiesCarousel/TechnologiesCarousel';
import StartWork from 'components/StartWork/StartWork';
import { GetStaticProps } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { DEFAULT_LOCALE, DEFAULT_TRANSLATE_NAMESPACE } from 'utils/constants';
import { useState } from 'react';
import GameMain from 'components/game/GameMain';
import NoSsr from 'components/NoSsr/NoSsr';
import GameButton2 from 'components/GameButton/GameButton2';
import GameButton from 'components/GameButton/GameButton';

const IndexPage = () => {
	const [isGameOpening, setIsGameOpening] = useState(false);
	const [isGameMode, setIsGameMode] = useState(false);

	const onClickGame = () => {
		if (isGameOpening) {
			setIsGameMode(false);
			return setIsGameOpening(false);
		}

		setIsGameOpening(true);

		setTimeout(() => {
			setIsGameMode(true);
		}, 500);
	};

	const onCloseGame = () => {
		setIsGameOpening(false);
		setIsGameMode(false);
	};

	return (
		<MainLayout containerClassName={`homepagePage ${isGameOpening ? 'gameMode' : ''}`}>
			{isGameMode ? (
				<GameButton isGameMode={isGameMode} onClick={onClickGame} />
			) : (
				<GameButton2 isGameMode={isGameMode} onClick={onClickGame} />
			)}

			<NoSsr>
				{isGameMode ? (
					<section className="pageIntro">
						<GameMain onClose={onCloseGame} />
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
