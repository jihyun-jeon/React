import React from "react";
// create react app 파일 생성할 시, babel이 자동으로 생성됨. 따라서 jsx코드가 자동으로 자바스크립트로 변환해서 배포하게 됨.
// 트랜스 파일러: 바벨같이 코드를 자동으로 변환해주는거
// ㄴ기능1: 최신 js 문법들을 각 브라우저 환경에 맞게 옛날 코드로 변환하기 위해
// ㄴ기능2: react를 jsx로 사용하기 편하게 해 주는 역활
// ㄴ기능3: typescript를 사용할 수 있게 해주는 역활

import ReactDOM from "react-dom";
import Uses from "./mini/useEffectPrac";
import Todolist from "./mini/Todolist";
import PracticeApp from "./Practice/Practice-App";
import Bitcoin from "./mini/Bitcoin";
import MovieApp from "./Movie/MovieApp";
import DiceApp from "./Dice/DiceApp";
import { LoanApp } from "./Loan/LoanApp";

ReactDOM.render(
  <React.StrictMode>
    <PracticeApp />
    {/* <MovieApp /> */}
    {/* <Todolist /> */}
    {/* {<Bitcoin />} */}
    {/* <Uses /> */}
    {/* <DiceApp /> */}
    {/* <LoanApp /> */}
  </React.StrictMode>,
  document.getElementById("root")
);
