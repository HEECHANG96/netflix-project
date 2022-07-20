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
            const genreApi = api.get(
                `/genre/movie/list?api_key=${API_KEY}&language=en-US`
                );

           
            // 각각의 API 호출을 동시에 진행시키고 이 3개의 데이터가 다 올때까지만 기다린다.
            let [popularMovies, topRatedMovies, upComingMovies, genreList, movieImages] = await Promise.all([
                popularMovieApi, 
                topRatedApi, 
                upComingApi,
                genreApi,
              
        
            ]);
            console.log("movieImages?", movieImages);
    
    
            dispatch({
                type: "GET_MOVIES_SUCCESS",
                payload: { 
                    popularMovies : popularMovies.data, 
                    topRatedMovies : topRatedMovies.data, 
                    upComingMovies : upComingMovies.data,
                    genreList : genreList.data.genres,
                  
                  
                },
            });
        } catch(error) {
            // 에러 핸들링 하는 곳
            dispatch({type: "GET_MOVIES_FAILURE"})
        }
    };
}

function getMoviesDetail(id) {
    return async (dispatch) => {
        try {
            dispatch({type:"GET_MOVIES_REQUEST"});
            const popularMovieApi = api.get(
                `/movie/${id}popular?api_key=${API_KEY}&language=en-US&page=1`
                );
            const topRatedApi = api.get(
                `/movie/${id}top_rated?api_key=${API_KEY}&language=en-US&page=1`
                );
            const upComingApi = api.get(
                `/movie/${id}upcoming?api_key=${API_KEY}&language=en-US&page=1`
                );
            const genreApi = api.get(
                `/genre/movie/list?api_key=${API_KEY}&language=en-US`
                );
            const imageApi = api.get(
                `/movie/${id}/images?api_key=${API_KEY}&language=en-US`
                );    

           
            // 각각의 API 호출을 동시에 진행시키고 이 3개의 데이터가 다 올때까지만 기다린다.
            let [popularMovies, topRatedMovies, upComingMovies, genreList, imageList] = await Promise.all([
                popularMovieApi, 
                topRatedApi, 
                upComingApi,
                genreApi,
                imageApi,
              
        
            ]);
            
    
    
            dispatch({
                type: "GET_MOVIES_SUCCESS",
                payload: { 
                    popularMovies : popularMovies.data, 
                    topRatedMovies : topRatedMovies.data, 
                    upComingMovies : upComingMovies.data,
                    genreList : genreList.data.genres,
                    imageList : imageList.data,
                  
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
    getMoviesDetail,
};