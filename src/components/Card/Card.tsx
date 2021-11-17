import React, { FC } from 'react';
import { useNavigate } from 'react-router';
import { DescriptionItem, DescriptionList, Strong } from '../common';
import {
  CardBody,
  CardImg,
  CardImgHolder,
  CardItem,
  CardTitle,
} from './Card.styles';

const Card: FC<Country> = props => {
  const navigate = useNavigate();

  return (
    <CardItem onClick={() => navigate(`country/${props.alpha3Code.toLowerCase()}`)}>
      <CardImgHolder>
        <CardImg src={props.flag} alt={props.name} />
      </CardImgHolder>
      <CardBody>
        <CardTitle>{props.name}</CardTitle>
        <DescriptionList>
          <DescriptionItem>
            <Strong>Population:</Strong> {props.population}
          </DescriptionItem>
          <DescriptionItem>
            <Strong>Region:</Strong> {props.region}
          </DescriptionItem>
          <DescriptionItem>
            <Strong>Capital:</Strong> {props.capital}
          </DescriptionItem>
        </DescriptionList>
      </CardBody>
    </CardItem>
  );
};

export default Card;
