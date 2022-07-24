import { useState } from "react";
import "./App.scss";
import { Tips } from "./data/dummydata";
function App() {
  const [bill, setBill] = useState(0);
  const [people, setPeople] = useState(0);
  const [custom, setCustom] = useState(0);

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
              <p>Bill</p>
              <input
                onChange={(e) => setBill(e.target.value)}
                type="text"
                inputMode="numeric"
                placeholder="0"
              ></input>
            </div>

            <div className="calculator-left-middle">
              <p>Selected Tip %</p>
              <div className="tip-buttons">
                {Tips.map((data) => {
                  return <button>{data.value}%</button>;
                })}
                <input
                  onChange={(e) => setCustom(e.target.value)}
                  type="text"
                  inputMode="numeric"
                  placeholder="Custom"
                ></input>
              </div>
            </div>

            <div className="calculator-left-top-bottom">
              <p>Number of People</p>
              <input
                onChange={(e) => setPeople(e.target.value)}
                type="text"
                inputMode="numeric"
                placeholder="0"
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
                <span>$0.00</span>
              </div>
              <div className="render-amount">
                <div>
                  <h2>Total </h2>
                  <p>/ Person</p>
                </div>

                <span>$0.00</span>
              </div>
            </div>
            <div className="calculator-right-bottom">
              <button>RESET</button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
