import { useState } from 'react';
import './App.scss';

function App() {
  //state to display value
  const [input, setInput] = useState('');
  const [prevInput, setPrevInput] = useState('')
  const ops = ['.', '+', '-', '*', 'X', '/'] // used this to check if the input already has any of these values


  const handleOnClick = (e) => {

    // let parsedInput = String(input); //our handleEquation() function will return an integer value, so we need to turn it back into a string otherwise logic below will error on .slice() method

    if ((ops.includes(e.target.innerText) && input === '') || (ops.includes(e.target.innerText) && ops.includes(String(input).slice(-1)))) { //stop us from adding multiple if there is no input 
      console.log('A')
      return //return nothing

    } else if (ops.slice(1).includes(e.target.innerText)) { //if any of the clicked buttons is an Operator (minus '.' with ops.slice(1)) run function 
      handleOperator(e)
      console.log('B')
    } else if (input === '' || typeof (input) !== 'string') { // if the input is an empty string or after calculator evaluates and returns a value(stops user from adding onto a calculated value)
      setInput(e.target.innerText)
      console.log('C')
    } else if ((input === '0' && e.target.innerText === '0') || (input.includes('.') && e.target.innerText === '.')) {
      console.log('D')
      return
    } else {
      console.log('F')
      setInput(input + e.target.innerText.replaceAll('X', '*'))
    }

  }

  const handleOperator = (e) => {

    setPrevInput(parse(prevInput + input) + e.target.innerText); //instead of showing the concat value of prevInput eg(10+10+10+10+10) we show the calculated value (50 +)
    setInput('');
  }

  const handleClear = () => {
    setInput('');
    setPrevInput('')
  }

  const handleBackSpace = () => {

    if ((typeof (input) !== "string") || input.length <= 1) { //if its not a type of string after equation when clicking C button it will revert everything back to 0 instead of trying to backspace with slice
      setInput('')
      console.log("a")
    } else {
      setInput(input.slice('', input.length - 1));
      console.log("b")
    }

    // (typeof (input) !== "string") ? setInput(0) : (input > 1) ? setInput(input.slice('', input.length - 1)) : setInput(0)

  }

  function parse(str) {
    return Function(`'use strict'; return(${str})`)()
  }

  const handleEquation = () => {

    if ((input === '' && ops.includes(prevInput.slice(-1))) || (input === '' && prevInput === '')) {
      return
    } else {
      setInput(parseFloat(parse(prevInput + input)))//we take the function above to turn our string into a value
      setPrevInput('')
    }

  }

  return (
    <div className="App">
      <div className="calculator">

        <div className="calculator__display">
          <div className="calculator__prevInput">
            <h3>{prevInput}</h3>
          </div>
          <div className="calculator__input">
            <h2>{(input === '') ? 0 : input}</h2>
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
