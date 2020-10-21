import React, { useState } from "react";

import "./styles.css";
import Calculator from "./Calculator";

function App() {
  //useState returns 2 things (we choose the naming),
  //useState(0) - zero is the initial value of leftDigit:
  //leftDigit is the dynamic data
  //setLeftDigit is the function to update leftDigit
  const [leftDigit, setLeftDigit] = useState(0);
  const [rightDigit, setRightDigit] = useState(0);
  const [operation, setOperation] = useState("");
  const [result, setResult] = useState(0);
  const [historyList, setHistoryList] = useState(['1+1=2']);

  const digitPressed = (digit) => {
    if (!operation) {
      setLeftDigit(digit);
    } else {
      setRightDigit(digit);
    }
  };

  const operationPressed = (op) => {
    setOperation(op);
  };

  const equalsPressed = () => {
    let res = 0;
    let historyItem = '';

    switch (operation) {
      case "+":
        res = leftDigit + rightDigit;
        break;
      case "-":
        res = leftDigit - rightDigit;
        break;
      case "/":
        res = leftDigit / rightDigit;
        break;
      case "*":
        res = leftDigit * rightDigit;
        break;
    }
    setResult(res);
    setHistoryList([...historyList,`${leftDigit} ${operation} ${rightDigit} = ${res}`]);
  };

  const clear = () => {
    setRightDigit(0);
    setLeftDigit(0);
    setOperation('');
    setResult(0);
  }

  return (
    <div className="container-fluid">
      <div className="row mb-3">
        <div className="col-md digit">{leftDigit}</div>
        <div className="col-md-1 text-center operator">{operation}</div>
        <div className="col-md digit">{rightDigit}</div>
        <div className="col-md-1 text-center operator">=</div>
  <div className="col-md digit">{result}</div>
      </div>
      <div className="row">
        <div className="col">
          <Calculator
            operationPressed={operationPressed}
            digitPressed={digitPressed}
            equalsPressed={equalsPressed}
            clear={clear}
          />
        </div>
        <div className="col">
          <h3>History</h3>
        <ul>
  {historyList.map(item => <li>{item}</li>)}
        </ul>
        
        
        
        </div>

      </div>
    </div>
  );
}

export default App;
