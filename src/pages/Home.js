import React, { useEffect } from 'react';
import { movieAction } from '../redux/actions/movieAction';
import { useDispatch, useSelector } from 'react-redux';
import Banner from "../components/Banner";
import MovieSlide from '../components/MovieSlide';
import ClipLoader from "react-spinners/ClipLoader";
import { useNavigate } from 'react-router-dom';





const Home = () => {
 
  const dispatch = useDispatch();
  const { popularMovies, topRatedMovies, upComingMovies, loading } = useSelector(
    (state) => state.movie
    );
  console.log("popular", popularMovies);

  let navigate = useNavigate();
  const goToDetail=()=>{
    navigate('/:id');
  }

  useEffect( () => {
    dispatch(movieAction.getMovies());
  }, []);

  // loading이 true : loading 스피너를 보여준다.
  // loading이 false : 데이터를 보여준다.

  // true : 데이터 도착 전
  // false : 데이터 도착 후, 에러가 났을 때
  if(loading) {
    return <ClipLoader color="#ffff" loading={loading} size={150} />
  }

  return (
    <div>
      <Banner movie={popularMovies.results[0]} />
      <h1>Popular Movie</h1>
      <MovieSlide movies={popularMovies} onClick={goToDetail}/>
      <h1>Top rated Movie</h1>
      <MovieSlide movies={topRatedMovies} onClick={goToDetail}/>
      <h1>Upcoming Movie</h1>
      <MovieSlide movies={upComingMovies} onClick={goToDetail}/>
    </div>
  )
}

export default Home;