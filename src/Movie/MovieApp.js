/*
react-router-dom : 페이지의 로딩없이(새로고침 할 필요 없이),페이지에 필요한 컴포넌트를 불러와 렌더링 하도록 도와줌.
BrowserRouter - history API를 사용해 URL과 UI를 동기화하는 라우터입니다.
Router- 컴포넌트의 속성에 설정된 URL과 현재 경로가 일치하면 해당하는 컴포넌트, 함수를 렌더링한다.
Route(옛날Switch) - 자식 컴포넌트 Route또는 Redirect중 매치되는 첫 번째 요소를 렌더링합니다. 
    Switch를 사용하면 BrowserRouter만 사용할 때와 다르게 하나의 매칭되는 요소만 렌더링한다는 점을 보장해줍니다. 사용하지 않을 경우 매칭되는 모두를 렌더링합니다.
Link - 'a'태그와 비슷합니다. to속성에 설정된 링크로 이동합니다. 기록이 history스택에 저장됩니다.link - 브라우저의 새로고침 없이도, 유저를 다른 페이지로 이동시켜주는 컴포넌트
*/

// 질문1 - import할때 {} 쓰고 안쓰고의 차이?
// module syntax: 모듈구문임. 서로의 기능을 공유하기 위해 쓰임
// default로 export하면 {}없이, 그냥 export하면 {}넣어서 import하게 됨.({}넣는건 객체 비구조화 할당 개념임)

//react-router-dom :
// as: BrowserRouter라는 export를 Router로 이름을 바꾸기 위해 쓰임.
// 1)./ 현재폴더, 2)../현재폴더의 상위의 폴더, 3)./로 시작하지 않으면 npm install해서 생성된  node_modules 파일에서 찾게됨.
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; // 질문1 react-router-dom 언제 활용되는건지?
import Detail from "./Detail";
import Home from "./Home";

// component - 사용자가 정의해서 태그를 만드는 것.
// 컴포넌트를 생성하는 함수임.
function MovieApp() {
  return (
    <Router>
      {/*Router가 해당 경로일때 그 컴포넌트를 보여줌 */}
      {/*사용자의 url주소에 따라 어떤 페이지를 렌더할지 결정됨
        (유저의 경로가"/"이면 home일때, "/movie"이면 홈에서 나아가 다른 경로일떄) */}
      <Routes>
        {/*Route: url를 의미 */}
        {/*Route 컴포넌트 쓸때만! path에 ":변수"를 쓸 수 있음. 이후 Detail함수에서 useParms로 이 변수를 가져올 수 있음*/}
        <Route path="/" element={<Home />}></Route>
        <Route path="/movie/:id" element={<Detail />}></Route>
      </Routes>
    </Router>
  );
}

export default MovieApp;
