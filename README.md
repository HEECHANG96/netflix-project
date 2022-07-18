## 진행 중 오류 발생
1. ![image](https://user-images.githubusercontent.com/70733630/178493345-940d6d62-5d3e-4f28-838b-06bf05f76055.png)
* useEffect를 부르기 전이라서 오류가 남 => 조건부렌더링을 통해 해결 {popularMovies.result && <Banner movie={popularMovies.result[0]} /> }
2. ![image](https://user-images.githubusercontent.com/70733630/179444938-4b7db058-96c6-4005-8183-44c75c65655f.png)
* results를 result로 선언해서 배너가 적용되지 않음 => 오류도 뜨지 않아서 이유를 찾기 힘들었다.
