interface ProjectSettings {
	name: string;
	logo: string;
	baseUrl: string;
	foreground: string;
	background: string;
}

export const projectCollection: { [key: string]: any } = {
	automad: <ProjectSettings>{
		name: 'Automad',
		logo: '',
		baseUrl: 'https://automad.org',
		foreground: '#181818',
		background: '#ffffff',
	},
	automadPackages: <ProjectSettings>{
		name: 'Automad Packages',
		logo: '',
		baseUrl: 'https://packages.automad.org',
		foreground: '#181818',
		background: '#ffffff',
	},
	revitron: <ProjectSettings>{
		name: 'Revitron',
		logo: '',
		baseUrl: 'https://revitron.readthedocs.io/en/latest',
		foreground: '#eff0f1',
		background: '#222326',
	},
	revitronUi: <ProjectSettings>{
		name: 'Revitron UI',
		logo: '',
		baseUrl: 'https://revitron-ui.readthedocs.io/en/latest',
		foreground: '#35383b',
		background: '#ffffff',
	},
	airmad: <ProjectSettings>{
		name: 'Airmad',
		logo: '',
		baseUrl: 'https://airmad.readthedocs.io/en/latest',
		foreground: '#35383b',
		background: '#ffffff',
	},
};
