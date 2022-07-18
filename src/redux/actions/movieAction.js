import api from "../api";

const API_KEY = process.env.REACT_APP_API_KEY;

function getMovies() {
    return async (dispatch) => {
        try {
            dispatch({type:"GET_MOVIES_REQUEST"});
            const popularMovieApi = api.get(
                `/movie/popular?api_key=${API_KEY}&language=en-US&page=1`
                );
    
            const topRatedApi = api.get(
                `/movie/top_rated?api_key=${API_KEY}&language=en-US&page=1`
                );
    
            const upComingApi = api.get(
                `/movie/upcoming?api_key=${API_KEY}&language=en-US&page=1`
                );
            
            // 각각의 API 호출을 동시에 진행시키고 이 3개의 데이터가 다 올때까지만 기다린다.
            let [popularMovies, topRatedMovies, upComingMovies] = await Promise.all([
                popularMovieApi, 
                topRatedApi, 
                upComingApi
            ]);
    
    
            dispatch({
                type: "GET_MOVIES_SUCCESS",
                payload: { 
                    popularMovies : popularMovies.data, 
                    topRatedMovies : topRatedMovies.data, 
                    upComingMovies : upComingMovies.data 
                },
            });
        } catch(error) {
            // 에러 핸들링 하는 곳
            dispatch({type: "GET_MOVIES_FAILURE"})
        }
    };
}

export const movieAction = {
    getMovies,
};