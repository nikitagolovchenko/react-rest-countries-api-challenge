import React, { FC, useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router';
import { BackLink } from '../../components/common';
import CountryDetail from '../../components/CountryDetal/CountryDetail';
import { detailCountry, findBorders } from '../../store/slices/countrySlice';
import Layout from './../../components/Layout/Layout';
import { useAppDispatch, useAppSelector } from './../../hooks/reduxHooks';
import { selectCountry } from './../../store/slices/countrySlice';
import { BsArrowLeft } from 'react-icons/bs';

const Detail: FC = () => {
  const { id } = useParams();
  const dispatch = useAppDispatch();
  const { countryDetail, countryDetailBorders, countries } =
    useAppSelector(selectCountry);
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(detailCountry(id as string));
  }, [id, countries]);

  useEffect(() => {
    if (countryDetail !== undefined && countryDetail.borders?.length) {
      dispatch(findBorders((countryDetail as Country).borders as string[]));
    }
  }, [countryDetail]);

  return (
    <Layout>
      <BackLink onClick={() => navigate(-1)}>
        <BsArrowLeft />
        Back
      </BackLink>
      <CountryDetail
        {...(countryDetail as Country)}
        countryBorders={countryDetailBorders}
      />
    </Layout>
  );
};

export default Detail;
