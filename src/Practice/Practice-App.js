import { useEffect, useState } from "react/cjs/react.development";

function Bitcoin() {
  //1.
  const [show, setShow] = useState(true);
  const [coins, setCoins] = useState([]);

  //2.
  const [OptionV, setOptionV] = useState("");
  const [inputV, setInputV] = useState(0);
  const optionChange = (e) => setOptionV(() => e.target.value);
  const onInput = (e) => setInputV(e.target.value);

  useEffect(() => {
    fetch("https://api.coinpaprika.com/v1/tickers")
      .then((res) => res.json())
      .then((result) => {
        setCoins(result.slice(0, 11));
        setShow((cur) => !cur);
      });
  }, []);

  return (
    <>
      {show ? (
        <h1>Loading...</h1>
      ) : (
        <>
          <h1>The Coins!</h1>
          <select onChange={optionChange}>
            <option key="choice" selected>
              ---------- choice ----------
            </option>
            {coins.map((el) => (
              <option key={el.id} value={el.quotes.USD.price}>
                {el.name}: ${el.quotes.USD.price} USD
              </option>
            ))}
          </select>
          <hr />
          <label for="dollar">you have</label>
          <input id="dollar" onChange={onInput} />
          <span>$</span>
          <div>you can get :{Math.floor(inputV / OptionV)} 개</div>
        </>
      )}
    </>
  );
}

export default Bitcoin;
