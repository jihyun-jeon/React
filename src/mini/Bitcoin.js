import { useState, useEffect } from "react";

function Bitcoin() {
  const [loading, setLoading] = useState(true); //로딩중이면 렌더 안되게끔 처리
  const [coins, setCoins] = useState([]); //fetch로 받아온 비트코인 리스트  배열로 받기
  const [dal, setDal] = useState(0); // 인풋창에 입력된 달러값
  const [cost, setCost] = useState(1); // 옵션 선택시 코인값

  const onChange = (e) => setDal(() => e.target.value);
  const onSelect = (e) => setCost(() => e.target.value);

  useEffect(() => {
    fetch("https://api.coinpaprika.com/v1/tickers")
      .then((res) => res.json())
      .then((result) => {
        setLoading(false);

        setCoins(result);
      });

    // 질문1) 여기서 false로 바꾸면 api 응답오기 전에 이미 실행되버림 <- fetch코드와 별개로 먼저 실행되게 됨.
  }, []);

  return (
    <div>
      <h1>The Coins! {loading ? "" : coins.length} </h1>
      {loading ? (
        <strong>Loading...</strong>
      ) : (
        <select onChange={onSelect}>
          <option>Choice!</option>
          {coins.map((el) => (
            <option key={el.id} value={el.quotes.USD.price}>
              {el.name}({el.symbol}): ${el.quotes.USD.price} USD
            </option>
          ))}
        </select>
      )}
      <hr />
      <label htmlFor="dollar">you have</label>
      <input type="text" id="dollar" value={dal} onChange={onChange} />
      <span>$</span>
      <div>you can get {Math.floor(dal / cost)} </div>
    </div>
  );
}

export default Bitcoin;
