import Link from 'next/link';

interface ButtonProps {
	className?: string;
	label: string;
	href: string;
	type?: 'default' | 'white' | 'border-white' | 'border-black';
	icon?: JSX.Element;
}

const Button: React.FC<ButtonProps> = ({ type = 'default', href, className = '', label = '', icon }) => {
	return (
		<Link href={href} className={`button ${className} button--${type}`}>
			{label}
			{icon && <span className="button__icon">{icon}</span>}
		</Link>
	);
};

export default Button;
