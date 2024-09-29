import "./App.css"
import { useState } from "react";

function App() {

  const [firstValue, setFirstValue] = useState('0');
  const [operator, setOperator] = useState('');
  const [secondValue, setSecondValue] = useState('0');
  const [result, setResult] = useState('0');
  const [storedValue, setStoredValue] = useState('0');

  const handleFirstNumberClick = (value) => {
    setFirstValue((prev) => (prev === '0' ? value : prev + value));
  };

  const handleSecondNumberClick = (value) => {
    setSecondValue((prev) => (prev === '0' ? value : prev + value));
  };
  const handleOperatorClick = (op) => {
    setOperator(op);
  };

  const calculateResult = () => {
    let num1 = parseFloat(firstValue);
    let num2 = parseFloat(secondValue);
    let res;

    switch (operator) {
      case '+':
        res = num1 + num2;
        break;
      case '-':
        res = num1 - num2;
        break;
      case '*':
        res = num1 * num2;
        break;
      case '÷':
        res = num2 !== 0 ? num1 / num2 : 'Error';
        break;
      default:
        return;
    }

    setResult(res);
    setFirstValue(num1);
    setSecondValue(num2);
    setOperator(operator);
  };

  const clearFirst = () => {
    setFirstValue('0');
  };

  const clearSecond = () => {
    setSecondValue('0');
  };

  const storeValue = () => {
    setStoredValue(result);
  };

  const RecallFirst = () => {
    setFirstValue(storedValue);
  };

  const RecallSecond = () => {
    setSecondValue(storedValue);
  };

  return (
    <div className="calculator">
      <div className="panel">
        <p>{firstValue}</p>
        <div className="numbers">
          {Array.from({ length: 10 }, (_, i) => (
            <button key={i} onClick={() => handleFirstNumberClick(i.toString())}>{i}</button>
          ))}
          <button onClick={clearFirst}>Clear</button>
          <button onClick={RecallFirst}>Recall</button>
        </div>
      </div>

      <div className="panel">
        <p>{operator}</p>
        <div className="numbers">
          <button onClick={() => handleOperatorClick('+')}>+</button>
          <button onClick={() => handleOperatorClick('-')}>-</button>
          <button onClick={() => handleOperatorClick('*')}>*</button>
          <button onClick={() => handleOperatorClick('÷')}>÷</button>
        </div>
      </div>

      <div className="panel">
        <p>{secondValue}</p>
        <div className="numbers">
          {Array.from({ length: 10 }, (_, i) => (
            <button key={i} onClick={() => handleSecondNumberClick(i.toString())}>{i}</button>
          ))}
          <button onClick={clearSecond}>Clear</button>
          <button onClick={RecallSecond}>Recall</button>
        </div>
      </div>
      <div className="panel answer">
        <p>{result}</p>
        <div>
          <button onClick={calculateResult}>=</button>
          <button onClick={storeValue}>Store</button>
        </div>
      </div>
    </div>
  )
}
export default App
