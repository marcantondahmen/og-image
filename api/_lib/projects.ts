interface ProjectSettings {
	name: string;
	logo: string;
	baseUrl: string;
}

export const projectCollection: { [key: string]: any } = {
	automad: <ProjectSettings>{
		name: 'Automad',
		logo: '',
		baseUrl: 'https://automad.org',
	},
	automadPackages: <ProjectSettings>{
		name: 'Automad Packages',
		logo: '',
		baseUrl: 'https://packages.automad.org',
	},
	revitron: <ProjectSettings>{
		name: 'Revitron',
		logo: '',
		baseUrl: 'https://revitron.readthedocs.io/en/latest',
	},
	revitronUi: <ProjectSettings>{
		name: 'Revitron UI',
		logo: '',
		baseUrl: 'https://revitron-ui.readthedocs.io/en/latest',
	},
	airmad: <ProjectSettings>{
		name: 'Airmad',
		logo: '',
		baseUrl: 'https://airmad.readthedocs.io/en/latest',
	},
};
