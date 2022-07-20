## 진행 중 오류 발생
1. ![image](https://user-images.githubusercontent.com/70733630/178493345-940d6d62-5d3e-4f28-838b-06bf05f76055.png)
* useEffect를 부르기 전이라서 오류가 남 => 조건부렌더링을 통해 해결 {popularMovies.result && <Banner movie={popularMovies.result[0]} /> }


2. ![image](https://user-images.githubusercontent.com/70733630/179444938-4b7db058-96c6-4005-8183-44c75c65655f.png)
* results를 result로 선언해서 배너가 적용되지 않음 => 오류도 뜨지 않아서 이유를 찾기 힘들었다.


3. Home에서 영화를 클릭하면 상세페이지로 넘어가서 포스터와 영화 상세내용들을 불러올 때 에러 발생
* 새로운 api 정보를 받아오기 위해 movie_id를 입력했는데, api 오류가 발생함
* Home에서 영화 슬라이드를 클릭하면 useNavigate를 이용해 바로 상세페이지로 넘어가게 만든 후 영화 상세내용들을 불러올 수 있을지 구현해보는 중
* => App.js에서 Route를 사용했기에 상세페이지로는 useNavigate를 적용안해도 갈 수 있었음.
