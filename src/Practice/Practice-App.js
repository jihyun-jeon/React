import { useState } from "react";
import { useEffect } from "react/cjs/react.development";

function PracticeApp() {
  const [load, setLoad] = useState(true);
  const [data, setData] = useState([]);
  const [dal, setDal] = useState(0);
  const [haveDal, setHaveDal] = useState(0);

  useEffect(() => {
    fetch("https://api.coinpaprika.com/v1/tickers")
      .then((res) => res.json())
      .then((result) => {
        setData(() => result);
        setLoad((cur) => !cur);
      });
  }, []);

  const onSelect = (e) => setDal(() => e.target.value);
  const onWrite = (e) => setHaveDal(() => e.target.value);

  return (
    <div>
      <h1>The Coins! </h1>
      {load ? (
        "Loading..."
      ) : (
        <>
          <select onChange={onSelect}>
            <option>choice!</option>
            {data.map((el) => (
              <option key={el.id} value={el.quotes.USD.price}>
                {el.name}({el.symbol}): ${el.quotes.USD.price} USD
              </option>
            ))}
          </select>
          <hr />
          <div>
            you have{" "}
            <input placeholder="dollar" value={dal} onChange={onWrite} />
          </div>
          <div>
            you can get <span>{Math.floor(haveDal / dal)}</span>개
          </div>
        </>
      )}
    </div>
  );
}

export default PracticeApp;
