import english from './en';
import french from './fr';
import finnish from './fi';
import german from './de';
import swedish from './sv';
import spanish from './es';
import japanese from './ja';

type Translation = {
	PageSize: string;
	PageOrientation: string;
	Format: string;
	DPI: string;
	Generate: string;
};

export { english, french, finnish, german, swedish, spanish, japanese,Translation };
