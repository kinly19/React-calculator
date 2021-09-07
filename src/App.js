import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="calculator">

        {/* <form className="calculator__display">
          <input className="calculator__input"
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
        </form> */}
        <div className="calculator__display">
          <div className="calculator__input">
            <h2>{input}</h2>
            {/* <h2>{(input === '') ? 0 : input}</h2> */}
          </div>
        </div>

        <div className="calculator__buttons">

          <button className="calculator__button calculator__button--lg" onClick={handleClear}>Clear</button>
          <button className="calculator__button" onClick={handleBackSpace}>C</button>
          <button className="calculator__button" onClick={handleOnClick}>/</button>
          <button className="calculator__button" onClick={handleOnClick}>7</button>
          <button className="calculator__button" onClick={handleOnClick}>8</button>
          <button className="calculator__button" onClick={handleOnClick}>9</button>
          <button className="calculator__button" onClick={handleOnClick}>X</button>
          <button className="calculator__button" onClick={handleOnClick}>4</button>
          <button className="calculator__button" onClick={handleOnClick}>5</button>
          <button className="calculator__button" onClick={handleOnClick}>6</button>
          <button className="calculator__button" onClick={handleOnClick}>-</button>
          <button className="calculator__button" onClick={handleOnClick}>1</button>
          <button className="calculator__button" onClick={handleOnClick}>2</button>
          <button className="calculator__button" onClick={handleOnClick}>3</button>
          <button className="calculator__button" onClick={handleOnClick}>+</button>
          <span className="calculator__button"></span>
          <button className="calculator__button" onClick={handleOnClick}>0</button>
          <button className="calculator__button" onClick={handleOnClick}>.</button>
          <button className="calculator__button" onClick={handleEquation}>=</button>
        </div>
      </div>
    </div>
  );
}

export default App;
