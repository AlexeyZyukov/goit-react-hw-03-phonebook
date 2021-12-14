import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Filter extends Component {
  static propTypes = {
    filter: PropTypes.string,
    onChange: PropTypes.func.isRequired,
  };

  render() {
    const { toFind, onChange } = this.props;
    return (
      <div className="container">
        <p className="filterTitle">Find contacts by name</p>
        <input
          className="formInput"
          type="text"
          name="filter"
          value={toFind}
          onChange={onChange}
        />
      </div>
    );
  }
}
