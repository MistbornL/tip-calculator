import "./App.scss";
import { Tips } from "./data/dummydata";
function App() {
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
              <input type="number" placeholder="0"></input>
            </div>

            <div className="calculator-left-middle">
              <p>Selected Tip %</p>
              <div className="tip-buttons">
                {Tips.map((data) => {
                  return <button>{data.value}</button>;
                })}
              </div>
            </div>

            <div className="calculator-left-top-bottom">
              <p>Number of People</p>
              <input type="number" placeholder="0"></input>
            </div>
          </div>

          <div className="calculator-right">
            <div className="calculator-right-top">
              <div className="render-amount">
                <h2>
                  Tip Amount <br />
                  <span>/ Person</span>
                </h2>
                <span>$0.00</span>
              </div>
              <div className="render-amount">
                <h2>
                  Total Amount <br />
                  <span>/ Person</span>
                  <span>$0.00</span>
                </h2>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
