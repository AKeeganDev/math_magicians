import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

export default class Button extends PureComponent {
  render() {
    const { value, className, clickCallBack } = this.props;
    return (
      <button type="button" onClick={clickCallBack} className={className} name={value}>{value}</button>
    );
  }
}

Button.propTypes = {
  value: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
  clickCallBack: PropTypes.func,
};

Button.defaultProps = {
  clickCallBack: () => { },
};
