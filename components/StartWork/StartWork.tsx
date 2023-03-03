import Button from 'components/Button/Button';
import { useTranslation } from 'next-i18next';
import Image from 'next/image';

const StartWork = () => {
	const { t } = useTranslation();

	return (
		<div className="startWorkWrapper">
			<section className="startWork">
				<Image
					src={`/images/start-work-background.png`}
					className="startWork__image"
					alt=""
					width={2000}
					height={1000}
				/>

				<h3 className="startWork__title">{t('components.startWork.header')}</h3>
				<p className="startWork__description">{t('components.startWork.description')}</p>
				<Button label={t('common.contact')} href="/contact" type="border-white" />
			</section>
		</div>
	);
};

export default StartWork;
