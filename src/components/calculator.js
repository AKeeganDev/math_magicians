import { PureComponent } from 'react';
import '../Calculator.css';
import Button from './button';
import calculate from '../logic/calculate';

export default class Calculator extends PureComponent {
  constructor(props) {
    super(props);
    this.updateInput = this.updateInput.bind(this);
    this.state = {
      total: '',
      next: '',
      result: null,
      operation: null,
    };
  }

  updateInput(e) {
    const {
      result,
      total,
      next,
      operation,
    } = this.state;
    const prevState = Object.assign(this.state, {
      result,
      total,
      next,
      operation,
    });
    const buttonName = e.target.textContent;
    const newState = calculate(prevState, buttonName);
    this.setState(({
      total: (newState.total || newState.next),
      result: (newState.next || ''),
      next: (newState.next || ''),
      operation: (newState.operation || null),
    }));
  }

  render() {
    const { total, next } = this.state;
    const display = next || total || 0;
    return (
      <div className="Calculator">
        <input type="text" className="display" name="result" placeholder="0" id="result" value={display} />
        <Button clickCallBack={this.updateInput} className="number clear" value="AC" />
        <Button clickCallBack={this.updateInput} className="number neg" value="+/-" />
        <Button clickCallBack={this.updateInput} className="number percent" value="%" />
        <Button clickCallBack={this.updateInput} className="divide" value="÷" />
        <Button clickCallBack={this.updateInput} className="seven" value="7" />
        <Button clickCallBack={this.updateInput} className="number eight" value="8" />
        <Button clickCallBack={this.updateInput} className="number nine" value="9" />
        <Button clickCallBack={this.updateInput} className="multiply" value="x" />
        <Button clickCallBack={this.updateInput} className="number four" value="4" />
        <Button clickCallBack={this.updateInput} className="number five" value="5" />
        <Button clickCallBack={this.updateInput} className="number six" value="6" />
        <Button clickCallBack={this.updateInput} className="subtract" value="-" />
        <Button clickCallBack={this.updateInput} className="number one" value="1" />
        <Button clickCallBack={this.updateInput} className="number two" value="2" />
        <Button clickCallBack={this.updateInput} className="number three" value="3" />
        <Button clickCallBack={this.updateInput} className="add" value="+" />
        <Button clickCallBack={this.updateInput} className="number zero" value="0" />
        <Button clickCallBack={this.updateInput} className="number decimal" value="." />
        <Button clickCallBack={this.updateInput} className="equals" value="=" />
      </div>
    );
  }
}
