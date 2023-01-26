import React from 'react';
import { STATE } from 'utils/constants';

interface SubmitButtonProps {
	classNamespace?: string;
	state: STATE;
}

export const SubmitButton: React.FC<SubmitButtonProps> = ({ classNamespace = 'submitButton__', state }) => {
	const containerClass = classNamespace + 'container ' + state + ' ';
	const getButtonLabel = (): string => {
		switch (state) {
			case STATE.SUCCESS:
				return 'Wysłano';
			case STATE.ERROR:
				return 'Wystąpił błąd, spróbuj ponownie';
			default:
				return 'Wyślij';
		}
	};

	return (
		<div className={containerClass}>
			<button disabled={state === STATE.DISABLED} type="submit" className={classNamespace + 'button'}>
				<span>{getButtonLabel()}</span>
				<svg className={classNamespace + 'progress-circle'} viewBox="0 0 41 41">
					<path d="M38,20.5 C38,30.1685093 30.1685093,38 20.5,38" />
				</svg>
				<svg className={classNamespace + 'checkmark'} viewBox="0 0 70 70">
					<path d="m31.5,46.5l15.3,-23.2" />
					<path d="m31.5,46.5l-8.5,-7.1" />
				</svg>
				<svg className={classNamespace + 'cross'} viewBox="0 0 70 70">
					<path d="m35,35l-9.3,-9.3" />
					<path d="m35,35l9.3,9.3" />
					<path d="m35,35l-9.3,9.3" />
					<path d="m35,35l9.3,-9.3" />
				</svg>
			</button>
		</div>
	);
};

export default SubmitButton;
