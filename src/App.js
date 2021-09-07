import logo from './logo.svg';
import './App.css';

function App() {

  //state to display value
  const [input, setInput] = useState(0);
  const ops = ['.', '+', '-', '*', 'X', '/'] // used this to check if the input already has any of these values

  // console.log('Input is ' + input)
  // console.log("input length is " + input.length)

  const handleOnClick = (e) => {

    let parsedInput = String(input); //our handleEquation() function will return an integer value, so we need to turn it back into a string otherwise logic below will error on .slice() method

    if ((ops.includes(e.target.innerText) && input === 0) || (ops.includes(e.target.innerText) && ops.includes(parsedInput.slice(-1)))) {

      console.log("already have this ops")
      return //return nothing

    } else {

      if (input === 0) {
        setInput(e.target.innerText)

      } else if ((input.slice() === '0' && e.target.innerText === '0') || (input.slice() === '.' && e.target.innerText === '.')) {
        return
      } else {

        setInput(input + e.target.innerText.replaceAll('X', '*'))
      }

    }

  }

  const handleClear = () => {
    setInput(0);
  }

  const handleBackSpace = () => {

    if ((typeof (input) !== "string") || input.length <= 1) { //if its not a type of string after equation when clicking C button it will revert everything back to 0 instead of trying to backspace with slice
      setInput(0)
      console.log("a")
    } else {
      setInput(input.slice('', input.length - 1));
      console.log("b")
    }

    // (typeof (input) !== "string") ? setInput(0) : (input > 1) ? setInput(input.slice('', input.length - 1)) : setInput(0)

  }

  const handleEquation = () => {

    //we want to handle, if the user did something like 1+ = to return nothing

    //if the inputs length to start with is greater than 1 (undefined at start 0 and string "0")&& the inputs last value includes an ops - const ops = ['.', '+', '-', '*', 'X', '/'] 
    if (input.length > 0 && ops.includes(input.slice(-1))) { // && both need to be true
      alert("You  broke it");
      return

    } else {

      function parse(str) {
        return Function(`'use strict'; return(${str})`)()
      }

      setInput(parseFloat(parse(input)))//we take the function above to turn our string into a value
      console.log('parsed input is ' + parse(input))
    }

  }

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
