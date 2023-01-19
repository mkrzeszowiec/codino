import Link from 'next/link';

interface ButtonProps {
	className?: string;
	label: string;
	href: string;
	type?: 'default' | 'border' | 'white';
}

const Button: React.FC<ButtonProps> = ({ type = 'default', href, className, label }) => {
	return (
		<Link href={href} className={`button ${className} button--${type}`}>
			{label}
		</Link>
	);
};

export default Button;
