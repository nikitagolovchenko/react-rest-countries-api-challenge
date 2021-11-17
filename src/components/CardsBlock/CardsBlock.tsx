import React, { FC} from 'react';
import { CardHolder, CardsList, NotFound } from './CardsBlock.style';
import { useAppSelector } from './../../hooks/reduxHooks';
import { selectCountry } from './../../store/slices/countrySlice';
import Card from '../Card/Card';
import MyLoader from '../MyLoader/MyLoader';

const CardsBlock: FC = () => {
  const { filteredCountries, error, loading } = useAppSelector(selectCountry);

  return (
    <>
      {loading && <MyLoader />}
      {!filteredCountries.length && <NotFound>No countries...</NotFound>}
      <CardsList>
        {filteredCountries.map(item => (
          <CardHolder key={item.alpha3Code}>
            <Card {...item} />
          </CardHolder>
        ))}
      </CardsList>
    </>
  );
};

export default CardsBlock;
