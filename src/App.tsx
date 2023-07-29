import React, { useState } from 'react';
import './App.css';
import { useQuery } from '@apollo/client';
import { GET_LAUNCEHS } from './gql/Query';
import Launches from './components/Launches/Launches';
import Loader from './components/UI/Loader';
import Header from './components/UI/Header';
import Footer from './components/UI/Footer';

function App() {
  const limit: number = 30;
  const offset: number = 0;
  const order: string = 'desc';
  const sort: string = 'launch_date_utc';

  const { loading, error, data } = useQuery(GET_LAUNCEHS, {
    variables: { limit: limit, order: order, sort: sort, offset: offset }
  });

  return (
    <div className="App">
      <Header />
      <div className='flex justify-center items-center mb-6 min-h-max'>
        <div className='container py-8'>
          {
            loading ? <Loader />
              : (
                error ? <p>Error.</p>
                  : <Launches items={data} />
              )
          }
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
