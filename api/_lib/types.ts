export type FileType = 'png' | 'jpeg';

export interface ParsedRequest {
	fileType: FileType;
	project: string;
	page: string;
}

export interface MetaData {
	name: string;
	logo: string;
	title: string;
	description: string;
	foreground: string;
	background: string;
}
