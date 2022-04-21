import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

export default class Button extends PureComponent {
  render() {
    const { value, className } = this.props;
    return (
      <button type="button" className={className} name={value}>{value}</button>
    );
  }
}

Button.propTypes = {
  value: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
};
