import { IncomingMessage, ServerResponse } from 'http';
import { parseRequest } from './_lib/parser';
import { getMetaData } from './_lib/meta';
import { getScreenshot } from './_lib/chromium';
import { getHtml } from './_lib/template';

const isDev = !process.env.AWS_REGION;
const isHtmlDebug = process.env.OG_HTML_DEBUG === '1';

export default async function handler(
	req: IncomingMessage,
	res: ServerResponse
) {
	try {
		const parsedReq = await parseRequest(req);
		const meta = await getMetaData(parsedReq.project, parsedReq.page);
		const html = getHtml(meta);
		if (isHtmlDebug) {
			res.setHeader('Content-Type', 'text/html');
			res.end(html);
			return;
		}
		const { fileType } = parsedReq;
		const file = await getScreenshot(html, fileType, isDev);
		res.statusCode = 200;
		res.setHeader('Content-Type', `image/${fileType}`);
		res.setHeader(
			'Cache-Control',
			`public, immutable, no-transform, s-maxage=31536000, max-age=31536000`
		);
		res.end(file);
	} catch (e) {
		res.statusCode = 500;
		res.setHeader('Content-Type', 'text/html');
		res.end('<h1>Internal Error</h1><p>Sorry, there was a problem</p>');
		console.error(e);
	}
}
