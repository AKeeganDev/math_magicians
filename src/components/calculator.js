import { PureComponent } from 'react';
import '../Calculator.css';
import PropTypes from 'prop-types';
import Button from './button';

export default class Calculator extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    const { result } = this.props;
    return (
      <div className="Calculator">
        <input type="text" className="display" name="result" placeholder="0" id="result" value={result} />
        <Button className="clear" value="AC" />
        <Button className="neg" value="+/-" />
        <Button className="number percent" value="%" />
        <Button className="number divide" value="÷" />
        <Button className="number seven" value="7" />
        <Button className="number eight" value="8" />
        <Button className="number nine" value="9" />
        <Button className="number multiply" value="x" />
        <Button className="number four" value="4" />
        <Button className="number five" value="5" />
        <Button className="number six" value="6" />
        <Button className="subtract" value="-" />
        <Button className="number one" value="1" />
        <Button className="number two" value="2" />
        <Button className="number three" value="3" />
        <Button className="number add" value="+" />
        <Button className="number zero" value="0" />
        <Button className="decimal" value="." />
        <Button className="number equals" value="=" />
      </div>
    );
  }
}

Calculator.propTypes = {
  result: PropTypes.string.isRequired,
};

Calculator.defaultPropTypes = {
  result: '0',
};
