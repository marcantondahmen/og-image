import fetch from 'node-fetch';
import * as cheerio from 'cheerio';
import { projectCollection } from './projects';
import { MetaData } from './types';

export async function getMetaData(project: string, page: string) {
	const data = projectCollection[project];

	if (data === undefined) {
		const meta: MetaData = {
			name: '',
			logo: '',
			title: '',
			description: '',
			foreground: '',
			background: '',
		};

		return meta;
	}

	const url = `${data.baseUrl}${page}`;
	console.log(url);

	const response = await fetch(url);
	const html = await response.text();

	const $ = cheerio.load(html);

	let title = $('meta[property="og:title"]').attr('content') || '';
	let description =
		$('meta[property="og:description"]').attr('content') || '';

	const removes = [
		'Automad / ',
		'Automad Packages — ',
		' - Automad Discussion',
	];

	removes.forEach((item) => {
		title = title.replace(item, '');
	});

	let descriptionShort = description.replace(/^(.{150}[^\s]*).*/, '$1');

	if (descriptionShort !== description) {
		descriptionShort = `${descriptionShort} ...`;
	}

	const meta: MetaData = {
		name: data.name,
		logo: data.logo,
		title: title,
		description: descriptionShort,
		foreground: data.foreground,
		background: data.background,
	};

	return meta;
}
