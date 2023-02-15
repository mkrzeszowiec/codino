import { useEffect, useState } from 'react';
import Button from 'components/Button/Button';
import HeroAnimation from 'components/HeroAnimation/HeroAnimation';
import { getIsServerSide } from 'utils/utils';
import { Trans, useTranslation } from 'next-i18next';
import GameStartButton from 'components/GameButton/GameStartButton';

interface PageIntroProps {
	onClickStartGame: () => void;
	isLaunchGameAnimating: boolean;
}

const PageIntro: React.FC<PageIntroProps> = ({ onClickStartGame, isLaunchGameAnimating }) => {
	const { t } = useTranslation();
	const [showing, setShowing] = useState(false);

	useEffect(() => {
		setShowing(true);
	}, []);

	if (!showing) {
		return null;
	}

	return (
		<section className="pageIntro">
			{!getIsServerSide() && <HeroAnimation />}

			<div className="container">
				<div className="pageIntro__content">
					<h2 className="pageIntro__title">
						<Trans i18nKey={'components.pageIntro.header'} />
					</h2>
					<h3 className="pageIntro__subtitle">{t('components.pageIntro.subheader')}</h3>

					<div className="pageIntro__buttonContainer">
						<Button label={t('common.contact')} href="/contact" type="border-white" />
						<GameStartButton isGameOpening={isLaunchGameAnimating} onClick={onClickStartGame} />
					</div>
				</div>
			</div>
		</section>
	);
};

export default PageIntro;
