## 진행 중 오류 발생
* ![image](https://user-images.githubusercontent.com/70733630/178493345-940d6d62-5d3e-4f28-838b-06bf05f76055.png)
* useEffect를 부르기 전이라서 오류가 남 => 조건부렌더링을 통해 해결 {popularMovies.result && <Banner movie={popularMovies.result[0]} /> }
