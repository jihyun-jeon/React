export function LoanApp() {
  return (
    <>
      <MoneyKr value={120500001} noNumber />
      <MoneyKr value={120500001} />
      <br />
      <MoneyKr value={123000001} noNumber />
      <MoneyKr value={123000001} />
      <br />
      <MoneyKr value={170000001} noNumber />
      <MoneyKr value={170000001} />
      <br />
      <MoneyKr value={200000001} noNumber />
      <MoneyKr value={200000001} />
      <br />
      <MoneyKr value={123400000} noNumber />
      <MoneyKr value={123400000} />
      <br />
      <MoneyKr value={123000000} noNumber />
      <MoneyKr value={123000000} />
      <br />
      <MoneyKr value={120000000} noNumber />
      <MoneyKr value={120000000} />
      <br />
      <MoneyKr value={100000000} noNumber />
      <MoneyKr value={100000000} />
      <br />
      <MoneyKr value={100010000} noNumber />
      <MoneyKr value={100010000} />
    </>
  );
}

export function MoneyKr({ value, noNumber }) {
  const units = [
    100_000_000, 10_000_000, 1_000_000, 100_000, 10_000, 1_000, 100, 10, 1,
  ];
  const unitsKr = ["억", "천", "백", "십", "만", "천", "백", "십", ""];
  const korean = ["", "일", "이", "삼", "사", "오", "육", "칠", "팔", "구"];

  let result = "";

  (function () {
    let howmanyArr = []; // [1,2,0,5,0,0,0,0,1]
    // <각 단위별로 몇개 있는지 파악하여 객체로 만들어줌>
    for (let i = 0; i < units.length; i++) {
      let currency = units[i];
      let howmany = 0;

      while (value >= currency) {
        value -= currency;
        howmany += 1;
      }
      howmanyArr.push(howmany);

      if (howmany > 0) {
        if (noNumber) {
          result += `${howmany}${unitsKr[i]}`;
        } else {
          result += `${korean[howmany]}${unitsKr[i]}`;
        }
      }
    }

    // <천만,백만,십만 나오는 경우>
    // let howmanyArr = []; // [1,"0,0,0,1",0,0,0,0]
    //arr[1]일때 arr[234]의 합이 0이면,arr[2]일때 arr[34]의 합이 0이면,arr[3]일때 arr[4]의 합이 0이면
    for (let i = 1; i < 4; i++) {
      let cur = howmanyArr[i]; // 2 0 5
      let rest = 0; // 5 5 0
      // 1억원 대 숫자만 있는 경우 천만이후 자리 따지지 않도록
      if (cur === 0) {
        continue;
      }
      for (let j = 1 + i; j < 5; j++) {
        rest += howmanyArr[j];
      }
      if (cur === cur - rest) {
        result += "만";
        break;
      }
    }

    //
  })();

  return (
    <>
      <div>{result}원</div>
    </>
  );
}

/*
function LoanApp() {

  return (
    <div className="container">
      <input className="inputEl" placeholder="" />
      <input className="inputEl" placeholder="" />
      <div className="keyboard">
        <div>
          <button className="btn" >1</button>
          <button className="btn">2</button>
          <button className="btn">3</button>
        </div>
        <div>
          <button className="btn">4</button>
          <button className="btn">5</button>
          <button className="btn">6</button>
        </div>
        <div>
          <button className="btn">7</button>
          <button className="btn">8</button>
          <button className="btn">9</button>
        </div>
        <div>
          <button className="btn">취소</button>
          <button className="btn">0</button>
          <button className="btn">🔙</button>
        </div>
      </div>
    </div>
  );
}

export default LoanApp;
*/
