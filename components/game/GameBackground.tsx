const GameBackground = () => {
	const NUMBER_OF_METEOR = 15;

	return (
		<>
			<span className="star" />

			{[...Array(NUMBER_OF_METEOR)].map((elementInArray, index) => (
				<span key={index} className={`meteor-${index + 1}`} />
			))}
		</>
	);
};

export default GameBackground;
