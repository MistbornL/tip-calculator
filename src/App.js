import { useEffect, useState } from "react";
import "./App.scss";
import { Tips } from "./data/dummydata";
function App() {
  const [bill, setBill] = useState("");
  const [people, setPeople] = useState("");
  const [tip, setTip] = useState(0);
  const [tipAmount, setTipAmount] = useState(0);
  const [total, setTotal] = useState(0.0);
  useEffect(() => {
    setTipAmount((bill * tip) / 100 / people);
    setTotal(Math.round((parseInt(bill) + (bill * tip) / 100) / people));
  }, [bill, tip, people]);
  console.log(bill);

  const handleReset = () => {
    setBill("");
    setPeople("");
    setTipAmount();
    setTotal(0);
  };
  return (
    <div className="App">
      <header className="App-header">
        <h1>
          SPLI
          <br />
          TTER
        </h1>
      </header>
      <main>
        <div className="calculator">
          <div className="calculator-left">
            <div className="calculator-left-top-bottom">
              <div className="zero">
                <p>Number of People</p>
                {parseInt(bill) === 0 ? <span>Can’t be zero</span> : null}
              </div>
              <input
                value={bill}
                onChange={(e) => setBill(e.target.value)}
                type="text"
                inputMode="numeric"
                placeholder="0"
                className={parseInt(bill) === 0 ? "warning" : undefined}
              ></input>
            </div>

            <div className="calculator-left-middle">
              <p>Selected Tip %</p>
              <div className="tip-buttons">
                {Tips.map((data, index) => {
                  return (
                    <button key={index} onClick={() => setTip(data.value)}>
                      {data.value}%
                    </button>
                  );
                })}
                <input
                  onChange={(e) => setTip(e.target.value)}
                  type="text"
                  inputMode="numeric"
                  placeholder="Custom"
                ></input>
              </div>
            </div>

            <div className="calculator-left-top-bottom">
              <div className="zero">
                <p>Number of People</p>
                {parseInt(people) === 0 ? <span>Can’t be zero</span> : null}
              </div>

              <input
                value={people}
                onChange={(e) => setPeople(e.target.value)}
                type="text"
                inputMode="numeric"
                placeholder="0"
                className={parseInt(people) === 0 ? "warning" : undefined}
              ></input>
            </div>
          </div>

          <div className="calculator-right">
            <div className="calculator-right-top">
              <div className="render-amount">
                <div>
                  <h2>Tip Amount</h2>
                  <p>/ Person</p>
                </div>
                <span>${people && bill ? tipAmount : "0.00"}</span>
              </div>
              <div className="render-amount">
                <div>
                  <h2>Total </h2>
                  <p>/ Person</p>
                </div>

                <span>${people && bill ? total : "0.00"}</span>
              </div>
            </div>
            <div className="calculator-right-bottom">
              <button onClick={handleReset}>RESET</button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
