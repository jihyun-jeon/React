import { useState } from "react";
import Board from "./onePerson";
import Button from "./Button";
import "./dice.css";

const randomNum = function () {
  return Math.ceil(Math.random() * 6); // 1-6
};

function App() {
  // state값이 바뀔떄 마다 자동으로 리렌더 됨.
  // virtual Dom : 리렌더 될때 전체가 리렌더 되는게 아니라, 바뀐 값만 딱 리렌더 됨.
  const [myHistory, setHis] = useState([]);
  const [otherHistory, otherSetHis] = useState([]);

  /* < state lifting :자식 컴포넌트의 스테이트를 부모 컴포넌트로 올려주는 것> 
  (App가 부모 컴포넌트, Board가 자식 컴포넌트 임.)
  위 두개 state는 Board 컴포넌트에 대한 state인데, 부모 컴포넌트인 App에서 이 두 스테이트를 한번에 관리하고 있는 것임.
  부모 컴포넌트에서 스테이트 만든 후, 자식 컴포넌트인 Board에게 props로 넘겨주고 있음
  */

  const diceRoll = () => {
    const nextNum = randomNum();
    const otherNextNum = randomNum();

    setHis((curArr) => (curArr = [...myHistory, nextNum]));
    otherSetHis((curArr) => (curArr = [...otherHistory, otherNextNum]));
    /* 
    setHis(myHistory.push(nextNum)) 이런식으로 기존에 있는 배열을 수정하여 modify하는건 옳지않음. state 변경이 안되어 리렌더링 일어나지x!
    이유: myHistory은 배열이기 떄문에 값 자체를 갖고있는게 아니라, 그 배열의 주소값을 참조하고 있는 것임.(배열은 referrence type)
         따라서 배열에 push를 했다 하더라도 여전히 같은 주소값을 가리치고 있어서 값자체 즉 state값이 바뀌었다고 볼 수 없음!
      */
  };

  const diceReset = () => {
    setHis((cur) => (cur = []));
    otherSetHis((cur) => (cur = []));
  };

  return (
    <>
      <h1>주사위 게임</h1>
      {/* 각 Button의 마진을 조절하는 것은 버튼 컴포넌트 내부에서 하는게 아니라, 이렇게 요소의 외부적으로 영향을 끼칠만한 스타일은 
          Button외부의 컴포넌트인 App컴포넌트 관점에서 하는게 더 좋음. "자식요소들 간의 여백을 조절할 수 있어서" */}
      <div className="app">
        <Button
          styleName="appBtn"
          action="굴리기"
          diceAct={diceRoll}
          btnColor="blue"
        />
        <Button
          styleName="appBtn"
          action="처음으로"
          diceAct={diceReset}
          btnColor="red"
        />
      </div>

      <Board name="me" color="blue" history={myHistory} />
      <hr />
      <Board name="you" color="red" history={otherHistory} />
    </>
  );
}

export default App;
