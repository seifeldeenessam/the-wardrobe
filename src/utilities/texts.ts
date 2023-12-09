import Texts from '@assets/jsons/texts.json';

export const getText = (key: string): string | undefined => {
	try {
		return JSON.parse(JSON.stringify(Texts))[key];
	} catch (error) {
		return undefined;
	}
};
