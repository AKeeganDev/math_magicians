import { useState } from 'react';
import '../Calculator.css';
import Button from './button';
import calculate from '../logic/calculate';

function Calculator() {
  const [state, setState] = useState({
    total: '',
    next: '',
    result: null,
    operation: null,
  });

  const updateInput = (e) => {
    const {
      result,
      total,
      next,
      operation,
    } = state;
    const prevState = Object.assign(state, {
      result,
      total,
      next,
      operation,
    });
    const buttonName = e.target.textContent;
    const newState = calculate(prevState, buttonName);
    setState(({
      total: (newState.total || newState.next),
      result: (newState.next || ''),
      next: (newState.next || ''),
      operation: (newState.operation || null),
    }));
  };
  const { total, next } = state;
  const display = next || total || 0;

  return (
    <div className="Calculator">
      <input type="text" className="display" name="result" placeholder="0" id="result" value={display} />
      <Button clickCallBack={updateInput} className="number clear" value="AC" />
      <Button clickCallBack={updateInput} className="number neg" value="+/-" />
      <Button clickCallBack={updateInput} className="number percent" value="%" />
      <Button clickCallBack={updateInput} className="divide" value="÷" />
      <Button clickCallBack={updateInput} className="seven" value="7" />
      <Button clickCallBack={updateInput} className="number eight" value="8" />
      <Button clickCallBack={updateInput} className="number nine" value="9" />
      <Button clickCallBack={updateInput} className="multiply" value="x" />
      <Button clickCallBack={updateInput} className="number four" value="4" />
      <Button clickCallBack={updateInput} className="number five" value="5" />
      <Button clickCallBack={updateInput} className="number six" value="6" />
      <Button clickCallBack={updateInput} className="subtract" value="-" />
      <Button clickCallBack={updateInput} className="number one" value="1" />
      <Button clickCallBack={updateInput} className="number two" value="2" />
      <Button clickCallBack={updateInput} className="number three" value="3" />
      <Button clickCallBack={updateInput} className="add" value="+" />
      <Button clickCallBack={updateInput} className="number zero" value="0" />
      <Button clickCallBack={updateInput} className="number decimal" value="." />
      <Button clickCallBack={updateInput} className="equals" value="=" />
    </div>
  );
}

export default Calculator;
