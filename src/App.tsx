import './App.css';
import ValueInput from './components/ValueInput';
import OperatorButton from './components/OperatorButton';
import { OperatorTypeEnum } from './enums';
import useCalculator from './hooks/useCalculator';

function App() {
  const { result, addOrRemoveValue, calculate, errorMsg } = useCalculator()

  return (
    <div className="App">
      <header className="App-header">
        <h2>Kalkulator Sederhana</h2>
        <ValueInput idx={0} onInOrExcludeVal={addOrRemoveValue}/>
        <ValueInput idx={1} onInOrExcludeVal={addOrRemoveValue}/>
        <ValueInput idx={2} onInOrExcludeVal={addOrRemoveValue}/>

        <div style={{ display: "flex", justifyContent: "space-between", columnGap: "10px" }}>
          <OperatorButton type={OperatorTypeEnum.BAGI} onCalculate={calculate}/>
          <OperatorButton type={OperatorTypeEnum.KALI} onCalculate={calculate}/>
          <OperatorButton type={OperatorTypeEnum.KURANG} onCalculate={calculate}/>
          <OperatorButton type={OperatorTypeEnum.TAMBAH} onCalculate={calculate}/>
        </div>

        {errorMsg &&
          <div style={{ marginTop: "20px", fontSize: "12px", padding: "20px", backgroundColor: "red" }}>
            {errorMsg}
          </div>
        }

        <h3>{"Hasil " + result}</h3>
      </header>
    </div>
  );
}

export default App;
