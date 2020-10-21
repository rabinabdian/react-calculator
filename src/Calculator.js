import React from "react";

function Calculator(props) {
  return (
    <>
      <div className="row">
        <button
          type="button"
          className="btn btn-outline-primary"
          onClick={() => props.digitPressed(1)}
        >
          1
        </button>
        <button
          type="button"
          className="btn btn-outline-primary"
          onClick={() => props.digitPressed(2)}
        >
          2
        </button>
        <button
          type="button"
          className="btn btn-outline-primary"
          onClick={() => props.digitPressed(3)}
        >
          3
        </button>
        <button
          type="button"
          className="btn btn-outline-primary"
          onClick={() => props.operationPressed("+")}
        >
          +
        </button>
      </div>
      <div className="row">
        <button
          type="button"
          className="btn btn-outline-primary"
          onClick={() => props.digitPressed(4)}
        >
          4
        </button>
        <button
          type="button"
          className="btn btn-outline-primary"
          onClick={() => props.digitPressed(5)}
        >
          5
        </button>
        <button
          type="button"
          className="btn btn-outline-primary"
          onClick={() => props.digitPressed(6)}
        >
          6
        </button>
        <button
          type="button"
          className="btn btn-outline-primary"
          onClick={() => props.operationPressed("-")}
        >
          -
        </button>
      </div>
      <div className="row">
        <button
          type="button"
          className="btn btn-outline-primary"
          onClick={() => props.digitPressed(7)}
        >
          7
        </button>
        <button
          type="button"
          className="btn btn-outline-primary"
          onClick={() => props.digitPressed(8)}
        >
          8
        </button>
        <button
          type="button"
          className="btn btn-outline-primary"
          onClick={() => props.digitPressed(9)}
        >
          9
        </button>
        <button
          type="button"
          className="btn btn-outline-primary"
          onClick={() => props.operationPressed("*")}
        >
          *
        </button>
      </div>
      <div className="row">
        <button
          type="button"
          className="btn btn-outline-primary"
          onClick={() => props.digitPressed(0)}
        >
          0
        </button>
        <button
          type="button"
          className="btn btn-outline-primary"
          onClick={() => props.equalsPressed()}
        >
          =
        </button>
        <button
          type="button"
          className="btn btn-outline-primary"
          onClick={() => props.operationPressed("/")}
        >
          /
        </button>
      </div>
      <div className="row">
      <button type="button" className="btn btn-outline-primary"
                        onClick={() => props.clear()}>
                    Clear
                </button>
      </div>
    </>
  );
}

export default Calculator;
