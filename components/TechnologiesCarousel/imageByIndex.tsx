import { StaticImageData } from 'next/image';

import image1 from 'public/images/technologies/hibernate.svg';
import image2 from 'public/images/technologies/html.svg';
import image3 from 'public/images/technologies/docker.svg';
import image4 from 'public/images/technologies/kafka.svg';
import image5 from 'public/images/technologies/kubernetes.svg';
import image6 from 'public/images/technologies/node.svg';
import image7 from 'public/images/technologies/java.svg';
import image8 from 'public/images/technologies/spring.svg';
import image9 from 'public/images/technologies/ts.svg';
import image10 from 'public/images/technologies/kotlin.svg';
import image11 from 'public/images/technologies/redis.svg';

export const images: StaticImageData[] = [
	image1,
	image2,
	image3,
	image4,
	image5,
	image6,
	image7,
	image8,
	image9,
	image10,
	image11
];

const imageByIndex = (index: number): StaticImageData => images[index % images.length];

export default imageByIndex;
