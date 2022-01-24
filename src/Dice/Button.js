import "./btn.css";

function Button({ action, diceAct, btnColor = "blue", styleName = "" }) {
  // color의 기본값을 블루로 줌
  const classNames = `baseStyle ${btnColor} ${styleName}`; // 두개의 클래스를 줌
  return (
    <>
      {/*스타일도 props처럼 적용됨. style={속성:값} <-이렇게 객체로 스타일값을 줌 */}
      <button onClick={diceAct} className={classNames}>
        {action}
      </button>
    </>
  );
}

export default Button;
