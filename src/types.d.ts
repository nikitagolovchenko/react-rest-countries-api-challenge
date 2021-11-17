interface Country {
  name: string;
  capital: string;
  region: string;
  population: number | string;
  flag: string;
  alpha3Code: string;
  topLevelDomain?: string[];
  nativeName?: string;
  subregion?: string;
  currencies?: Array<{ name: string }>;
  languages?: Array<{ name: string }>;
  borders?: string[];
}

// interface CountryDetail extends Country {
//   topLevelDomain: string[];
//   nativeName: string;
//   population: number;
//   subregion: string;
//   currencies: Array<{ name: string }>;
//   languages: Array<{ name: string }>;
//   borders: string[];
// }

interface IOptions {
  value: string;
  label: string;
}

interface IFilter {
  region: string;
  search: string;
}
