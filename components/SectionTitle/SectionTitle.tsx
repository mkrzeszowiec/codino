const SectionTitle: React.FC<{ className?: string }> = ({ children, className = '' }) => (
	<h3 className={`sectionTitle ${className}`}>{children}</h3>
);

export default SectionTitle;
