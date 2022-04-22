import { PureComponent } from 'react';
import '../Calculator.css';
import Button from './button';

export default class Calculator extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  componentDidMount() {
    this.setState(() => ({
      result: 'Please enter some numbers to begin!',
    }));
  }

  render() {
    const { result } = this.state;
    return (
      <div className="Calculator">
        <input type="text" className="display" name="result" placeholder="0" id="result" value={result} />
        <Button className="number clear" value="AC" />
        <Button className="number neg" value="+/-" />
        <Button className="number percent" value="%" />
        <Button className="divide" value="÷" />
        <Button className="seven" value="7" />
        <Button className="number eight" value="8" />
        <Button className="number nine" value="9" />
        <Button className="multiply" value="x" />
        <Button className="number four" value="4" />
        <Button className="number five" value="5" />
        <Button className="number six" value="6" />
        <Button className="subtract" value="-" />
        <Button className="number one" value="1" />
        <Button className="number two" value="2" />
        <Button className="number three" value="3" />
        <Button className="add" value="+" />
        <Button className="number zero" value="0" />
        <Button className="number decimal" value="." />
        <Button className="equals" value="=" />
      </div>
    );
  }
}
