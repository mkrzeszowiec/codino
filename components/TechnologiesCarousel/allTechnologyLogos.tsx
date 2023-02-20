import { StaticImageData } from 'next/image';

import java from 'public/images/technologies/java.svg';
import docker from 'public/images/technologies/docker.svg';
import spring from 'public/images/technologies/spring.svg';
import hibernate from 'public/images/technologies/hibernate.svg';
import kafka from 'public/images/technologies/kafka.svg';
import kubernetes from 'public/images/technologies/kubernetes.svg';
import redis from 'public/images/technologies/redis.svg';
import elastic from 'public/images/technologies/elastic.svg';
import node from 'public/images/technologies/node.svg';
import html from 'public/images/technologies/html.svg';
import angular from 'public/images/technologies/angular.svg';
import react from 'public/images/technologies/react.svg';
import ts from 'public/images/technologies/ts.svg';
import python from 'public/images/technologies/python.svg';
import kotlin from 'public/images/technologies/kotlin.svg';
import scala from 'public/images/technologies/scala.svg';
import android from 'public/images/technologies/android.svg';
import ios from 'public/images/technologies/ios.svg';
import mysql from 'public/images/technologies/mysql.svg';
import postgresql from 'public/images/technologies/postgresql.svg';
import aws from 'public/images/technologies/aws.svg';
import meilisearch from 'public/images/technologies/meilisearch.svg';
import mongodb from 'public/images/technologies/mongodb.svg';
import php from 'public/images/technologies/php.svg';
import teradata from 'public/images/technologies/teradata.svg';
import snowflake from 'public/images/technologies/snowflake.svg';
import rabbitmq from 'public/images/technologies/rabbitmq.svg';
import { technology } from 'types/common';

export const allTechnologyLogos: StaticImageData[] = [
	java,
	docker,
	spring,
	hibernate,
	kafka,
	kubernetes,
	redis,
	elastic,
	node,
	html,
	angular,
	react,
	ts,
	android,
	ios,
	python,
	php,
	kotlin,
	scala,
	mysql,
	postgresql,
	mongodb,
	aws,
	teradata,
	meilisearch,
	snowflake,
	rabbitmq
];

const NOT_VISIBLE_IN_MAIN_CAROUSEL: technology[] = ['php', 'scala', 'html'];

export const mainTechnologyLogos = allTechnologyLogos.filter(
	logo => !NOT_VISIBLE_IN_MAIN_CAROUSEL.some(technology => logo.src.includes(technology))
);
