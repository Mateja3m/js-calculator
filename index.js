function App() {
  const [expression, setExpression] = React.useState("");
  const [result, setResult] = React.useState(0);

  const display = (symbol) => {
    setExpression((prev) => prev + symbol);
    if(expression[expression.length - 1] == "=") {
      if(/[0-9.]/.test(symbol)) {
        setExpression(symbol);
      } else {
        setExpression(result + symbol)
      }
    }
  };
  const calculate = () => {
    setResult(eval(expression));
    setExpression(prev => prev + "=")
  };

  const allClear = () => {
    setExpression("");
    setResult(0);
  };

  const clear = () => {
    setExpression((prev) =>
      prev
        .split("")
        .slice(0, prev.length - 1)
        .join("")
    );
    setResult(0);
  };
  return (
    <div className="container">
      <h1>JS Calculator</h1>
      <div className="grid">
        <div className="dis">
          <input type="text" value={expression} placeholder="0" disabled />
          <div className="total">{result}</div>
        </div>
        <div onClick={allClear} className="btn btn-ac">
          AC
        </div>
        <div onClick={clear} className="btn btn-c">
          C
        </div>
        <div onClick={() => display("/")} className="btn btn-divide signs">
          /
        </div>
        <div onClick={() => display("*")} className="btn btn-times signs">
          X
        </div>
        <div onClick={() => display("7")} className="btn btn-seven">
          7
        </div>
        <div onClick={() => display("8")} className="btn btn-eight">
          8
        </div>
        <div onClick={() => display("9")} className="btn btn-nine">
          9
        </div>
        <div onClick={() => display("+")} className="btn btn-plus signs">
          +
        </div>
        <div onClick={() => display("4")} className="btn btn-four">
          4
        </div>
        <div onClick={() => display("5")} className="btn btn-five">
          5
        </div>
        <div onClick={() => display("6")} className="btn btn-six">
          6
        </div>
        <div onClick={() => display("-")} className="btn btn-minus signs">
          -
        </div>
        <div onClick={() => display("1")} className="btn btn-one">
          1
        </div>
        <div onClick={() => display("2")} className="btn btn-two">
          2
        </div>
        <div onClick={() => display("3")} className="btn btn-three">
          3
        </div>
        <div onClick={calculate} className="btn btn-equals">
          =
        </div>
        <div onClick={() => display("0")} className="btn btn-zero">
          0
        </div>
        <div onClick={() => display(".")} className="btn btn-dot">
          .
        </div>
      </div>
        <h4 className="person">Coded by <a href="https://github.com/Mateja3m" target='_blank' rel='noopener noreferrer'>Milan Matejic</a></h4>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
