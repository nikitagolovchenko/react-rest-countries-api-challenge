import React, { FC } from 'react'
import Layout from './../../components/Layout/Layout';
import FilterBlock from './../../components/FilterBlock/FilterBlock';
import CardsBlock from '../../components/CardsBlock/CardsBlock';

const Home: FC = () => {
  return (
    <Layout>
      <FilterBlock/>
      <CardsBlock/>
    </Layout>
  )
}

export default Home
