import Button from 'components/Button/Button';
import { useTranslation } from 'next-i18next';
import { IoMdBriefcase } from 'react-icons/io';
import Image from 'next/image';

const JoinUs = () => {
	const { t } = useTranslation();

	return (
		<section className="joinUs">
			<Image src={`/images/join-background.png`} className="joinUs__image" alt="" width={1700} height={500} />

			<h3 className="joinUs__title">{t('components.joinUs.header')}</h3>

			<p className="joinUs__description">{t('components.joinUs.description')}</p>

			<Button className="joinUs__button" label={t('common.getHired')} href="/career" icon={<IoMdBriefcase />} />
		</section>
	);
};

export default JoinUs;
