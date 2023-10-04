import Image from 'next/image';
import { useState } from 'react';

const getRandomId = () => Math.random() * 100;

const CaseStudyTestimonial = () => {
	const [randomId] = useState(getRandomId().toFixed());

	return (
		<div className="caseStudyTestimonialWrapper" data-aos="fade-down">
			<div className="caseStudyTestimonial">
				<Image src={`/images/quote-left.svg`} className="caseStudyTestimonial__quote" alt="" width={50} height={50} />

				<p className="caseStudyTestimonial__description">
					Opinie zespołu o pracy w codino. Praesent nibh est, maximus sed maximus ac, rutrum quis justo. Donec placerat
					et eros ac viverra. Fusce metus lectus, cursus ac aliquet non, volutpat id augue. Donec dapibus, lectus id
					mattis imperdiet Nam mollis dolor id molestie tristique.Praesent
				</p>

				<div className="caseStudyTestimonial__authorSection">
					<Image
						src={`https://picsum.photos/id/${randomId}/500`}
						className="caseStudyTestimonial__authorImage"
						alt=""
						width={500}
						height={500}
					/>

					<div className="caseStudyTestimonial__authorInfo">
						<p className="caseStudyTestimonial__authorName">Marek Krzeszowiec</p>

						<p className="caseStudyTestimonial__authorPosition">Developer</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default CaseStudyTestimonial;
