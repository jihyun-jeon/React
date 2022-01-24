import { useState, useEffect } from "react";
/*useState: state가 변화할 때마다 리렌더 해줌 */
/* useEffect(callback, []) <- 첫번째 인자는 함수(실행하려는 코드), 두번째 인자(지켜보려는 것)은 배열임.
: state 값이 바뀔때마다 계속 컴포넌트가 리렌더 되는게 아니고, 어떤 "특정 값"이 바뀌었을 때만 리렌더 되도록 선택권을 줄 수 있게됨.

: 대표적인 사용법 => API를 딱 한번만 호출하고 그 뒤로는 다시는 호출하기 싫은 경우
   빈배열을 주면, react가 지켜볼게 아무것도 없어서 처음 렌더시 한번만 실행됨.

: 배열에 값을 주면, 해당 리스트의 값이 변화할 때마다 리렌더가 실행됨.
*/

function Uses() {
  // const [counter, setValue] = useState(0);
  // const [keyword, setKeyword] = useState("");
  // const onClick = () => setValue((prev) => prev + 1);
  // const onChange = (e) => setKeyword(e.target.value);

  // // 1.값이 바뀔때마다  계속 컴포넌트가 리렌더 됨.
  // console.log("i run all the time");
  // // 2.빈배열 - 처음 렌더시에  컴포넌트가 한번만 실행됨
  // useEffect(() => {
  //   console.log("I run only once");
  // }, []);
  // // 3.keyword가 변할때만 코드렌더를 여러번 실행하게 됨. <-react에게 keyword를 지켜봐 라고 말한 것임
  // useEffect(() => {
  //   console.log("I run when keyword changes");
  // }, [keyword]);
  // // 4.counter가 변할때만 코드렌더를 여러번 실행하게 됨.
  // useEffect(() => {
  //   console.log("I run when counter changes");
  // }, [counter]);
  // // 5.counter 또는 keyword가 변할때만 코드렌더를 여러번 실행하게 됨.
  // useEffect(() => {
  //   console.log("I run when 'counter or keyword' changes");
  // }, [keyword, counter]);

  // return (
  //   <div>
  //     <h1 className={styles.title}>Welcome back!</h1>
  //     <button text={"Continue"} />
  //     <hr />
  //     <input
  //       type="text"
  //       placeholder="Search here"
  //       onChange={onChange}
  //       value={keyword}
  //     />
  //     <h1>{counter}</h1>
  //     <button onClick={onClick}>Click!</button>
  //   </div>
  // );

  // <cleanup function>
  const [showing, setShowing] = useState(false);
  const onClick = () => setShowing((prev) => !prev);

  return (
    <div>
      {showing ? <Hello /> : null}
      {/*false여서 hide할때는 컴포넌트를 스크린에서 아예 지워주고 있음 */}
      {/*jsx에서 if문, for문, 함수선언문 같은 자바스크립트 문법은 사용할 수 없음 */}
      <button onClick={onClick}>{showing ? "Hide" : "Show"}</button>
    </div>
  );
}

function Hello() {
  // 질문1. Hello 컴포넌트가 없어질떄 어떻게 byFn이 실행되는지??
  // <cleanup function>
  // cleanup function <- hello컴포넌트가 문서에서 unmount 될때 즉,없어질떄 뭔가 할 수 있도록 해주게 됨 (그냥 useEffect의 속성임)
  // useEffcet의 뒷정리를 한다. -> state에서 값 지울때 실행됨
  useEffect(() => {
    console.log("I'm created :)");
    return () => console.log("destroyed :(");
  }, []);
  return <div>Hello</div>;
}

export default Uses;
