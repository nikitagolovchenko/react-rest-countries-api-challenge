import React, { FC } from 'react';
import { DescriptionItem, DescriptionList, SmallLink, Strong } from '../common';
import {
  BtnGroup,
  Country,
  CountryCol,
  CountryImg,
  CountryRow,
  CountryTitle,
} from './CountryDetail.styles';

interface CountryDetailProps extends Country {
  countryBorders: Array<{ id: string; name: string }>;
}

const CountryDetail: FC<CountryDetailProps> = props => {
  return (
    <Country>
      <CountryRow>
        <CountryCol>
          <CountryImg src={props.flag} />
        </CountryCol>
        <CountryCol>
          <CountryTitle>{props.name}</CountryTitle>
          <CountryRow>
            <CountryCol>
              <DescriptionList>
                <DescriptionItem>
                  <Strong>Native Name:</Strong>
                  {props.nativeName}
                </DescriptionItem>
                <DescriptionItem>
                  <Strong>Population:</Strong>
                  {props.population}
                </DescriptionItem>
                <DescriptionItem>
                  <Strong>Region:</Strong>
                  {props.region}
                </DescriptionItem>
                <DescriptionItem>
                  <Strong>Sub Region:</Strong>
                  {props.subregion}
                </DescriptionItem>
                <DescriptionItem>
                  <Strong>Capital:</Strong>
                  {props.capital}
                </DescriptionItem>
              </DescriptionList>
            </CountryCol>
            <CountryCol>
              <DescriptionList>
                <DescriptionItem>
                  <Strong>Top Level Domain:</Strong>
                  {props.topLevelDomain?.join(', ')}
                </DescriptionItem>
                <DescriptionItem>
                  <Strong>Currencies:</Strong>
                  {props.currencies?.map(curr => curr.name).join(', ')}
                </DescriptionItem>
                <DescriptionItem>
                  <Strong>Languages:</Strong>
                  {props.languages?.map(lang => lang.name).join(', ')}
                </DescriptionItem>
              </DescriptionList>
            </CountryCol>
          </CountryRow>
          <DescriptionList>
            <DescriptionItem>
              <Strong>Border Countries:</Strong>
              <BtnGroup>
                {props.countryBorders.map(border => (
                  <SmallLink to={`/country/${border.id.toLowerCase()}`} key={border.id}>
                    {border.name}
                  </SmallLink>
                ))}
              </BtnGroup>
            </DescriptionItem>
          </DescriptionList>
        </CountryCol>
      </CountryRow>
    </Country>
  );
};

export default CountryDetail;
