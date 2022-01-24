import Dice from "./Dice";
import HandIcon from "./HandIcon";

function Board({ name, color, history }) {
  const num = history[history.length - 1];
  const sum = history.reduce((a, b) => {
    return a + b;
  }, 0);

  return (
    <>
      <h3>{name}</h3>
      {/*컴포넌트 함수 실행이 아니라, 속성 props 전달할 뿐임! 따라서 버튼 컴포넌트에서 이벤트 등록해 줘야 함.*/}
      {/* <Button action="굴리기" diceAct={diceRoll} />
      <Button action="처음으로" diceAct={diceReset} /> */}
      <div>
        <Dice color={color} num={num} />
      </div>
      <HandIcon value="rock" />
      <HandIcon value="scissor" />
      <HandIcon value="paper" />
      <div>
        <h2>총점: {sum}</h2>
        <h2>
          기록:
          {history.join(", ")}{" "}
          {/*join(): 배열의 요소들을 문자로 연결하게 됨. */}
          {/* <ul>
            {history.map((el) => (
              <li>{el}</li>
            ))}
          </ul> */}
        </h2>
      </div>
    </>
  );
}

export default Board;
