import React, { FC, useEffect, useRef, useState } from 'react';
import { CardHolder, CardsList, NotFound } from './CardsBlock.styles';
import { useAppSelector } from './../../hooks/reduxHooks';
import { selectCountry } from './../../store/slices/countrySlice';
import Card from '../Card/Card';
import MyLoader from '../MyLoader/MyLoader';

const CardsBlock: FC = () => {
  const { filteredCountries, error, loading } = useAppSelector(selectCountry);
  const showCards: number = 12;
  const [lastCardIndex, setLastCardIndex] = useState(11);
  const observerRef = useRef<HTMLDivElement>(null);

  const callbackFunc: IntersectionObserverCallback = (entries) => {
    const [entry] = entries;
    if (entry.isIntersecting) {
      if (lastCardIndex <= filteredCountries.length) {
        setLastCardIndex(prev => prev + showCards);
      }
    }
  }

  useEffect(() => {
    const observer = new IntersectionObserver(callbackFunc, {});
    if (observerRef.current) observer.observe(observerRef.current);

    return () => {
      if (observerRef.current) observer.unobserve(observerRef.current);
    }

  }, [filteredCountries, observerRef])

  return (
    <>
      {loading && <MyLoader />}
      {!filteredCountries.length && <NotFound>No countries...</NotFound>}
      <CardsList>
        {filteredCountries.map(
          (item, index) =>
            index <= lastCardIndex && (
              <CardHolder key={item.alpha3Code}>
                <Card {...item} />
              </CardHolder>
            )
        )}
      </CardsList>
      <div ref={observerRef}></div>
    </>
  );
};

export default CardsBlock;
