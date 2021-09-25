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
		logo: `
			<svg
			version="1.1" 
			xmlns="http://www.w3.org/2000/svg" 
			xmlns:xlink="http://www.w3.org/1999/xlink" 
			x="0px" 
			y="0px"
			width="990px" 
			height="1170px" 
			viewBox="0 0 990 1170" 
			preserveAspectRatio="xMinYMin meet"
			enable-background="new 0 0 990 1170" 
			xml:space="preserve">
				<path d="M628.586,330.003L913.572,603.05l72.468-180.278L720.482,4.681h-451.31L3.96,422.771L56.746,554.24
					L628.586,330.003z M899.44,430.746l-14.977,37.258L707.949,298.883l86.253-33.822L899.44,430.746z M311.721,82.057h366.244
					l73.974,116.464L99.953,454.187l-9.415-23.45L311.721,82.057z"/>
				<polygon points="635.263,1087.944 354.415,1087.944 298.18,947.889 3.96,1029.876 24.73,1104.412 252.196,1041.027 
					302.102,1165.32 687.553,1165.32 737.516,1041.029 965.294,1104.419 986.04,1029.876 691.562,947.889"/>
			</svg>
		`,
		baseUrl: 'https://automad.org',
		foreground: '#ffffff',
		background: '#1f2022',
	},
	automadPackages: <ProjectSettings>{
		name: 'Automad Packages',
		logo: `
			<svg 
			version="1.1" 
			xmlns="http://www.w3.org/2000/svg" 
			xmlns:xlink="http://www.w3.org/1999/xlink" 
			x="0px" 
			y="0px"
			width="2100px" 
			height="1170px" 
			viewBox="0 0 2100 1170" 
			preserveAspectRatio="xMinYMin meet"
			enable-background="new 0 0 2100 1170"
			xml:space="preserve">
				<path d="M628.587,330.003L913.571,603.05l72.469-180.278L720.482,4.68h-451.31L3.96,422.771L56.746,554.24
					L628.587,330.003z M899.44,430.746l-14.976,37.257L707.949,298.883l86.253-33.823L899.44,430.746z M311.72,82.056h366.244
					l73.975,116.464L99.954,454.186l-9.416-23.45L311.72,82.056z"/>
				<polygon points="635.264,1087.944 354.415,1087.944 298.181,947.888 3.96,1029.875 24.73,1104.412 
					252.196,1041.026 302.103,1165.32 687.554,1165.32 737.516,1041.028 965.295,1104.419 986.04,1029.875 691.562,947.888"/>
				<g class="package">
					<path d="M1630.078,545.568h169.897c28.96,0,52.438-23.477,52.438-52.438s-23.479-52.438-52.438-52.438h-169.897
						c-28.959,0-52.438,23.477-52.438,52.438S1601.119,545.568,1630.078,545.568z"/>
					<path d="M2087.104,286.015L1846.77,57.782l-50.453,53.128l188.943,179.429h-450.444l153.142-63.809l-28.18-67.631
						l-316.827,131.44l0,0V892.46h744.154V286.015z M2016.564,821.92H1413.49V360.876h603.074V821.92z"/>
				</g>
			</svg>
		`,
		baseUrl: 'https://packages.automad.org',
		foreground: '#181818',
		background: '#ffffff',
	},
	revitron: <ProjectSettings>{
		name: 'Revitron',
		logo: `
			<svg 
			version="1.1" 
			xmlns="http://www.w3.org/2000/svg" 
			xmlns:xlink="http://www.w3.org/1999/xlink" 
			x="0px" 
			y="0px"
			width="6.728em"
			height="6.5em"
			viewBox="0 0 460 445" 
			style="enable-background:new 0 0 460 445;" 
			xml:space="preserve"
			>
				<path d="M229.49,0L0,132.32v265.65l81.5,47.36l81.5-47.36v-76.4l141.49,80.72L386,356.02v-86.05l74-43v-94.66L229.49,0
					z M229.51,17.3L437.5,136.69l-148.06,86.04l74.13,42.07l-59.13,35.16L170.5,222.65l149.04-86.02l-90.07-51.64L81.5,170.98
					l-59.03-34.3L229.51,17.3z M237,106.6l52.46,30.08L237,166.95V106.6z M15,389.34V149.68l59,34.28v239.65L15,389.34z M148,389.34
					l-59,34.28V183.97l133-77.28v68.93l-74,42.71V389.34z M163,235.64l134,77.34v67.76L163,304.3V235.64z M312,380.77v-67.85l59-35.08
					v69.45L312,380.77z M379.33,256.5l-59.77-33.92L445,149.69v68.65L379.33,256.5z"/>
			</svg>
		`,
		baseUrl: 'https://revitron.readthedocs.io/en/latest',
		foreground: '#eff0f1',
		background: '#222326',
	},
	revitronUi: <ProjectSettings>{
		name: 'Revitron UI',
		logo: `
			<svg 
			version="1.1" 
			xmlns="http://www.w3.org/2000/svg" 
			xmlns:xlink="http://www.w3.org/1999/xlink" 
			x="0px" 
			y="0px" 
			width="10.216em"
			height="6.5em"
			viewBox="0 0 374.08 238" 
			style="enable-background:new 0 0 374.08 238;" 
			xml:space="preserve"
			>
				<path d="M122.65,0L0,70.72v141.97L43.56,238l43.56-25.31v-40.83L162.73,215l43.56-24.73v-45.99l39.55-22.98V70.71
					L122.65,0z M122.66,9.25l111.16,63.81l-79.13,45.98l39.62,22.48l-31.6,18.79l-71.58-41.32l79.65-45.97l-48.14-27.6L43.56,91.38
					L12.01,73.05L122.66,9.25z M126.66,56.97l28.04,16.08l-28.04,16.18L126.66,56.97L126.66,56.97z M8.02,208.08V79.99l31.53,18.32
					v128.08L8.02,208.08z M79.1,208.08L47.57,226.4V98.32l71.08-41.3v36.84L79.1,116.69V208.08z M87.11,125.93l71.61,41.33v36.21
					l-71.61-40.85V125.93z M166.74,203.5v-36.26l31.53-18.75v37.12L166.74,203.5z M202.73,137.08l-31.94-18.13L237.82,80v36.69
					L202.73,137.08z"/>
				<circle cx="325.08" cy="49" r="49"/>
				<path fill="#ffffff" d="M332.83,31.3v22.67c0,7.64-5.79,12.73-14.47,12.73c-8.71,0-14.47-5.1-14.47-12.73V31.3h7.38v22.04
					c0,3.99,2.81,6.87,7.09,6.87c4.29,0,7.09-2.88,7.09-6.87V31.3H332.83z"/>
				<path fill="#ffffff" d="M346.28,66.21h-7.38V31.3h7.38V66.21z"/>
			</svg>
		`,
		baseUrl: 'https://revitron-ui.readthedocs.io/en/latest',
		foreground: '#35383b',
		background: '#ffffff',
	},
	airmad: <ProjectSettings>{
		name: 'Automad — Airmad',
		logo: `
			<svg 
			xmlns="http://www.w3.org/2000/svg" 
			xmlns:xlink="http://www.w3.org/1999/xlink" 
			x="0px"
			y="0px"
			width="6.44em"
			height="7.6em"
			viewBox="0 0 518 610" 
			style="enable-background:new 0 0 518 610;" 
			xml:space="preserve"
			>
			<path d="M236,339.5L0,476.5V149.2L259,0l259,149.3v300.7L236,610V339.5z M282,531l190-107.9V202.5L282,312.8V531z
				M46,396.6l403.1-234L259,53.1L46,175.8V396.6z"/>
			</svg>
		`,
		baseUrl: 'https://airmad.readthedocs.io/en/latest',
		foreground: '#35383b',
		background: '#ffffff',
	},
};
