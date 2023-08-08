import React from 'react';
import './Home.scss';
import JoinOrCreate from '../../components/JoinOrCreate/JoinOrCreate';
import PageWrapper from '../../components/PageWrapper/PageWrapper';

function Home() {
  return (
    <PageWrapper title={'Home'}>
      <JoinOrCreate />
    </PageWrapper>
  );
}

export default Home;
