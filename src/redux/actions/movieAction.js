import api from "../api";

const API_KEY = process.env.REACT_APP_API_KEY;

function getMovies() {
    return async (dispatch) => {

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
        let [popularMovies, topRatedMovies, upComingMovies] =await Promise.all([
            popularMovieApi, 
            topRatedApi, 
            upComingApi
        ]);
        console.log(popularMovies);
        console.log(topRatedMovies);
        console.log(upComingMovies);
        

        // let url = `/movie/popular?api_key=<<api_key>>&language=en-US&page=1`;
        // let response = await fetch(url);
        // let data = await response.json();

        // let url2 = `/movie/top_rated?api_key=<<api_key>>&language=en-US&page=1`;
        // let response = await fetch(url2);
        // let data = await response.json();

        // let url3 = `/movie/upcoming?api_key=<<api_key>>&language=en-US&page=1`;

    };
}

export const movieAction = {
    getMovies,
};