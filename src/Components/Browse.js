import React from 'react'
import Header from './Header'
import useGetNowPlayingMovies from '../hooks/useGetNowPlayingMovies';
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';
import usePopularMovies from '../hooks/usePopularMovies';
import useTopRatedMovies from '../hooks/useTopRatedMovies';
import useUpComingMovies from '../hooks/useUpComingMovies';

const Browse = () => {
  useGetNowPlayingMovies();
  usePopularMovies();
  useTopRatedMovies();
  useUpComingMovies();
  return (
    <div>
      <Header/>
      <MainContainer/>
      <SecondaryContainer/>
    </div>
  )
}

export default Browse;

// Main container
//   - Background movie
//   - movie title
// Secondary container
//   - Movie list * n
//     - movie cards*n