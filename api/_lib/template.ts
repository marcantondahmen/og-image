import { readFileSync } from 'fs';
import { sanitizeHtml } from './sanitizer';
import { MetaData } from './types';

const twemoji = require('twemoji');
const twOptions = { folder: 'svg', ext: '.svg' };
const emojify = (text: string) => twemoji.parse(text, twOptions);

const inter = readFileSync(
	`${__dirname}/../_fonts/Inter-roman.var.woff2`
).toString('base64');

const mono = readFileSync(`${__dirname}/../_fonts/Vera-Mono.woff2`).toString(
	'base64'
);

function getCss(foreground: string, background: string) {
	return `
	@font-face {
		font-family: 'Vera';
		font-style: normal;
		font-weight: normal;
		src: url(data:font/woff2;charset=utf-8;base64,${mono})  format("woff2");
	}

	@font-face {
		font-family: 'Inter';
		font-weight: 100 900;
		font-display: swap;
		font-style: normal;
		font-named-instance: 'Regular';
		src: url(data:font/woff2;charset=utf-8;base64,${inter}) format('woff2');
	}

	html {
		font-size: 76px;
		margin: 0;
		padding: 0;
	}

	body {
		display: flex;
		box-sizing: border-box;
		flex-direction: column;
		height: 100vh;
		margin: 0;
		padding: 1.5rem;
		font-family: Inter;
		font-weight: 450;
		color: ${foreground};
		background: ${background};
		border-bottom: 0.85rem solid;
	}

	code {
		color: #D400FF;
		font-family: 'Vera';
		white-space: pre-wrap;
		letter-spacing: -5px;
	}

	code:before, code:after {
		content: '\`';
	}

	.header {
		display: flex;
		justify-content: space-between;
		flex-grow: 1;
		width: 100%;
		height: 56%;
	}

	.header .content {
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		width: 64%;
		padding-right: 1.25rem;
	}

	.header .logo {
		width: 36%;
		text-align: right;
	}

	.header svg {
		width: auto;
		height: 80%;
		max-width: 100%;
		max-height: 80%;
		fill: currentColor;
	}

	.name {
		font-size: 0.85rem;
		font-weight: 480;
	}
	
	.title {
		font-size: 1.2rem;
		font-weight: 720;
		line-height: 1.48rem;
	}

	.title .vendor {
		font-weight: 450;
	}

	.description {
		padding: 0.7rem 1.25rem 0 0;
		box-sizing: border-box;
		font-size: 0.85rem;
		font-weight: 480;
		line-height: 1.05rem;
	}

	.plus {
		color: #BBB;
		font-family: Times New Roman, Verdana;
		font-size: 100px;
	}

	.emoji {
		height: 1em;
		width: 1em;
		margin: 0 .05em 0 .1em;
		vertical-align: -0.1em;
	}`;
}

export function getHtml(meta: MetaData) {
	const { name, logo, title, description, foreground, background } = meta;
	return `<!DOCTYPE html>
<html>
	<meta charset="utf-8">
	<title>Generated Image</title>
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<style>
		${getCss(foreground, background)}
	</style>
	<body>
		<div class="header">
			<div class="content">
				<div class="name">
					${sanitizeHtml(name)}
				</div>
				<div class="title">
					${packageTitle(sanitizeHtml(title))}
				</div>
			</div>
			<div class="logo">
				${logo}
			</div>
		</div>
		<div class="description">
			${emojify(sanitizeHtml(description))}
		</div>
	</body>
</html>`;
}

function packageTitle(title: string) {
	return title.replace(
		/(.+?)&#x2F;(.+)/g,
		'<span class="vendor">$1 ⁄</span><br> $2'
	);
}
