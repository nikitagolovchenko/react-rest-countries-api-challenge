import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState, AppThunk } from '../store';
import countryService from './../../services/countryService';

export interface CountryState {
  countries: Country[];
  filteredCountries: Country[];
  countryDetail: Country;
  countryDetailBorders: Array<{ id: string; name: string }>;
  loading: boolean;
  error: string;
}

const initialState: CountryState = {
  countries: [],
  filteredCountries: [],
  countryDetail: {
    name: '',
    capital: '',
    region: '',
    population: 0,
    flag: '',
    alpha3Code: '',
    topLevelDomain: [],
    nativeName: '',
    subregion: '',
    currencies: [],
    languages: [],
    borders: [],
  },
  countryDetailBorders: [],
  loading: false,
  error: '',
};

export const fetchAllCountries = createAsyncThunk(
  'country/fetchAllCountries',
  async () => {
    const response = await countryService.fetchAll();
    return response.data;
  }
);

export const countrySlice = createSlice({
  name: 'country',
  initialState,
  reducers: {
    filterCountries: (state, action: PayloadAction<IFilter>) => {
      if (action.payload.region.toLowerCase() === 'all') {
        state.filteredCountries = state.countries.filter(country =>
          country.name
            .toLowerCase()
            .includes(action.payload.search.toLowerCase())
        );
      } else {
        state.filteredCountries = state.countries
          .filter(
            country =>
              country.region.toLowerCase() ===
              action.payload.region.toLowerCase()
          )
          .filter(country =>
            country.name
              .toLowerCase()
              .includes(action.payload.search.toLowerCase())
          );
      }
    },
    detailCountry: (state, action: PayloadAction<string>) => {
      const country = state.countries.filter(
        country =>
          country.alpha3Code.toLowerCase() === action.payload.toLowerCase()
      )[0];
      state.countryDetail = country;
    },
    findBorders: (state, action: PayloadAction<string[]>) => {
      const borders = action.payload.map(id => {
        const findCountry = state.countries.filter(
          country => country.alpha3Code.toLowerCase() === id.toLowerCase()
        )[0];
        return { id, name: findCountry.name };
      });

      state.countryDetailBorders = borders;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(fetchAllCountries.pending, state => {
        state.loading = true;
      })
      .addCase(fetchAllCountries.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message as string;
      })
      .addCase(
        fetchAllCountries.fulfilled,
        (state, action: PayloadAction<Country[]>) => {
          state.loading = false;
          state.error = '';
          state.countries = action.payload;
          state.filteredCountries = action.payload;
        }
      );
  },
});

export const { filterCountries, detailCountry, findBorders } = countrySlice.actions;

export const selectCountry = (state: RootState) => state.country;

export default countrySlice.reducer;
