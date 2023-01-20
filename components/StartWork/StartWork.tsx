import Button from 'components/Button/Button';

const StartWork = () => {
	return (
		<div className="startWorkWrapper">
			<section className="startWork">
				<h3 className="startWork__title">Rozpocznij pracę z Codino</h3>
				<p className="startWork__description">
					Rozwijaj biznesy online przy pomocy najnowszych technologii razem z nami.
				</p>

				<Button label="Contact" href="/contact" type="border-white" />
			</section>
		</div>
	);
};

export default StartWork;
