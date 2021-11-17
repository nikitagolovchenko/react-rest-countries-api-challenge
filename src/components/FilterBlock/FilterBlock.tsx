import React, { FC, useEffect, useState } from 'react';
import {
  Input,
  InputHolder,
  FilterBlockInner,
  MySelect,
} from './FilterBlock.styles';
import { BsSearch } from 'react-icons/bs';
import { useAppDispatch } from './../../hooks/reduxHooks';
import { filterCountries } from '../../store/slices/countrySlice';
import { regions } from '../../utils/constants';

const FilterBlock: FC = () => {
  const dispatch = useAppDispatch();
  const [search, setSearch] = useState<string>('');
  const [select, setSelect] = useState<string>('all');

  useEffect(() => {
    const filterObj: IFilter = { region: select, search: search };
    dispatch(filterCountries(filterObj));
  }, [search, select]);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  const handleSelect = (option: any) => {
    setSelect((option as IOptions).value);
    
  }

  const setOptions = (): IOptions[] => {
    const options: IOptions[] = regions.map(region => ({
      value: region,
      label: region,
    }));
    return [{ value: 'all', label: 'All' }, ...options];
  };

  return (
    <FilterBlockInner>
      <InputHolder>
        <BsSearch />
        <Input
          value={search}
          onChange={handleSearch}
          placeholder='Search for a country...'
        />
      </InputHolder>
      <MySelect
        options={setOptions()}
        onChange={handleSelect}
        placeholder='Filter by Region'
      />
    </FilterBlockInner>
  );
};

export default FilterBlock;
