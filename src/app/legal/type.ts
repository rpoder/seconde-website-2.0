export type SectionContent = {
	texts: string[][];
	table?: Table;
};

export type Table = {
	headers: string[];
	rows: string[][];
};

type SubSection = {
	title: string;
	content: SectionContent[];
};

export type Section = {
	title: string;
	content?: SectionContent[];
	subSections?: SubSection[];
};

export type LegalData = {
	title: string;
	updatedAt: Date;
	preamble?: {
		title: string;
		content: SectionContent[];
	};
	sections: Section[];
};
