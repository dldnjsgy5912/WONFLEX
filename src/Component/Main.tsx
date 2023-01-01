import React from 'react';
import Movies from './Movies';
import PopularMovies from './PopularMovies';

const Main = () => {
  return (
    <>
      <PopularMovies />
      <hr />
      <Movies />
    </>
  );
};

export default Main;
