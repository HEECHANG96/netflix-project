import React, {useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { detailAction } from '../redux/actions/detailAction';
import { ClipLoader } from 'react-spinners';
import Poster from '../components/Poster';


const MovieDetail = () => {
  let { id } = useParams();
  

  const { popularMovies, topRatedMovies, upComingMovies, loading } = useSelector(
    (state) => state.detail
    );
  console.log("DETAIL??? 123", popularMovies, topRatedMovies, upComingMovies,);

  const dispatch = useDispatch();

  useEffect( () => {
   dispatch(detailAction.getMoviesDetail(id));
  }, []);
  
  if(loading) {
    return <ClipLoader color="#ffff" loading={loading} size={150} />
  }
  
  const imageConnect = () => {
    if(id === popularMovies.id) return popularMovies;
    else if(id === topRatedMovies.id) return topRatedMovies;
    else return upComingMovies;
  };

  console.log("아이디는뭘까", id);

  return (
    <Container>
      <Row>
        <Col>
          <Poster detail={imageConnect}/>
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
      <Row>
        <Col>
          <Button>REVIEWS</Button>
          <Button>RELATED MOVIES</Button>
        </Col>
      </Row>

    </Container>
   
  )
}

export default MovieDetail