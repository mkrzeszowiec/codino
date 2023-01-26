import Image from 'next/image';

const TeamStats = () => (
	<section className="teamStats">
		<Image className="teamStats__image" src={'/images/team2.png'} width={1000} height={1000} alt="" />

		<div className="teamStats__wrapper">
			<div className="teamStats__info">
				<h3 className="teamStats__header">4+</h3>
				<p className="teamStats__description">Lat w branży</p>
			</div>

			<div className="teamStats__info">
				<h3 className="teamStats__header">340</h3>
				<p className="teamStats__description">Wykonanych projektów</p>
			</div>

			<div className="teamStats__info">
				<h3 className="teamStats__header">8+</h3>
				<p className="teamStats__description">Czegoś tam</p>
			</div>
		</div>
	</section>
);

export default TeamStats;
