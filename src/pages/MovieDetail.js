import React, {useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import { movieAction } from '../redux/actions/movieAction';
import { ClipLoader } from 'react-spinners';

const MovieDetail = () => {
  let { id } = useParams();
  

  const { imageList, loading } = useSelector(
    (state) => state.movie
    );
 

  const dispatch = useDispatch();
  const getMoviesDetail = () => {
    dispatch(movieAction.getMoviesDetail(id))
  }

  useEffect( () => {
    getMoviesDetail();
  }, []);
  
  if(loading) {
    return <ClipLoader color="#ffff" loading={loading} size={150} />
  }


  return (
    <Container>
      <Row>
        <Col>
          <img src={imageList?.img}/>
        </Col>
        <Col>
          <h1>ddd</h1>
          <h2>genre</h2>
          <h3>영화 인기도</h3>
          <h4>영화 줄거리</h4>
          <h5>예산</h5>
          <h5>개봉일</h5>
        </Col>
      </Row>
    </Container>
   
  )
}

export default MovieDetail