import { IncomingMessage } from 'http';
import { parse } from 'url';
import { ParsedRequest } from './types';

export async function parseRequest(req: IncomingMessage) {
	console.log('HTTP ' + req.url);
	const { pathname, query } = parse(req.url || '/', true);
	const { page } = query || {};

	if (Array.isArray(page)) {
		throw new Error('Expected a single page');
	}

	const arr = (pathname || '/').slice(1).split('.');

	let extension = '';
	let project = '';
	if (arr.length === 0) {
		project = '';
	} else if (arr.length === 1) {
		project = arr[0];
	} else {
		extension = arr.pop() as string;
		project = arr.join('.');
	}

	if (!project) {
		project = 'automad';
	}

	const parsedRequest: ParsedRequest = {
		fileType: extension === 'jpeg' ? extension : 'png',
		project: decodeURIComponent(project),
		page: page || '',
	};

	return parsedRequest;
}
