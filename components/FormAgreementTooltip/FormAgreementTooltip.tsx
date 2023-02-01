import { Tooltip } from 'react-tooltip';
import { Trans } from 'next-i18next';

const FormAgreementTooltip: React.FC<{ targetId: string }> = ({ targetId }) => {
	return (
		<Tooltip className="formAgreementTooltip" anchorId={targetId} place="top">
			<Trans i18nKey={'components.formAgreement.description'} />
		</Tooltip>
	);
};

export default FormAgreementTooltip;
